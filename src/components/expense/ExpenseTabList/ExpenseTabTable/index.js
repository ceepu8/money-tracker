import { Form, Input, Table } from 'antd'
import dayjs from 'dayjs'
import React, { useContext, useEffect, useRef, useState } from 'react'
import {
  CalculatorIcon,
  CalendarDaysIcon,
  ChevronDownIcon,
  LinkIcon,
  MenuIcon,
  PlusIcon,
} from '@/components/icons'
import { Button } from '@/components/ui'

const { Column, ColumnGroup, Footer, Summary } = Table

const TableHeader = ({ icon: Icon, label }) => {
  return (
    <div className="flex items-center gap-x-2">
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
      className="absolute bottom-[52px] left-0 z-20 flex h-[38px] w-full cursor-pointer items-center rounded-none border-b border-[#ededed] px-4 hover:bg-gray-50"
    >
      <div className="flex items-center gap-x-2">
        <PlusIcon className="h-4 w-4" />
        <span>New</span>
      </div>
    </div>
  )
}

const EditableContext = React.createContext(null)
const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm()
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  )
}
const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false)
  const inputRef = useRef(null)
  const form = useContext(EditableContext)
  useEffect(() => {
    if (editing) {
      inputRef.current.focus()
    }
  }, [editing])
  const toggleEdit = () => {
    setEditing(!editing)
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    })
  }
  const save = async () => {
    try {
      const values = await form.validateFields()
      toggleEdit()
      handleSave({
        ...record,
        ...values,
      })
    } catch (errInfo) {
      console.log('Save failed:', errInfo)
    }
  }
  let childNode = children
  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div role="presentation" onClick={toggleEdit} className="editable-cell-value-wrap">
        {children}
      </div>
    )
  }
  return <td {...restProps}>{childNode}</td>
}
const ExpenseTabTable = () => {
  const [dataSource, setDataSource] = useState([
    {
      key: '0',
      description: 'Edward King 0',
      amount: '32',
      link: 'Link',
      method: 'Shopee',
      date: dayjs(),
      category: 'Beverages',
      status: 'Completed',
      details: 'Details',
    },
    {
      key: '1',
      description: 'Edward King 1',
      amount: '32',
      link: 'Link',
      method: 'Shopee',
      date: dayjs(),
      category: 'Beverages',
      status: 'Completed',
      details: 'Details',
    },
  ])
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
        return <span>{text?.format('DD/MM/YYYY')}</span>
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
      row: EditableRow,
      cell: EditableCell,
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
  return (
    <div id="expense-table" className="relative">
      <TableAddNewRow onClick={handleAdd} />

      <Table
        id="expense-table"
        components={components}
        rowClassName={() => 'editable-row'}
        bordered
        scroll={{ x: 'max-content' }}
        dataSource={dataSource}
        columns={columns}
      />
    </div>
  )
}
export default ExpenseTabTable
