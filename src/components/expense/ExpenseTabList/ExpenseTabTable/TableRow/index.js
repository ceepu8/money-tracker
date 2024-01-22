'use client'

import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Form } from 'antd'
import { Children, cloneElement, useEffect, useState } from 'react'
import { MenuIcon } from '@/components/icons'
import { TableContext } from '../context'

const TableRow = ({ index, children, ...props }) => {
  const [domLoaded, setDomLoaded] = useState(false)
  const [form] = Form.useForm()

  useEffect(() => {
    setDomLoaded(true)
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
      {domLoaded && (
        <Form form={form} component={false}>
          <TableContext.Provider value={form}>
            <tr {...props} ref={setNodeRef} style={style} {...attributes}>
              {Children.map(children, (child) => {
                if (child.key === 'key-0') {
                  return cloneElement(child, {
                    children: (
                      <div className="flex h-6 items-center gap-x-2">
                        <MenuIcon
                          className="h-4 w-4"
                          ref={setActivatorNodeRef}
                          style={{
                            touchAction: 'none',
                            cursor: 'move',
                          }}
                          {...listeners}
                        />
                        {child}
                      </div>
                    ),
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

export default TableRow
