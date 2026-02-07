import { useState, useEffect } from 'react'
import { Nav } from './components/layout/Navbar'
import { Summary } from './components/sections/Summary'
import { About } from './components/sections/About'
import { Skills } from './components/sections/Skills'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'
import { ResumeViewer } from './components/resume/ResumeViewer'
import { NeuralScrollBackground } from './components/ui/NeuralScrollBackground'

function App() {
  const [darkMode, setDarkMode] = useState(
    sessionStorage.getItem('darkMode') === 'true'
  )
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  const handleThemeToggle = () => {
    setDarkMode(!darkMode)
    sessionStorage.setItem('darkMode', (!darkMode).toString())
  }

  useEffect(() => {
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
      <NeuralScrollBackground />
      <Nav darkMode={darkMode} onToggleTheme={handleThemeToggle} />

      <Summary onOpenResume={() => setIsResumeOpen(true)} />

      <About />
      <Skills />
      <Projects />
      <Contact />

      <ResumeViewer isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  )
}

export default App
