import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PhilosophyPage from './PhilosophyPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PhilosophyPage />
  </StrictMode>,
)
