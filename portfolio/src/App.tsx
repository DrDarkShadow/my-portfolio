import { useState, useEffect } from 'react'
import { Nav } from './components/layout/Navbar'
import { Summary } from './components/sections/Summary'
import { About } from './components/sections/About'
import { Skills } from './components/sections/Skills'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'

function App() {
  const [darkMode, setDarkMode] = useState(
    sessionStorage.getItem('darkMode') === 'true'
  )

  useEffect(() => {
    // Simulate AOS initialization
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('[data-aos]').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className={darkMode ? 'dark-mode' : ''} id="app">
      <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
      <Summary />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
