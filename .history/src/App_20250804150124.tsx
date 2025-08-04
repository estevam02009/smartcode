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

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and Stripe integration',
      image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'Firebase', 'Material-UI'],
      link: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with interactive charts and forecasts',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Vue.js', 'Chart.js', 'API Integration'],
      link: '#'
    }
  ];

  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Frontend Development',
      description: 'Creating responsive, interactive web applications using modern frameworks like React, Vue, and Angular.',
      features: ['React/Vue/Angular', 'TypeScript', 'Performance Optimization']
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Designing beautiful, user-centered interfaces that provide exceptional user experiences.',
      features: ['Wireframing', 'Prototyping', 'Design Systems']
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Development',
      description: 'Building cross-platform mobile applications with React Native and progressive web apps.',
      features: ['React Native', 'PWA Development', 'App Store Deployment']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance Optimization',
      description: 'Optimizing web applications for speed, SEO, and exceptional user experience.',
      features: ['Code Splitting', 'SEO Optimization', 'Core Web Vitals']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'TechCorp',
      content: 'Outstanding work! The website exceeded our expectations with its modern design and flawless functionality.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'StartupXYZ',
      content: 'Professional, reliable, and incredibly talented. Our project was delivered on time and within budget.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'Digital Agency',
      content: 'The attention to detail and user experience is remarkable. Highly recommend for any web project.',
      rating: 5
    }
  ];

  return (
    <div className='min-h-screen bg-white'>
      {/* NVIGATION */}
      <nav className='fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm'>
      
      </nav>
    </div>
  )
}

export default App
