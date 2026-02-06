import { useState, FormEvent } from 'react'
import { Heading } from '../ui/Heading'

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        const mailtoLink = `mailto:gaur.prateek.1609@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`
        window.location.href = mailtoLink
    }

    return (
        <section id="contact" className="container">
            <Heading title="Contact Me" subtitle="Get in touch" />

            <div className="row">
                {/* Contact Info */}
                <div className="col-lg-6 col-sm-12" data-aos="fade-right" data-aos-duration="1000">
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <i className="fa-solid fa-envelope"></i>
                            <div>
                                <h5>Email</h5>
                                <p>gaur.prateek.1609@gmail.com</p>
                            </div>
                        </div>
                        <div className="contact-info-item">
                            <i className="fa-solid fa-location-dot"></i>
                            <div>
                                <h5>Location</h5>
                                <p>Greater Noida, India</p>
                            </div>
                        </div>
                        <div className="contact-info-item">
                            <i className="fa-solid fa-phone"></i>
                            <div>
                                <h5>Phone</h5>
                                <p>+91 9311352016</p>
                            </div>
                        </div>
                    </div>

                    <div id="socials-container" style={{ marginTop: '30px', justifyContent: 'flex-start' }}>
                        <i
                            className="fa-brands fa-linkedin icon"
                            onClick={() => window.open('https://www.linkedin.com/in/prateek-gaur-3099a7228/', '_blank')}
                        />
                        <i
                            className="fa-brands fa-github icon"
                            onClick={() => window.open('https://github.com/DrDarkShadow', '_blank')}
                        />
                    </div>
                </div>

                {/* Contact Form */}
                <div className="col-lg-6 col-sm-12" data-aos="fade-left" data-aos-duration="1000">
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                        <textarea
                            placeholder="Your Message"
                            rows={5}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            required
                        />
                        <button type="submit" className="btn btn-color-1">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
