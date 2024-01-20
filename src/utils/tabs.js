'use client'

import { useState } from 'react'

export const useTabs = (initialPanes) => {
  const [activeKey, setActiveKey] = useState(initialPanes[0].key)
  const [items, setItems] = useState(initialPanes)

  const onChange = (key) => {
    setActiveKey(key)
  }

  const onAdd = (item) => {
    setItems([...items, item])
    setActiveKey(item.key)
  }

  const onRemove = (targetKey) => {
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
      onAdd()
    } else {
      onRemove(targetKey)
    }
  }

  return { items, setItems, activeKey, setActiveKey, onAdd, onRemove, onEdit, onChange }
}
