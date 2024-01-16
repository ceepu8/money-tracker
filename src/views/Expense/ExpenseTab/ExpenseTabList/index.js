import { Tabs } from 'antd'
import { useRef, useState } from 'react'
import { TableCellsIcon } from '@/components/icons'

const TabTitle = ({ children, icon: Icon }) => {
  return (
    <div className="flex-center gap-x-2 px-2">
      <Icon className="h-4 w-4" />
      <span className="">{children}</span>
    </div>
  )
}

const TabContent = ({ children }) => {
  return <div className="className">{children}</div>
}

const defaultPanes = [
  {
    key: 'january',
    label: <TabTitle icon={TableCellsIcon}>JANUARY</TabTitle>,
    children: <TabContent>January Content</TabContent>,
  },
  {
    key: 'february',
    label: <TabTitle icon={TableCellsIcon}>FEBRUARY</TabTitle>,
    children: <TabContent>February Content</TabContent>,
  },
]

const ExpenseTabList = () => {
  const [activeKey, setActiveKey] = useState(defaultPanes[0].key)
  const [items, setItems] = useState(defaultPanes)
  const newTabIndex = useRef(0)

  const onChange = (key) => {
    setActiveKey(key)
  }

  const add = () => {
    const newTabValue = newTabIndex.current + 1
    const newActiveKey = `newTab${newTabValue}`
    setItems([
      ...items,
      {
        label: <TabTitle icon={TableCellsIcon}>New View</TabTitle>,
        children: <TabContent>New View Pane</TabContent>,
        key: newActiveKey,
      },
    ])
    setActiveKey(newActiveKey)
  }

  const remove = (targetKey) => {
    const targetIndex = items.findIndex((pane) => pane.key === targetKey)
    const newPanes = items.filter((pane) => pane.key !== targetKey)
    if (newPanes.length && targetKey === activeKey) {
      const { key } = newPanes[targetIndex === newPanes.length ? targetIndex - 1 : targetIndex]
      setActiveKey(key)
    }
    setItems(newPanes)
  }

  const onEdit = (targetKey, action) => {
    if (action === 'add') {
      add()
    } else {
      remove(targetKey)
    }
  }

  return (
    <div>
      <Tabs
        id="expense-tabs"
        activeKey={activeKey}
        onChange={onChange}
        items={items}
        onEdit={onEdit}
      />
      <div style={{ marginBottom: 16 }}>
        <button type="button" onClick={add}>
          ADD
        </button>
      </div>
    </div>
  )
}

export default ExpenseTabList
