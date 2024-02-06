import { Form, Input } from 'antd'
import { memo, useContext, useEffect, useRef, useState } from 'react'
import { TableContext } from '../../context'

const TextCell = ({ editable, children, dataIndex, record, handleSave }) => {
  const [editing, setEditing] = useState(false)
  const inputRef = useRef(null)
  const form = useContext(TableContext)

  useEffect(() => {
    inputRef.current?.focus()
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
      //   console.log('Save failed:', errInfo)
    }
  }

  let childNode = children

  if (editable) {
    childNode = editing ? (
      <Form.Item
        name={dataIndex}
        style={{
          margin: 0,
        }}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} style={{ fontSize: 14 }} />
      </Form.Item>
    ) : (
      <span role="presentation" onClick={toggleEdit} className="truncate px-2 text-sm">
        {children}
      </span>
    )
  }
  return <td className="ant-table-cell">{childNode}</td>
}

export default memo(TextCell)
