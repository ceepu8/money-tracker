'use client'

import { defaultDropAnimationSideEffects, DragOverlay } from '@dnd-kit/core'

const SortableOverlay = ({ children }) => {
  const dropAnimationConfig = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: '1',
        },
      },
    }),
  }
  return <DragOverlay dropAnimation={dropAnimationConfig}>{children}</DragOverlay>
}

export default SortableOverlay
