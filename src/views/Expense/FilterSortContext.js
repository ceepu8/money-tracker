import { createContext, useContext, useReducer } from 'react'

const initialContextValues = {
  filters: [],
  sorts: [],
}

export const FilterSortContext = createContext(initialContextValues)

export const useFilterSortContext = () => {
  const context = useContext(FilterSortContext)

  if (context === undefined) {
    throw new Error('useFilterSortContext must be used within a CustomThemeProvider')
  }

  return context
}

const deleteItem = (items, deleteId) => {
  return items.filter((item) => item.id !== deleteId)
}

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        ...state,
        filters: action.payload,
      }
    case 'SET_SORT':
      return {
        ...state,
        sorts: action.payload,
      }
    case 'ADD_FILTER_ITEM':
      return {
        ...state,
        filters: [...state.filters, action.payload],
      }
    case 'DELETE_FILTER_ITEM':
      return {
        ...state,
        filters: deleteItem(state.filters, action.payload),
      }
    case 'DELETE_SORT_ITEM':
      return {
        ...state,
        sorts: deleteItem(state.sorts, action.payload),
      }
    case 'ADD_SORT_ITEM':
      return {
        ...state,
        sorts: [...state.sorts, action.payload],
      }
    case 'REMOVE_ALL_FILTERS':
      return {
        ...state,
        filters: [],
      }
    case 'REMOVE_ALL_SORTS':
      return {
        ...state,
        sorts: [],
      }
    default:
      return state
  }
}

export const FilterSortProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, {
    filters: [],
    sorts: [],
  })

  const handleAddFilterItem = (value) => {
    dispatch({ type: 'ADD_FILTER_ITEM', payload: value })
  }

  const setSorts = (value) => {
    dispatch({ type: 'SET_SORT', payload: value })
  }

  const setFilters = (value) => {
    dispatch({ type: 'SET_FILTER', payload: value })
  }

  const handleAddSortItem = (value) => {
    dispatch({ type: 'ADD_SORT_ITEM', payload: value })
  }

  const handleDeleteFilterItem = (value) => {
    dispatch({ type: 'DELETE_FILTER_ITEM', payload: value })
  }

  const handleDeleteSortItem = (value) => {
    dispatch({ type: 'DELETE_SORT_ITEM', payload: value })
  }

  const handleRemoveAllFilters = (value) => {
    dispatch({ type: 'REMOVE_ALL_FILTERS' })
  }

  const handleRemoveAllSorts = (value) => {
    dispatch({ type: 'REMOVE_ALL_SORTS' })
  }

  return (
    <FilterSortContext.Provider
      value={{
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
      }}
    >
      {children}
    </FilterSortContext.Provider>
  )
}
