import React, { useState, useEffect } from 'react'
import {
  Code2,
  Palette,
  Smartphone,
  Zap,
  Star,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Menu,
  X,
  ChevronDown
} from 'lucide-react'

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [acttiveSection, setActtiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'sobre', 'portfolio', 'servicos', 'contato']
      const scrollPosition = window.scrollY + 100

      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          const offSetTop = element.offsetTop
          const offSetHeight = element.offsetHeight 
          if (scrollPosition >= offSetTop && scrollPosition < offSetTop + offSetHeight) {
            setActtiveSection(section)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false)
  }

  const skills = [
    { name: 'React', level: 95, color: 'bg-blue-500' },
    { name: 'TypeScript', level: 90, color: 'bg-purple-500' },
    { name: 'JavaScript', level: 85, color: 'bg-green-500' },
    { name: 'CSS/SCSS', level: 80, color: 'bg-pink-500' },
    { name: 'Tailwind CSS', level: 75, color: 'bg-teal-500' },
    { name: 'Next.js', level: 70, color: 'bg-red-500' },
    { name: 'MongoDB', level: 65, color: 'bg-green-500' },
  ]

  return (
    <>
      <h1 className="bg-amber-100 font-bold text-black items-center justify-center">SmartCode</h1>
    </>
  )
}

export default App
