interface NavProps {
    darkMode: boolean
    onToggleTheme: () => void
}

const navItems = [
    { name: 'Summary', target: 'summary' },
    { name: 'About', target: 'about' },
    { name: 'Skills', target: 'skills' },
    { name: 'Projects', target: 'projects' },
    { name: 'Contact', target: 'contact' },
]

export function Nav({ darkMode, onToggleTheme }: NavProps) {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <nav className="nav py-3">
            <div className="container">
                <h2>Prateek's Portfolio</h2>
                <ul>
                    {navItems.map((item) => (
                        <li key={item.target} onClick={() => scrollToSection(item.target)}>
                            {item.name}
                        </li>
                    ))}
                    <li>
                        <input
                            type="checkbox"
                            id="checkbox"
                            className="checkbox"
                            checked={darkMode}
                            onChange={onToggleTheme}
                        />
                        <label htmlFor="checkbox" className="checkbox-label">
                            <i className="fas fa-moon"></i>
                            <i className="fas fa-sun"></i>
                            <span className="ball"></span>
                        </label>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
