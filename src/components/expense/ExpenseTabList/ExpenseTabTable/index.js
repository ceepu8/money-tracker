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
import { ExpenseTableHead } from '@/components/table/head'
import { PROPERTY_TYPE } from '@/constants'
import data from '@/data/expense.json'
import TableBody from './TableBody'

const TableAddNewRow = ({ onClick }) => {
  return (
    <div
      role="presentation"
      onClick={onClick}
      className="sticky bottom-[-4px] left-0 z-20 flex h-10 w-full cursor-pointer items-center rounded-none border-b border-[#ededed] hover:bg-gray-50"
    >
      <div className="sticky left-0 flex items-center gap-x-2 pl-4">
        <PlusIcon className="h-4 w-4" />
        <span>New</span>
      </div>
    </div>
  )
}

const defaultColumns = [
  {
    dataIndex: 'drag',
    id: 'drag',
    width: 32,
  },
  {
    title: 'Description',
    type: PROPERTY_TYPE.TEXT,
    icon: MenuIcon,
    dataIndex: 'description',
    id: 'description',
    width: 320,
    editable: true,
  },
  {
    title: 'Amount',
    type: PROPERTY_TYPE.NUMBER,
    icon: CalculatorIcon,
    dataIndex: 'amount',
    id: 'amount',
    width: 100,
    editable: true,
  },
  {
    title: 'Link',
    type: PROPERTY_TYPE.URL,
    icon: LinkIcon,
    dataIndex: 'link',
    id: 'link',
    width: 100,
    editable: true,
  },
  {
    title: 'Method',
    type: PROPERTY_TYPE.TEXT,
    icon: MenuIcon,
    dataIndex: 'method',
    id: 'method',
    width: 100,
    editable: true,
  },
  {
    title: 'Date',
    type: PROPERTY_TYPE.DATE,
    icon: CalendarDaysIcon,
    dataIndex: 'date',
    id: 'date',
    width: 150,
    editable: true,
    render: (text) => {
      return <span>{dayjs(text)?.format('DD/MM/YYYY')}</span>
    },
  },
  {
    title: 'Category',
    type: PROPERTY_TYPE.SELECT,
    icon: ChevronDownIcon,
    dataIndex: 'category',
    id: 'category',
    width: 120,
    editable: true,
  },
  {
    title: 'Status',
    type: PROPERTY_TYPE.STATUS,
    icon: CalendarDaysIcon,
    dataIndex: 'status',
    id: 'status',
    width: 120,
    editable: true,
  },
  {
    title: 'Details',
    type: PROPERTY_TYPE.TEXT,
    icon: MenuIcon,
    dataIndex: 'details',
    id: 'details',
    width: 320,
    editable: true,
  },
  {
    title: '',
    icon: PlusIcon,
    width: 100,
    dataIndex: 'add',
    id: 'add',
    editable: false,
  },
]

const ExpenseTabTable = () => {
  const [dataSource, setDataSource] = useState(data)
  const [columns, setColumns] = useState(defaultColumns)
  const [count, setCount] = useState(2)

  // const handleDelete = (key) => {
  //   const newData = dataSource.filter((item) => item.key !== key)
  //   setDataSource(newData)
  // }

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

  return (
    <div id="expense-table" className="relative overflow-scroll bg-white pb-2">
      <ExpenseTableHead columns={columns} setColumns={setColumns} />
      <TableBody
        dataSource={dataSource}
        setDataSource={setDataSource}
        columns={columns}
        handleSave={handleSave}
      />
      <TableAddNewRow onClick={handleAdd} />
    </div>
  )
}
export default ExpenseTabTable
