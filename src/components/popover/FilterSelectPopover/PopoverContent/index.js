import { Typography } from 'antd'
import { useMemo, useState } from 'react'
import ExtraSettingPopover from '@/components/popover/ExtraSettingPopover'
import { Select } from '@/components/ui'
import { FILTER_SELECT_OPTIONS } from '@/constants'
import DUMMY_DATA from '@/data/category-select-list.json'
import SelectOptionList from './SelectOptionList'
import SelectTagInput from './SelectTagInput'

const PopoverHeader = ({ title }) => {
  const handleDelete = () => {}
  const handleAdvancedFilter = () => {}

  return (
    <div className="flex items-center">
      <Typography.Text type="secondary" className="truncate !text-xs">
        {title}
      </Typography.Text>
      <Select
        options={FILTER_SELECT_OPTIONS}
        defaultValue={FILTER_SELECT_OPTIONS[0].value}
        dropdownStyle={{ width: 180, fontSize: '12px' }}
      />
      <ExtraSettingPopover
        className="ml-auto"
        onDelete={handleDelete}
        onAdvancedFilter={handleAdvancedFilter}
      />
    </div>
  )
}

const useSelectTagInput = (list) => {
  const [checkedList, setCheckedList] = useState([])
  const [value, setValue] = useState('')

  const filterList = useMemo(() => {
    return (list || []).filter(({ label }) => {
      return label.toLowerCase().includes(value.toLowerCase())
    })
  }, [list, value])

  return {
    checkedList,
    setCheckedList,
    value,
    setValue,
    filterList,
  }
}

const FilterSelectPopoverContent = ({ item: _item }) => {
  const { title, selectList } = DUMMY_DATA || {}

  const { checkedList, setCheckedList, value, setValue, filterList } = useSelectTagInput(selectList)

  return (
    <div className="filter_popover filter_select_popover flex flex-col gap-y-1">
      <PopoverHeader title={title} />
      <SelectTagInput
        value={value}
        setValue={setValue}
        checkedList={checkedList}
        setCheckedList={setCheckedList}
      />
      <SelectOptionList
        value={value}
        list={filterList}
        setValue={setValue}
        checkedList={checkedList}
        setCheckedList={setCheckedList}
      />
    </div>
  )
}

export default FilterSelectPopoverContent
