import { Checkbox, Typography } from 'antd'
import { filter, includes } from 'lodash'
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { MenuIcon, XMarkIcon } from '@/components/icons'
import { Input, Select } from '@/components/ui'
import { COLOR_CODE_BY_TYPES, SELECT_FILTER_OPTIONS } from '@/constants'
import { useBackspaceDetection } from '@/hooks/shared'
import ExtraSettingPopover from '../../ExtraSettingPopover'

const {} = Checkbox.Group

const DUMMY_DATA = {
  dataIndex: 'category',
  editable: true,
  icon: 'chevron-down',
  title: 'Category',
  width: 120,
  id: 'select',
  type: 'select',
  selectList: [
    {
      id: '1',
      label: 'Restaurants/Coffee',
      value: 'Restaurants/Coffee',
      color: 'red',
    },
    {
      id: '2',
      label: 'Groceries',
      value: 'Groceries',
      color: 'green',
    },
    {
      id: '3',
      label: 'Household Goods',
      value: 'Household Goods',
      color: 'yellow',
    },
    {
      id: '4',
      label: 'Gifts',
      value: 'Gifts',
      color: 'purple',
    },
    {
      id: '5',
      label: 'Medical',
      value: 'Medical',
      color: 'orange',
    },
    {
      id: '6',
      label: 'Pet',
      value: 'Pet',
      color: 'blue',
    },
    {
      id: '7',
      label: 'Clothing/Accessories',
      value: 'Clothing/Accessories',
      color: 'gray',
    },
    {
      id: '8',
      label: 'Skincare/Cosmetic Products',
      value: 'Skincare/Cosmetic Products',
      color: 'pink',
    },
  ],
}

const TagInput = ({ setCheckedList, checkedList, open }) => {
  const [value, setValue] = useState('')
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
    const newCheckedList = checkedList.filter((item, index) => index !== checkedList.length - 1)
    setCheckedList(newCheckedList)
  }

  const deleteCheckedItem = (deleteId) => {
    const newCheckedList = checkedList.filter((item) => item.id !== deleteId)
    setCheckedList(newCheckedList)
  }

  useBackspaceDetection(handleBackspace)

  return (
    <div className="flex min-h-[30px] flex-wrap gap-1 rounded-md border border-blue bg-[#f7f7f5] p-1 shadow-[0_0_0_2px_rgba(5,_145,_255,_0.2)]">
      {(checkedList || []).map((item) => {
        const { id, label, color } = item || {}

        return (
          <div
            key={id}
            style={{
              color: COLOR_CODE_BY_TYPES[color].TEXT_COLOR.RGBA,
              backgroundColor: COLOR_CODE_BY_TYPES[color].BADGE_COLOR.RGBA,
            }}
            className="flex-center h-[18px] w-max truncate rounded px-2 text-sm leading-5"
          >
            <span>{label}</span>
            <button
              onClick={() => deleteCheckedItem(id)}
              className="flex-center h-[18px] w-[18px] opacity-60 transition-[opacity] hover:opacity-40"
            >
              <XMarkIcon className="size-3 stroke-[3px]" />
            </button>
          </div>
        )
      })}
      <div className="flex-center h-[18px] min-w-[60px] flex-1">
        <Input
          ref={inputRef}
          value={value}
          onChange={onChange}
          size="small"
          name="search"
          label="search"
          placeholder={placeholder}
        />
      </div>
    </div>
  )
}

const SelectOptionList = ({ list, checkedList, setCheckedList }) => {
  const onChange = (value) => {
    setCheckedList(value)
  }

  return (
    <Checkbox.Group value={checkedList} onChange={onChange} className="flex flex-col">
      {(list || []).map((item) => {
        const { id, label, color } = item || {}
        return (
          <Checkbox
            key={id}
            name={label}
            value={item}
            className="flex min-h-7 cursor-pointer items-center gap-x-1 rounded px-2 transition-colors hover:bg-[rgba(55,_53,_47,_0.08)]"
          >
            <span
              style={{
                color: COLOR_CODE_BY_TYPES[color].TEXT_COLOR.RGBA,
                backgroundColor: COLOR_CODE_BY_TYPES[color].BADGE_COLOR.RGBA,
              }}
              className="block h-5 w-full truncate rounded px-2 text-sm leading-5"
            >
              {label}
            </span>
          </Checkbox>
        )
      })}
    </Checkbox.Group>
  )
}

const FilterSelectPopoverContent = ({ item, open }) => {
  const { title, selectList } = DUMMY_DATA || {}
  const [checkedList, setCheckedList] = useState([])

  // const isFullChecked = checkedList.length === selectList.length

  return (
    <div className="filter_popover filter_select_popover flex flex-col gap-y-1">
      <div className="flex items-center">
        <Typography.Text type="secondary" className="truncate !text-xs">
          {title}
        </Typography.Text>
        <Select
          defaultValue={SELECT_FILTER_OPTIONS[0].value}
          options={SELECT_FILTER_OPTIONS}
          dropdownStyle={{
            width: 180,
            fontSize: '12px',
          }}
        />
        <div className="ml-auto">
          <ExtraSettingPopover onDelete={() => {}} onAdvancedFilter={() => {}} />
        </div>
      </div>
      <TagInput checkedList={checkedList} open={open} setCheckedList={setCheckedList} />
      <SelectOptionList
        list={selectList}
        checkedList={checkedList}
        setCheckedList={setCheckedList}
      />
    </div>
  )
}

export default FilterSelectPopoverContent
