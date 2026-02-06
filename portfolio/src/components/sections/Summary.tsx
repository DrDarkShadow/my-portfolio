import { useEffect, useState } from 'react'
import { ReactTyped } from 'react-typed'

export function Summary() {
    const [animate, setAnimate] = useState(false)

    useEffect(() => {
        setAnimate(true)
    }, [])

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    const redirectTo = (url: string) => {
        window.open(url, '_blank')
    }

    return (
        <section id="summary" className="section_1 row">
            {/* Text Content */}
            <div
                className={`section__text col-lg-6 col-sm-12 ${animate ? 'aos-animate' : ''}`}
                data-aos="fade-right"
                data-aos-duration="1000"
            >
                <p>Hey! I'm</p>
                <h1>Prateek Gaur</h1>

                <div className="typer-text">
                    <ReactTyped
                        strings={['AI Engineer', 'GenAI Specialist', 'Full Stack Developer']}
                        typeSpeed={60}
                        backSpeed={40}
                        loop
                    />
                </div>

                <p className="intro-para mt-2">
                    I am a skilled AI engineer delivering high-quality solutions across diverse projects.
                    My expertise spans Generative AI, LLMs, RAG architectures, and full-stack development.
                </p>
                <p className="intro-para">
                    I specialize in building intelligent systems and scalable AI solutions
                    from concept to deployment.
                </p>

                <div className="btn-container mt-3">
                    <button
                        className="btn btn-color-2"
                        onClick={() => window.open('https://drive.google.com/file/d/YOUR_RESUME_ID/view', '_blank')}
                    >
                        View Resume
                    </button>
                    <button
                        className="btn btn-color-1"
                        onClick={() => scrollToSection('contact')}
                    >
                        Contact Info
                    </button>
                </div>

                <div id="socials-container">
                    <i
                        className="fa-brands fa-linkedin icon"
                        onClick={() => redirectTo('https://www.linkedin.com/in/prateek-gaur-3099a7228/')}
                    />
                    <i
                        className="fa-brands fa-github icon"
                        onClick={() => redirectTo('https://github.com/DrDarkShadow')}
                    />
                </div>
            </div>

            {/* Profile Picture */}
            <div className="pic_container col-lg-6 col-sm-12">
                <div className="pic_container_inner" data-aos="fade-left" data-aos-duration="1000">
                    <div className="green-bg"></div>
                    <img
                        src="https://avatars.githubusercontent.com/u/77441789?v=4"
                        alt="Prateek Gaur"
                    />
                </div>
            </div>
        </section>
    )
}
