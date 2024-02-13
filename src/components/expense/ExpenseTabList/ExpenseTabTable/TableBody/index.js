import { DndContext, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import { restrictToParentElement, restrictToVerticalAxis } from '@dnd-kit/modifiers'
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { Table } from 'antd'
import { useMemo } from 'react'
import { BodyCell } from '@/components/table/cell'
import { BodyRow } from '@/components/table/row'

const TableBody = ({ dataSource, setDataSource, columns, handleSave }) => {
  const components = {
    body: {
      row: BodyRow,
      cell: BodyCell,
    },
  }

  const formattedColumns = useMemo(() => {
    return columns.map((col) => {
      if (!col.editable) {
        return col
      }
      return {
        ...col,
        onCell: (record) => {
          return {
            record,
            handleSave,
            type: col.type,
            editable: col.editable,
            dataIndex: col.dataIndex,
            item: col,
          }
        },
      }
    })
  }, [columns])

  const onDragEnd = ({ active, over }) => {
    if (active.id !== over?.id) {
      setDataSource((previous) => {
        const activeIndex = previous.findIndex((i) => i.key === active.id)
        const overIndex = previous.findIndex((i) => i.key === over?.id)
        return arrayMove(previous, activeIndex, overIndex)
      })
    }
  }

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 0.01,
      },
    })
  )

  return (
    <DndContext
      sensors={sensors}
      modifiers={[restrictToVerticalAxis, restrictToParentElement]}
      onDragEnd={onDragEnd}
    >
      <SortableContext items={dataSource.map((i) => i.key)} strategy={verticalListSortingStrategy}>
        <Table
          size="small"
          pagination={false}
          showHeader={false}
          components={components}
          columns={formattedColumns}
          dataSource={dataSource}
          rowClassName={() => 'editable-row'}
          tableLayout="fixed"
          rowKey="key"
          bordered
        />
      </SortableContext>
    </DndContext>
  )
}

export default TableBody
