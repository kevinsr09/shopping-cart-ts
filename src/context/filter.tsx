import { type ReactNode, createContext, useState } from 'react'
import { type Filter, type FilterContent } from '../types'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const FilterContext = createContext<FilterContent>({} as FilterContent)

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filter, setFilter] = useState<Filter>({
    category: 'all',
    price: 0
  })

  return (
    <FilterContext.Provider value={{
      filter,
      setFilter
    }}>

      {children}

    </FilterContext.Provider>
  )
}
