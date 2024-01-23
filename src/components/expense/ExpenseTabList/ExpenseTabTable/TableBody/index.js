import { DndContext } from '@dnd-kit/core'
import { restrictToParentElement, restrictToVerticalAxis } from '@dnd-kit/modifiers'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { Table } from 'antd'
import TableCell from './TableCell'
import TableRow from './TableRow'

const TableBody = ({ dataSource, onDragEnd, columns, handleSave }) => {
  const components = {
    body: {
      row: TableRow,
      cell: TableCell,
    },
  }

  const formattedColumns = columns.map((col) => {
    if (!col.editable) {
      return col
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    }
  })

  return (
    <DndContext modifiers={[restrictToVerticalAxis, restrictToParentElement]} onDragEnd={onDragEnd}>
      <SortableContext items={dataSource.map((i) => i.key)} strategy={verticalListSortingStrategy}>
        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          pagination={false}
          bordered
          columns={formattedColumns}
          dataSource={dataSource}
          showHeader={false}
          tableLayout="fixed"
        />
      </SortableContext>
    </DndContext>
  )
}

export default TableBody
