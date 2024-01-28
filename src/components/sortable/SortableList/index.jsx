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
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import React, { useMemo, useState } from 'react'
import { cn } from '@/utils'
import { DragHandle, SortableItem } from './SortableItem'
import SortableOverlay from './SortableOverlay'

const SORTING_TYPE = {
  horizontal: horizontalListSortingStrategy,
  vertical: verticalListSortingStrategy,
}

const SortableList = ({ items, type = 'horizontal', onChange, renderItem, className }) => {
  const [active, setActive] = useState(null)

  const activeItem = useMemo(() => items.find((item) => item.id === active?.id), [active, items])

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 0.01,
      },
    }),
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
      <SortableContext items={items} strategy={SORTING_TYPE[type]}>
        <ul
          className={cn(
            'flex flex-nowrap p-0',
            type === 'horizontal' ? 'flex-row' : 'flex-col',
            className
          )}
        >
          {items.map((item, index) => (
            <React.Fragment key={item.id}>{renderItem(item, index)}</React.Fragment>
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
