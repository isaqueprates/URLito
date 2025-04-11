import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/header/index.tsx'
import SectionUrl from './components/section-url/index.tsx'
import SectionCount from './components/section-count/index.tsx'
import SectionHit from './components/section-hits/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <SectionUrl />
    <SectionCount />
    <SectionHit />
  </StrictMode>,
)
