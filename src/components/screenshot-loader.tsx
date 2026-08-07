'use client'
import { useEffect } from 'react'
const files = ['dashboard.webp', 'planning.webp', 'projections.webp', 'accounts.webp', 'cards.webp', 'investments.webp', 'entries.webp', 'goals.webp']
export function ScreenshotLoader() {
  useEffect(() => {
    files.forEach((file, index) => {
      const image = new window.Image()
      image.onload = () => document.querySelector(`.shot-${index + 1}`)?.classList.add('has-image')
      image.src = `/projects/financial-organizer/${file}`
    })
  }, [])
  return null
}
