const { useState } = require('react')

export const useTabs = (initialPanes) => {
  const [activeKey, setActiveKey] = useState(initialPanes[0].key)
  const [items, setItems] = useState(initialPanes)

  const onChange = (key) => {
    setActiveKey(key)
  }

  const add = () => {
    const item = {
      label: 'New Tab',
      children: 'Content of new Tab',
      key: Math.random().toString(16).slice(2),
      closable: false,
    }
    setItems([...items, item])
    setActiveKey(item.key)
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

  return { items, activeKey, add, remove, onEdit, onChange }
}
