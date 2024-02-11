import { useDeferredValue, useRef, useState } from 'react'
import { Input, Tag } from '@/components/ui'
import { FILTER_SELECT_COLOR } from '@/constants'
import { cn } from '@/utils'

const SingleSelectTagInput = ({ item }) => {
  const { color } = item || {}

  const [value, setValue] = useState('')

  const style = {
    color: FILTER_SELECT_COLOR[color].TEXT_COLOR.RGBA,
    backgroundColor: FILTER_SELECT_COLOR[color].BADGE_COLOR.RGBA,
  }

  const deferredValue = useDeferredValue(value)

  const inputRef = useRef(null)

  const onChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div
      id="single-select-input"
      className={cn(
        'relative flex min-h-[30px] flex-wrap gap-1 border-b border-[#ededed] px-2 pb-1.5 pt-2',
        'bg-[rgba(242,_241,_238,_0.6)]'
      )}
    >
      <Tag size="medium" style={style} item={item} onRemove={() => {}} />
      <div className="flex-center h-[18px] min-w-[60px] flex-1">
        <Input
          size="small"
          ref={inputRef}
          value={deferredValue}
          onChange={onChange}
          placeholder=""
        />
      </div>
    </div>
  )
}

export default SingleSelectTagInput
