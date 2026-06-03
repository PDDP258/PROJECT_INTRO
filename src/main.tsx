import { createRoot } from 'react-dom/client'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import './index.css'
import App from './App.tsx'

// Initialize Lenis for smooth scrolling
const lenis = new Lenis({
  lerp: 0.1,
  wheelMultiplier: 1.4,
})

function raf(time: number) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

// Expose lenis globally for sections that need scroll events
;(window as any).__lenis = lenis

createRoot(document.getElementById('root')!).render(<App />)
