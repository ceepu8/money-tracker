import { DndContext, PointerSensor, useSensor } from '@dnd-kit/core'
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  useSortable,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Tabs } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { PlusIcon, TableCellsIcon } from '@/components/icons'
import { cn, useTabs } from '@/utils'

const CLICK = {
  SINGLE: 1,
  DOUBLE: 2,
}

const TabTitle = ({ children, icon: Icon }) => {
  const [edit, setEdit] = useState(false)
  const [width, setWidth] = useState(0)
  const [value, setValue] = useState(children)

  const inputRef = useRef(null)
  const spanRef = useRef(null)

  useEffect(() => {
    if (spanRef?.current && !edit) {
      const { offsetWidth } = spanRef.current
      setWidth(offsetWidth)
    }
  }, [edit])

  const onClick = (e) => {
    switch (e.detail) {
      case CLICK.SINGLE:
        break

      case CLICK.DOUBLE:
        setEdit(true)
        break

      default:
        break
    }
  }

  const onChangeValue = (e) => {
    const { value: eValue } = e.target
    if (!eValue) return
    setValue(eValue)
  }

  const onBlur = () => {
    setEdit(false)
  }

  useEffect(() => {
    if (edit) {
      inputRef.current.focus()
    }
  }, [edit])

  return (
    <button type="button" onClick={onClick} className="flex items-center gap-x-2 px-2 py-1">
      <Icon className="h-4 w-4" />
      <span ref={spanRef} className={cn('text-sm', edit && 'hidden')}>
        {value}
      </span>
      <input
        value={value}
        onChange={onChangeValue}
        onBlur={onBlur}
        ref={inputRef}
        className={cn('hidden bg-inherit outline-none', edit && 'block')}
        style={{
          width: `${width}px`,
        }}
      />
    </button>
  )
}

const TabContent = ({ children }) => {
  return <div className="className">{children}</div>
}

const DraggableTabNode = ({ className, ...props }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: props['data-node-key'],
  })
  const style = {
    ...props.style,
    transform: CSS.Transform.toString(
      transform && {
        ...transform,
        scaleX: 1,
      }
    ),
    transition,
    cursor: 'move',
  }
  return React.cloneElement(props.children, {
    ref: setNodeRef,
    style,
    ...attributes,
    ...listeners,
  })
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
  const { items, setItems, activeKey, add, onEdit, onChange } = useTabs(defaultPanes)

  const onAddNewTab = () => {
    const newItem = {
      label: 'New View',
      children: 'New View Pane',
      key: uuidv4(),
      closable: false,
    }
    add(newItem)
  }

  const sensor = useSensor(PointerSensor, { activationConstraint: { distance: 10 } })

  const onDragEnd = ({ active, over }) => {
    if (active.id !== over?.id) {
      setItems((prev) => {
        const activeIndex = prev.findIndex((i) => i.key === active.id)
        const overIndex = prev.findIndex((i) => i.key === over?.id)
        return arrayMove(prev, activeIndex, overIndex)
      })
    }
  }
  const renderTabBar = (tabBarProps, DefaultTabBar) => (
    <DndContext sensors={[sensor]} onDragEnd={onDragEnd}>
      <SortableContext items={items.map((i) => i.key)} strategy={horizontalListSortingStrategy}>
        <DefaultTabBar {...tabBarProps}>
          {(node) => {
            return (
              <DraggableTabNode {...node.props} key={node.key}>
                {node}
              </DraggableTabNode>
            )
          }}
        </DefaultTabBar>
      </SortableContext>
    </DndContext>
  )

  const renderItem = (item) => {
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
  }
  return (
    <Tabs
      id="expense-tabs"
      activeKey={activeKey}
      onChange={onChange}
      onEdit={onEdit}
      renderTabBar={renderTabBar}
    >
      {items.map(renderItem)}
      <TabPane disabled className="p-0" tab={<AddTabButton onClick={onAddNewTab} />} key="button" />
    </Tabs>
  )
}

export default ExpenseTabList
