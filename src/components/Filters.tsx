import { useFilter } from '../hocks/useFilter'
import { CATEGORY_BUTTONS } from '../const'

export const Filters: React.FC = () => {
  const { filter, updateFilter } = useFilter()

  const handleFilterRange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value)
    updateFilter(value)
  }

  const handleSelectChance = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value
    updateFilter(value)
  }

  return (
    <nav>
      <div>
        <label htmlFor="filter-range">A partir de: {filter.price}</label>
        <input
          type="range"
          id="filter-range"
          min="0"
          max="1000"
          value={filter.price}
          onChange={handleFilterRange}
        />
      </div>

      <div>
        <select id="filter-select" onChange={handleSelectChance}>

          {
            Object.entries(CATEGORY_BUTTONS).map(([key, { literal }]) => {
              return (<option key={key} value={key} defaultChecked>{literal}</option>)
            })
          }

        </select>
      </div>

    </nav>
  )
}
