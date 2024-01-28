import { createContext, useContext, useMemo, useReducer } from 'react'

const initialContextValues = {
  filters: [],
  sorts: [],
}

export const FilterSortContext = createContext(initialContextValues)

export const useFilterSortContext = () => {
  const context = useContext(FilterSortContext)

  if (!context) {
    throw new Error('useFilterSortContext must be used within a FilterSortProvider')
  }

  return context
}

const actions = {
  setFilter: 'SET_FILTER',
  setSort: 'SET_SORT',
  addFilterItem: 'ADD_FILTER_ITEM',
  deleteFilterItem: 'DELETE_FILTER_ITEM',
  deleteSortItem: 'DELETE_SORT_ITEM',
  addSortItem: 'ADD_SORT_ITEM',
  removeAllFilters: 'REMOVE_ALL_FILTERS',
  removeAllSorts: 'REMOVE_ALL_SORTS',
}

const deleteItem = (items, deleteId) => items.filter((item) => item.id !== deleteId)

const taskReducer = (state, action) => {
  switch (action.type) {
    case actions.setFilter:
      return { ...state, filters: action.payload }
    case actions.setSort:
      return { ...state, sorts: action.payload }
    case actions.addFilterItem:
      return { ...state, filters: [...state.filters, action.payload] }
    case actions.deleteFilterItem:
      return { ...state, filters: deleteItem(state.filters, action.payload) }
    case actions.deleteSortItem:
      return { ...state, sorts: deleteItem(state.sorts, action.payload) }
    case actions.addSortItem:
      return { ...state, sorts: [...state.sorts, action.payload] }
    case actions.removeAllFilters:
      return { ...state, filters: [] }
    case actions.removeAllSorts:
      return { ...state, sorts: [] }
    default:
      return state
  }
}

export const FilterSortProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialContextValues)

  const setSorts = (value) => {
    dispatch({ type: actions.setSort, payload: value })
  }
  const setFilters = (value) => {
    dispatch({ type: actions.setFilter, payload: value })
  }

  const handleAddFilterItem = (value) => {
    dispatch({ type: actions.addFilterItem, payload: value })
  }
  const handleAddSortItem = (value) => {
    dispatch({ type: actions.addSortItem, payload: value })
  }

  const handleDeleteFilterItem = (value) => {
    dispatch({ type: actions.deleteFilterItem, payload: value })
  }

  const handleDeleteSortItem = (value) => {
    dispatch({ type: actions.deleteSortItem, payload: value })
  }

  const handleRemoveAllFilters = () => {
    dispatch({ type: actions.removeAllFilters })
  }
  const handleRemoveAllSorts = () => {
    dispatch({ type: actions.removeAllSorts })
  }

  const values = useMemo(
    () => ({
      filters: state.filters,
      sorts: state.sorts,
      setSorts,
      setFilters,
      handleAddFilterItem,
      handleAddSortItem,
      handleDeleteFilterItem,
      handleDeleteSortItem,
      handleRemoveAllFilters,
      handleRemoveAllSorts,
    }),
    [state.filters, state.sorts]
  )

  return <FilterSortContext.Provider value={values}>{children}</FilterSortContext.Provider>
}
