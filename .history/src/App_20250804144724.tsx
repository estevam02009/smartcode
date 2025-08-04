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

  return (
    <>
      <h1 className="bg-amber-100 font-bold text-black items-center justify-center">SmartCode</h1>
    </>
  )
}

export default App
