import { useState } from 'react'
import PageBanner from '../components/PageBanner'
import bannerBg from '../assets/images/bg2.webp'
import sideImg from '../assets/images/b2.webp'

export default function Contact() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        website: '',
        message: '',
    })
    const [status, setStatus] = useState({ loading: false, type: '', message: '' })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const mailtoUrl = `mailto:kishansingh2882004@gmail.com?subject=${encodeURIComponent(form.subject || 'Inquiry from Website')}&body=${encodeURIComponent(
            `Name: ${form.name}\nEmail: ${form.email}\nWebsite: ${form.website}\n\nMessage:\n${form.message}`
        )}`;

        window.location.href = mailtoUrl;

        setStatus({ type: 'success', message: '✓ Opening your email application...' })
        setTimeout(() => setStatus({ type: '', message: '' }), 5000)
    }

    return (
        <main className="bg-white dark:bg-transparent">
            <PageBanner
                title="Contact Us"
                bgImage={bannerBg}
            />

            {/* Contact Form + Image */}
            <section className="py-16 bg-white dark:bg-transparent">
                <div className="container mx-auto px-4">
                    {/* Main content starts here */}

                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
                        {/* Image */}
                        <div className="flex-shrink-0 w-full lg:w-80 xl:w-96">
                            <img
                                src={sideImg}
                                alt="Contact"
                                className="radius-image shadow-xl w-full h-auto"
                            />
                        </div>

                        {/* Form */}
                        <div className="flex-1 w-full">
                            {status.message && (
                                <div className={`mb-6 p-4 rounded-lg font-semibold transition-all ${status.type === 'success'
                                    ? 'bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 text-green-700 dark:text-green-400'
                                    : 'bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 text-red-700 dark:text-red-400'
                                    }`}>
                                    {status.message}
                                </div>
                            )}
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Your Name *"
                                        required
                                        className="contact-input"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="Your Email *"
                                        required
                                        className="contact-input"
                                    />
                                    <input
                                        type="text"
                                        name="subject"
                                        value={form.subject}
                                        onChange={handleChange}
                                        placeholder="Subject *"
                                        required
                                        className="contact-input"
                                    />
                                    <input
                                        type="text"
                                        name="website"
                                        value={form.website}
                                        onChange={handleChange}
                                        placeholder="Website URL"
                                        className="contact-input"
                                    />
                                </div>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Type your message here *"
                                    required
                                    rows={6}
                                    className="contact-input resize-none"
                                />
                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        disabled={status.loading}
                                        className={`btn-primary-custom min-w-[160px] ${status.loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    >
                                        {status.loading ? (
                                            <span className="flex items-center gap-2">
                                                <i className="fa fa-spinner animate-spin"></i> Sending...
                                            </span>
                                        ) : 'Send Message'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Address Info */}
            <section className="py-16 bg-gray-50 dark:bg-white/5">
                <div className="container mx-auto px-4">
                    <span className="title-subhny text-center block mb-2">Find Us</span>
                    <h3 className="title-w3l text-center mb-10">Address Info</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {[
                            {
                                icon: 'fa-map-marker',
                                title: 'Kindway Biorezen Pvt Ltd',
                                text: '38 Balaji Colony Samneghat, Near BHU Trauma Center Lanka Varanasi, Uttar Pradesh - 221005',
                                link: null,
                                color: 'bg-red-100 text-red-600',
                            },
                            {
                                icon: 'fa-map-marker',
                                title: 'Kindway BioReZens Pvt. Ltd.',
                                text: 'Room No. 401, (4th Floor), Central Discovery Center, Banaras Hindu University, Varanasi, Uttar Pradesh - 221005',
                                link: null,
                                color: 'bg-red-100 text-red-600',
                            },
                            {
                                icon: 'fa-phone',
                                title: 'Call & WhatsApp Us',
                                text: '+91-9151161267',
                                link: 'tel:+919151161267',
                                color: 'bg-green-100 text-green-600',
                            },
                            {
                                icon: 'fa-envelope-o',
                                title: 'Email Us',
                                text: 'kishansingh2882004@gmail.com',
                                link: 'mailto:kishansingh2882004@gmail.com',
                                color: 'bg-blue-100 text-blue-600',
                            },
                            {
                                icon: 'fa-life-ring',
                                title: 'Customer Support',
                                text: 'kishansingh2882004@gmail.com',
                                link: 'mailto:kishansingh2882004@gmail.com',
                                color: 'bg-purple-100 text-purple-600',
                            },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white dark:bg-white/10 dark:backdrop-blur-sm rounded-xl p-6 shadow-md flex items-start gap-4 hover:shadow-lg transition-shadow border border-transparent dark:border-white/5"
                            >
                                <div
                                    className={`w-12 h-12 rounded-full ${item.color} dark:bg-blue-600/20 dark:text-blue-400 flex items-center justify-center flex-shrink-0`}
                                >
                                    <i className={`fa ${item.icon} text-lg`}></i>
                                </div>
                                <div>
                                    <h6 className="font-bold text-gray-800 dark:text-white mb-1">{item.title}</h6>
                                    {item.link ? (
                                        <a href={item.link} className="text-blue-600 hover:underline text-sm">
                                            {item.text}
                                        </a>
                                    ) : (
                                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                            {item.text}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map */}
            <section className="bg-white dark:bg-transparent pb-16">
                <div className="container mx-auto px-4">
                    <div className="rounded-xl overflow-hidden shadow-xl">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d230902.6167335294!2d83.000262!3d25.275517!3m2!1i1024!2i768!4f13.1!2m1!1s38%20Balaji%20Colony%20Samneghat%2C%20%20Near%20BHU%20Trauma%20Center%20Lanka%20Varanasi%2C%20Uttar%20Pradesh%20-%20221005!5e0!3m2!1sen!2sus!4v1749452500539!5m2!1sen!2sus"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Kindway BioReZens Location"
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}