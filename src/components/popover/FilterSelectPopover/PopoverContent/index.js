import { Pressable } from '@react-aria/interactions'
import { Checkbox, Typography } from 'antd'
import { useDeferredValue, useEffect, useMemo, useRef, useState } from 'react'
import { XMarkIcon } from '@/components/icons'
import ExtraSettingPopover from '@/components/popover/ExtraSettingPopover'
import { Input, Select } from '@/components/ui'
import { COLOR_CODE_BY_TYPES, SELECT_FILTER_OPTIONS } from '@/constants'
import DUMMY_DATA from '@/data/category-select-list.json'
import { useBackspaceDetection } from '@/hooks/shared'
import { cn } from '@/utils'

const TagInput = ({ setCheckedList, checkedList, value, setValue }) => {
  const deferredValue = useDeferredValue(value)

  const placeholder = checkedList.length === 0 ? 'Select one or more options' : ''
  const hasCloseButton = checkedList.length > 0 || value
  const inputRef = useRef(null)

  const onChange = (e) => {
    setValue(e.target.value)
  }

  useEffect(() => {
    inputRef?.current.focus()
  }, [checkedList])

  const handleBackspace = () => {
    if (!deferredValue) {
      const newCheckedList = checkedList.filter((_item, index) => index !== checkedList.length - 1)
      setCheckedList(newCheckedList)
    }
  }

  const deleteCheckedItem = (deleteId) => {
    const newCheckedList = checkedList.filter((item) => item.id !== deleteId)
    setCheckedList(newCheckedList)
  }

  useBackspaceDetection(handleBackspace)

  const renderCheckedItem = (item) => {
    const { id, label, color } = item || {}

    const style = {
      color: COLOR_CODE_BY_TYPES[color].TEXT_COLOR.RGBA,
      backgroundColor: COLOR_CODE_BY_TYPES[color].BADGE_COLOR.RGBA,
    }

    return (
      <div
        key={id}
        style={style}
        className="flex-center h-[18px] w-max truncate rounded pl-1 text-xs leading-5"
      >
        <span>{label}</span>
        <Pressable onPress={() => deleteCheckedItem(id)}>
          <div className="flex-center size-[18px] opacity-60 transition-[opacity] hover:opacity-40">
            <XMarkIcon className="size-[11px] stroke-[3px]" />
          </div>
        </Pressable>
      </div>
    )
  }

  return (
    <div
      className={cn(
        'relative flex min-h-[30px] flex-wrap gap-1 rounded-md border border-blue',
        'bg-light-gray p-1 pr-7 shadow-[0_0_0_2px_rgba(5,_145,_255,_0.2)]'
      )}
    >
      {(checkedList || []).map(renderCheckedItem)}
      <div className="flex-center h-[18px] min-w-[60px] flex-1">
        <Input
          ref={inputRef}
          value={deferredValue}
          onChange={onChange}
          size="small"
          name="search"
          label="search"
          placeholder={placeholder}
        />
      </div>
      {hasCloseButton ? (
        <Pressable onPress={() => setCheckedList([])}>
          <div
            className={cn(
              'flex-center size-[14px] cursor-pointer transition-colors',
              'rounded-full bg-[rgba(55,_53,_47,_0.7)] text-white hover:bg-[rgba(55,_53,_47,_0.8)]',
              'absolute right-2 top-1.5'
            )}
          >
            <XMarkIcon className="size-2.5 stroke-[3px]" />
          </div>
        </Pressable>
      ) : null}
    </div>
  )
}

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
      color: COLOR_CODE_BY_TYPES[color].TEXT_COLOR.RGBA,
      backgroundColor: COLOR_CODE_BY_TYPES[color].BADGE_COLOR.RGBA,
    }

    return (
      <Checkbox
        key={id}
        name={label}
        value={item}
        onChange={onChange}
        className="flex min-h-7 cursor-pointer items-center gap-x-1 rounded px-2 transition-colors hover:bg-[rgba(55,_53,_47,_0.08)]"
      >
        <span style={style} className="block h-5 w-full truncate rounded px-2 text-sm leading-5">
          {label}
        </span>
      </Checkbox>
    )
  }

  return (
    <Checkbox.Group value={checkedList} className="flex flex-col">
      {(list || []).map(renderCheckboxItem)}
      {!list.length && <p className="text-xs">No result.</p>}
    </Checkbox.Group>
  )
}

const FilterSelectPopoverContent = ({ open }) => {
  const { title, selectList } = DUMMY_DATA || {}
  const [checkedList, setCheckedList] = useState([])

  const [value, setValue] = useState('')

  const filterList = useMemo(() => {
    return (selectList || []).filter(({ label }) => {
      return label.toLowerCase().includes(value.toLowerCase())
    })
  }, [selectList, value])

  return (
    <div className="filter_popover filter_select_popover flex flex-col gap-y-1">
      <div className="flex items-center">
        <Typography.Text type="secondary" className="truncate !text-xs">
          {title}
        </Typography.Text>
        <Select
          options={SELECT_FILTER_OPTIONS}
          defaultValue={SELECT_FILTER_OPTIONS[0].value}
          dropdownStyle={{ width: 180, fontSize: '12px' }}
        />
        <div className="ml-auto">
          <ExtraSettingPopover onDelete={() => {}} onAdvancedFilter={() => {}} />
        </div>
      </div>
      <TagInput
        open={open}
        setValue={setValue}
        setCheckedList={setCheckedList}
        checkedList={checkedList}
        value={value}
      />
      <SelectOptionList
        setValue={setValue}
        setCheckedList={setCheckedList}
        checkedList={checkedList}
        list={filterList}
      />
    </div>
  )
}

export default FilterSelectPopoverContent
