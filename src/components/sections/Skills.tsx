import { Heading } from '../ui/Heading'

const skillCategories = [
    {
        title: 'Languages',
        skills: ['Python', 'C++', 'JavaScript', 'SQL'],
    },
    {
        title: 'AI/ML',
        skills: ['LLMs', 'RAG', 'Deep Learning', 'NLP', 'Computer Vision'],
    },
    {
        title: 'Frameworks',
        skills: ['PyTorch', 'LangChain', 'FastAPI', 'Hugging Face', 'Flask'],
    },
    {
        title: 'Tools & Infrastructure',
        skills: ['Docker', 'Kafka', 'Git', 'ChromaDB', 'PostgreSQL'],
    },
]

export function Skills() {
    return (
        <section id="skills" className="container">
            <Heading title="Skills" subtitle="What I work with" />

            <div data-aos="fade-up" data-aos-duration="1000">
                {skillCategories.map((category) => (
                    <div key={category.title} style={{ marginBottom: '30px' }}>
                        <h4 className="text-green" style={{ marginBottom: '15px' }}>{category.title}</h4>
                        <div className="skills">
                            {category.skills.map((skill) => (
                                <span key={skill}>{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
