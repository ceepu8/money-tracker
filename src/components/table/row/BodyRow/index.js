'use client'

import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Form } from 'antd'
import { Children, cloneElement, forwardRef, memo, useEffect, useState } from 'react'
import { SixDotsVerticalIcon } from '@/components/icons'
import { TableContext } from '../../context'

const DraggingRow = forwardRef((props, ref) => {
  return (
    <div className="flex-center h-10">
      <SixDotsVerticalIcon
        className="h-4 w-4 shrink-0 fill-[#7e7e7e]"
        style={{
          touchAction: 'none',
          cursor: 'move',
        }}
        ref={ref}
        {...props}
      />
    </div>
  )
})

const TableRow = ({ index, children, ...props }) => {
  const [isHydrated, setHydrated] = useState(false)
  const [form] = Form.useForm()

  useEffect(() => {
    setHydrated(true)
  }, [])

  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: props['data-row-key'],
  })
  const style = {
    ...props.style,
    transform: CSS.Transform.toString(
      transform && {
        ...transform,
        scaleY: 1,
      }
    ),
    transition,
    ...(isDragging
      ? {
          position: 'relative',
          zIndex: 9999,
        }
      : {}),
  }
  return (
    <>
      {isHydrated && (
        <Form form={form} component={false}>
          <TableContext.Provider value={form}>
            <tr {...props} ref={setNodeRef} style={style} {...attributes}>
              {Children.map(children, (child) => {
                if (child.key === 'key-0') {
                  return cloneElement(child, {
                    children: <DraggingRow ref={setActivatorNodeRef} {...listeners} />,
                  })
                }
                return child
              })}
            </tr>
          </TableContext.Provider>
        </Form>
      )}
    </>
  )
}

export default memo(TableRow)
