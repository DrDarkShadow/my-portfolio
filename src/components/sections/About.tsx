import { Heading } from '../ui/Heading'

export function About() {
    const experienceYears = new Date().getFullYear() - 2024

    return (
        <section id="about" className="container">
            <Heading title="About Me" subtitle="Want to know me?" />

            <div className="position-relative" style={{ position: 'relative' }}>
                <div className="verticle-line" style={{ position: 'absolute' }}></div>

                <div className="ml-5" style={{ marginLeft: '30px' }} data-aos="fade-left" data-aos-duration="1000">
                    <h2 style={{ marginBottom: '20px' }}>
                        <i className="fa-solid fa-briefcase" style={{ marginRight: '10px' }}></i>
                        Experience - {experienceYears}+ year(s)
                    </h2>

                    {/* Current Role */}
                    <h4 className="text-green">AI Engineer - July 2025 - Present</h4>
                    <h6>
                        <a href="https://dataalchemy.ai" className="text-blue">DataAlchemy.AI, Noida</a>
                    </h6>
                    <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
                        <li>Developed automated GitHub code documentation generator with 95% accuracy</li>
                        <li>Built full-stack AI-driven mock interview platform with real-time feedback</li>
                        <li>Architected modular microservices for event-driven automation with Kafka</li>
                    </ul>
                    <div className="skills" style={{ marginBottom: '30px' }}>
                        <span>Python</span>
                        <span>FastAPI</span>
                        <span>LangChain</span>
                        <span>Kafka</span>
                        <span>Docker</span>
                    </div>

                    {/* Previous Role */}
                    <h4 className="text-green">Generative AI Intern - Feb 2025 - June 2025</h4>
                    <h6>
                        <a href="https://otomashen.com" className="text-blue">Otomashen, Noida</a>
                    </h6>
                    <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
                        <li>Collaborated with 4+ cross-functional teams on 6+ AI-driven projects</li>
                        <li>Engineered Medical Chatbot handling 1000+ simulated patient interactions</li>
                        <li>Designed Virtual Avatar system with 90%+ lip-sync accuracy using Wav2Lip</li>
                    </ul>
                    <div className="skills" style={{ marginBottom: '40px' }}>
                        <span>Flask</span>
                        <span>SQLite</span>
                        <span>Wav2Lip</span>
                        <span>SadTalker</span>
                        <span>LLMs</span>
                    </div>

                    {/* Education */}
                    <h2 style={{ marginBottom: '20px' }}>
                        <i className="fa-solid fa-graduation-cap" style={{ marginRight: '10px' }}></i>
                        Education
                    </h2>
                    <h4 className="text-green">B.Tech in Artificial Intelligence & Data Science</h4>
                    <h6>Maharaja Agrasen Institute of Technology, Delhi</h6>
                    <p style={{ color: 'var(--text-secondary)' }}>2021 - 2025 | CGPA: 8.8</p>
                </div>
            </div>
        </section>
    )
}
