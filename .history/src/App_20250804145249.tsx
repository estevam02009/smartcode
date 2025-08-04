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
  })

  return (
    <>
      <h1 className="bg-amber-100 font-bold text-black items-center justify-center">SmartCode</h1>
    </>
  )
}

export default App
