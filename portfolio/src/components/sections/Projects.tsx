import { Heading } from '../ui/Heading'

const projects = [
    {
        title: 'GitHub Code Documentation Generator',
        description: 'AI-powered documentation system that automated extraction and summarization of code documentation with 95% accuracy, reducing manual documentation time by 70%.',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop',
        github: 'https://github.com/DrDarkShadow',
        live: '#',
    },
    {
        title: 'AI Mock Interview Platform',
        description: 'Full-stack AI-driven mock interview platform with real-time feedback and performance analytics using FastAPI and LangChain.',
        image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&h=200&fit=crop',
        github: 'https://github.com/DrDarkShadow',
        live: '#',
    },
    {
        title: 'Medical Chatbot with EHR',
        description: 'Engineered Medical Chatbot handling 1000+ simulated patient interactions with integrated Electronic Health Record management.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=200&fit=crop',
        github: 'https://github.com/DrDarkShadow',
        live: '#',
    },
    {
        title: 'Virtual Avatar System',
        description: 'Designed Virtual Avatar system with 90%+ lip-sync accuracy using Wav2Lip and SadTalker for realistic AI-generated video content.',
        image: 'https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=400&h=200&fit=crop',
        github: 'https://github.com/DrDarkShadow',
        live: '#',
    },
    {
        title: 'RAG Chatbot System',
        description: 'Built a Retrieval-Augmented Generation chatbot using LangChain, ChromaDB, and OpenAI for intelligent document Q&A.',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop',
        github: 'https://github.com/DrDarkShadow',
        live: '#',
    },
    {
        title: 'Lung Cancer Prediction',
        description: 'Deep learning model for lung cancer prediction using CNN and medical imaging data with high accuracy diagnostics.',
        image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=200&fit=crop',
        github: 'https://github.com/DrDarkShadow',
        live: '#',
    },
]

export function Projects() {
    return (
        <section id="projects" className="container">
            <Heading title="Projects" subtitle="What I've built" />

            <div className="row" style={{ gap: '30px 0' }}>
                {projects.map((project, index) => (
                    <div
                        key={project.title}
                        className="col-lg-4 col-sm-12"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay={index * 100}
                    >
                        <div className="card">
                            <img src={project.image} alt={project.title} />
                            <div className="card-body">
                                <h5>{project.title}</h5>
                                <p>{project.description}</p>
                                <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-color-2"
                                        style={{ padding: '8px 16px', fontSize: '0.9rem' }}
                                    >
                                        <i className="fa-brands fa-github" style={{ marginRight: '5px' }}></i>
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
