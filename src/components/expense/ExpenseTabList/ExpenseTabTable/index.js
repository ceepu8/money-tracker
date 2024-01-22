import { DndContext } from '@dnd-kit/core'
import { restrictToParentElement, restrictToVerticalAxis } from '@dnd-kit/modifiers'
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { Table } from 'antd'
import dayjs from 'dayjs'
import { useState } from 'react'
import {
  CalculatorIcon,
  CalendarDaysIcon,
  ChevronDownIcon,
  LinkIcon,
  MenuIcon,
  PlusIcon,
} from '@/components/icons'
import { Button } from '@/components/ui'
import data from '@/data/expense.json'
import TableCell from './TableCell'
import TableHead from './TableHead'
import TableRow from './TableRow'

const TableHeader = ({ icon: Icon, label }) => {
  return (
    <div className="flex items-center gap-x-2 text-gray-600">
      <Icon className="h-4 w-4" />
      <span className="truncate font-normal">{label}</span>
    </div>
  )
}

const TableAddNewRow = ({ onClick }) => {
  return (
    <div
      role="presentation"
      onClick={onClick}
      type="text"
      className="absolute bottom-[2px] left-0 z-20 flex h-10 w-[1430px] cursor-pointer items-center rounded-none border-b border-[#ededed] hover:bg-gray-50"
    >
      <div className="sticky left-0 flex items-center gap-x-2 pl-4">
        <PlusIcon className="h-4 w-4" />
        <span>New</span>
      </div>
    </div>
  )
}

const ExpenseTabTable = () => {
  const [dataSource, setDataSource] = useState(data)
  const [count, setCount] = useState(2)
  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key)
    setDataSource(newData)
  }
  const defaultColumns = [
    {
      title: <TableHeader icon={MenuIcon} label="Description" />,
      dataIndex: 'description',
      width: 320,
      editable: true,
    },
    {
      title: <TableHeader icon={CalculatorIcon} label="Amount" />,
      dataIndex: 'amount',
      width: 100,
      editable: true,
    },
    {
      title: <TableHeader icon={LinkIcon} label="Link" />,
      dataIndex: 'link',
      width: 100,
      editable: true,
      render: (text, record, index) => {
        return <span className="truncate">{text}</span>
      },
    },
    {
      title: <TableHeader icon={MenuIcon} label="Method" />,
      dataIndex: 'method',
      width: 100,
      editable: true,
    },
    {
      title: <TableHeader icon={CalendarDaysIcon} label="Date" />,
      dataIndex: 'date',
      width: 150,
      editable: true,
      render: (text, record, index) => {
        return <span>{dayjs(text)?.format('DD/MM/YYYY')}</span>
      },
    },
    {
      title: <TableHeader icon={ChevronDownIcon} label="Category" />,
      dataIndex: 'category',
      width: 120,
      editable: true,
      render: (text, record, index) => {
        return <>{text ? <span className="rounded-md bg-red-200 px-2 py-1">{text}</span> : null}</>
      },
    },
    {
      title: <TableHeader icon={CalendarDaysIcon} label="Status" />,
      dataIndex: 'status',
      width: 120,
      editable: true,
      render: (text, record, index) => {
        return (
          <>{text ? <span className="rounded-md bg-green-200 px-2 py-1">{text}</span> : null}</>
        )
      },
    },
    {
      title: <TableHeader icon={MenuIcon} label="Details" />,
      dataIndex: 'details',
      width: 320,
      editable: true,
    },
    {
      title: <Button type="text" icon={<PlusIcon className="h-4 w-4" />} />,
      width: 100,
      dataIndex: 'add',
      editable: false,
    },
  ]
  const handleAdd = () => {
    const newData = {
      key: count,
      description: '',
      amount: '',
      link: '',
      method: '',
      date: dayjs(),
      category: '',
      status: '',
      details: '',
    }
    setDataSource([...dataSource, newData])
    setCount(count + 1)
  }
  const handleSave = (row) => {
    const newData = [...dataSource]
    const index = newData.findIndex((item) => row.key === item.key)
    const item = newData[index]
    newData.splice(index, 1, {
      ...item,
      ...row,
    })
    setDataSource(newData)
  }
  const components = {
    body: {
      row: TableRow,
      cell: TableCell,
    },
  }
  const columns = defaultColumns.map((col) => {
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

  const onDragEnd = ({ active, over }) => {
    if (active.id !== over?.id) {
      setDataSource((previous) => {
        const activeIndex = previous.findIndex((i) => i.key === active.id)
        const overIndex = previous.findIndex((i) => i.key === over?.id)
        return arrayMove(previous, activeIndex, overIndex)
      })
    }
  }
  return (
    <div id="expense-table" className="relative overflow-scroll bg-white">
      <TableAddNewRow onClick={handleAdd} />
      <TableHead columns={columns} />
      <DndContext
        modifiers={[restrictToVerticalAxis, restrictToParentElement]}
        onDragEnd={onDragEnd}
      >
        <SortableContext
          items={dataSource.map((i) => i.key)}
          strategy={verticalListSortingStrategy}
        >
          <Table
            components={components}
            rowClassName={() => 'editable-row'}
            pagination={false}
            bordered
            columns={columns}
            dataSource={dataSource}
            showHeader={false}
            tableLayout="fixed"
          />
        </SortableContext>
      </DndContext>
    </div>
  )
}
export default ExpenseTabTable
