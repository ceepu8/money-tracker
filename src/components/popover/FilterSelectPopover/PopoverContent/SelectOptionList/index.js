import { Checkbox } from 'antd'
import { Tag } from '@/components/ui'
import { FILTER_SELECT_COLOR } from '@/constants'

const SelectOptionList = ({ setValue, list, checkedList, setCheckedList }) => {
  const onChange = (e) => {
    const { value } = e.target

    if (!value) return
    const found = checkedList.find((item) => item.id === value.id)

    if (found) {
      setCheckedList((prev) => prev.filter((item) => item.id !== value.id))
    } else {
      setCheckedList((prev) => [...prev, value])
    }
    setValue('')
  }

  const renderCheckboxItem = (item) => {
    const { id, label, color } = item || {}

    const style = {
      color: FILTER_SELECT_COLOR[color].TEXT_COLOR.RGBA,
      backgroundColor: FILTER_SELECT_COLOR[color].BADGE_COLOR.RGBA,
    }

    return (
      <Checkbox
        key={id}
        name={label}
        value={item}
        onChange={onChange}
        className="flex min-h-7 cursor-pointer items-center gap-x-1 rounded px-2 transition-colors hover:bg-[rgba(55,_53,_47,_0.08)]"
      >
        <Tag size="medium" style={style} item={item} />
      </Checkbox>
    )
  }

  return (
    <Checkbox.Group value={checkedList} className="flex flex-col">
      {!list.length ? <p className="text-xs">No result.</p> : list.map(renderCheckboxItem)}
    </Checkbox.Group>
  )
}

export default SelectOptionList
