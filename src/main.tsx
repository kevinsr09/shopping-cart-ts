import { FilterProvider } from './context/filter.tsx'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <FilterProvider>
    <App />
  </FilterProvider>
)
