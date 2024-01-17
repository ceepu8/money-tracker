import { Tabs } from 'antd'
import { v4 as uuidv4 } from 'uuid'
import { PlusIcon, TableCellsIcon } from '@/components/icons'
import { useTabs } from '@/utils'

const TabTitle = ({ children, icon: Icon }) => {
  return (
    <div className="flex items-center gap-x-2 px-2 py-1">
      <Icon className="h-4 w-4" />
      <span className="text-sm">{children}</span>
    </div>
  )
}

const TabContent = ({ children }) => {
  return <div className="className">{children}</div>
}

const defaultPanes = [
  {
    key: 'january',
    label: 'JANUARY',
    children: 'January Content',
    closable: false,
  },
  {
    key: 'february',
    label: 'FEBRUARY',
    children: 'February Content',
    closable: false,
  },
]

const AddTabButton = ({ onClick }) => {
  return (
    <button
      type="button"
      className="flex-center h-[30px] w-[30px] shrink-0 rounded border-none transition-colors hover:bg-gray-100"
      onClick={onClick}
    >
      <PlusIcon className="h-4 w-4 text-gray-500" />
    </button>
  )
}

const { TabPane } = Tabs

const ExpenseTabList = () => {
  const { items, activeKey, add, onEdit, onChange } = useTabs(defaultPanes)

  const onAddNewTab = () => {
    const newItem = {
      label: 'New View',
      children: 'New View Pane',
      key: uuidv4(),
      closable: false,
    }
    add(newItem)
  }

  return (
    <Tabs id="expense-tabs" activeKey={activeKey} onChange={onChange} onEdit={onEdit}>
      {items.map((item) => {
        const { key, children, label, closable } = item || {}
        return (
          <TabPane
            closable={closable}
            tab={<TabTitle icon={TableCellsIcon}>{label}</TabTitle>}
            key={key}
          >
            <TabContent>{children}</TabContent>
          </TabPane>
        )
      })}
      <TabPane disabled className="p-0" tab={<AddTabButton onClick={onAddNewTab} />} key="button" />
    </Tabs>
  )
}

export default ExpenseTabList
