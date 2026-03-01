import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RobotsPage from './RobotsPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RobotsPage />
  </StrictMode>,
)
