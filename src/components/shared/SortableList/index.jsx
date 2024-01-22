'use client'

/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-shadow */
import { DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import { restrictToParentElement } from '@dnd-kit/modifiers'
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
} from '@dnd-kit/sortable'
import React, { useMemo, useState } from 'react'
import { DragHandle, SortableItem } from './SortableItem'
import SortableOverlay from './SortableOverlay'

const SortableList = ({ items, onChange, renderItem }) => {
  const [active, setActive] = useState(null)

  const activeItem = useMemo(() => items.find((item) => item.id === active?.id), [active, items])

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  function onDragStart(event) {
    const { active } = event
    setActive(active)
  }

  function onDragEnd(event) {
    const { active, over } = event
    if (over && active.id !== over?.id) {
      const activeIndex = items.findIndex(({ id }) => id === active.id)
      const overIndex = items.findIndex(({ id }) => id === over.id)

      onChange(arrayMove(items, activeIndex, overIndex))
    }
    setActive(null)
  }

  return (
    <DndContext
      modifiers={[restrictToParentElement]}
      sensors={sensors}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <SortableContext items={items} strategy={horizontalListSortingStrategy}>
        <ul className="flex flex-row flex-nowrap p-0">
          {items.map((item) => (
            <React.Fragment key={item.id}>{renderItem(item)}</React.Fragment>
          ))}
        </ul>
      </SortableContext>
      <SortableOverlay>{activeItem ? renderItem(activeItem) : null}</SortableOverlay>
    </DndContext>
  )
}

SortableList.Item = SortableItem
SortableList.DragHandle = DragHandle

export default SortableList
