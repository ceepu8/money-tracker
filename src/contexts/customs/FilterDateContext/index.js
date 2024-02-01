import { createContext, useContext, useMemo, useReducer } from 'react'

const initialContextValues = {
  dateRange: 'this',
  timeUnit: 'month',
  count: 1,
}

const FilterDateContext = createContext(initialContextValues)

const actions = {
  setDateRange: 'SET_DATE_RANGE',
  setTimeUnit: 'SET_TIME_UNIT',
  setCount: 'SET_COUNT',
}

const filterDateReducer = (state, action) => {
  switch (action.type) {
    case actions.setDateRange:
      return { ...state, dateRange: action.payload }
    case actions.setTimeUnit:
      return { ...state, timeUnit: action.payload }
    case actions.setCount:
      return { ...state, count: action.payload }
    default:
      return state
  }
}

export const useFilterDateContext = () => {
  const context = useContext(FilterDateContext)

  if (!context) {
    throw new Error('useFilterDateContext must be used within a FilterDateProvider')
  }

  return context
}

export const FilterDateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterDateReducer, initialContextValues)

  const setDateRange = (value) => {
    dispatch({ type: actions.setDateRange, payload: value })
  }

  const setTimeUnit = (value) => {
    dispatch({ type: actions.setTimeUnit, payload: value })
  }

  const setCount = (value) => {
    dispatch({ type: actions.setCount, payload: value })
  }

  const values = useMemo(
    () => ({
      dateRange: state.dateRange,
      timeUnit: state.timeUnit,
      count: state.count,
      setDateRange,
      setTimeUnit,
      setCount,
    }),
    [state.dateRange, state.timeUnit, state.count]
  )

  return <FilterDateContext.Provider value={values}>{children}</FilterDateContext.Provider>
}
