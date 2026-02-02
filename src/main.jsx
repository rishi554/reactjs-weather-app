import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { WeatherProvider } from './context/Weather'
import WeatherCard from './components/WeatherCard'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WeatherProvider>
      <WeatherCard />
    </WeatherProvider>
  </StrictMode>,
)
