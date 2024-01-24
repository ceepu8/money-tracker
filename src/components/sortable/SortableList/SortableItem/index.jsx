import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { createContext, useContext, useMemo } from 'react'

export const SortableItemContext = createContext({
  attributes: {},
  listeners: undefined,
  ref() {},
})

export function DragHandle({ children }) {
  const { attributes, listeners, ref } = useContext(SortableItemContext)

  return (
    <div
      className="rounded-none p-0"
      role="presentation"
      type="button"
      {...attributes}
      {...listeners}
      ref={ref}
    >
      {children}
    </div>
  )
}

export const SortableItem = ({ children, id }) => {
  const {
    attributes,
    isDragging,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
  } = useSortable({ id })

  const context = useMemo(
    () => ({
      attributes,
      listeners,
      ref: setActivatorNodeRef,
    }),
    [attributes, listeners, setActivatorNodeRef]
  )
  const style = {
    opacity: isDragging ? 0.2 : undefined,
    backgroundColor: isDragging && '#ededed',
    transform: CSS.Translate.toString(transform),
    transition,
  }
  return (
    <SortableItemContext.Provider value={context}>
      <li ref={setNodeRef} style={style}>
        {children}
      </li>
    </SortableItemContext.Provider>
  )
}
