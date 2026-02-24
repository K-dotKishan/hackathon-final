import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import CountUp from '../components/CountUp'

// Import assets directly for reliable Vite bundling
import directorImg from '../assets/images/sirji.webp'
import globalReachImg from '../assets/images/ex3.webp'
import research1Img from '../assets/images/b4.webp'
import research2Img from '../assets/images/b5.webp'
import research3Img from '../assets/images/bg3.webp'
import research4Img from '../assets/images/bg2.webp'

const slides = [
  {
    bg: new URL('../assets/images/bg.webp', import.meta.url).href,
    title: 'Precision. Reliability. Innovation.',
    desc: 'Empowering dental professionals with high-performance implants and bio-regenerative solutions crafted for better dentistry.',
    cta: 'View Products',
    link: '/products'
  },
  {
    bg: new URL('../assets/images/bg1.webp', import.meta.url).href,
    title: 'Advanced Bone Grafting',
    desc: 'Synthetic and bio-renewable materials designed to accelerate healing and ensure stable implant foundations.',
    cta: 'Learn More',
    link: '/bone-grafts'
  },
  {
    bg: new URL('../assets/images/bg3.webp', import.meta.url).href,
    title: 'Hands-on Clinical Workshops',
    desc: 'Level up your surgical skills with our expert-led implant and tissue augmentation workshops.',
    cta: 'Book Training',
    link: '/training'
  },
]

const recentActivities = [
  {
    img: new URL('../assets/images/b1.webp', import.meta.url).href,
    date: 'Dec 22, 2024',
    title: 'Dental Implant Training/Workshop-Only for Dentist',
    desc: 'Join our exclusive Dental Implant Training/Workshop, tailored solely for Dentists. Elevate your expertise with hands-on learning, expert guidance, and cutting-edge techniques.',
  },
  {
    img: new URL('../assets/images/b3.webp', import.meta.url).href,
    date: 'Jan 16-22, 2024',
    title: 'Dental Implant Training/Workshop-Only for Dentist',
    desc: 'Enroll in our Tissue Augmentation Training/Workshop/Course designed for dental professionals. Explore advanced techniques, hands-on practice, and expert insights.',
  },
  {
    img: new URL('../assets/images/b6.webp', import.meta.url).href,
    date: 'Dec 22, 2024',
    title: 'Outreach programs - Camps for general public',
    desc: 'Join us for informative sessions, screenings, and interactive activities focused on oral health education. Empower yourself with valuable knowledge.',
  },
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide(s => (s + 1) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <main className="overflow-x-hidden">
      {/* Hero Slider */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: '100vh' }}>
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
          >
            {/* Background Image with Parallax Effect */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-7000"
              style={{
                backgroundImage: `url(${slide.bg})`,
                transform: idx === currentSlide ? 'scale(1)' : 'scale(1.05)'
              }}
            />

            {/* Enhanced Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />

            {/* Animated Content */}
            <div className="relative z-10 h-full flex items-center" style={{ minHeight: '100vh' }}>
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-xl lg:max-w-2xl">
                  <div className={`transform transition-all duration-1000 delay-300 ${idx === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                    {/* Animated Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6 animate-float">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      <span className="text-white/90 text-sm font-medium tracking-wider">WELCOME TO KINDWAY BIOREZENS</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight mb-4 lg:mb-6">
                      {slide.title}
                    </h2>

                    <p className="text-gray-200 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 lg:mb-6 max-w-lg">
                      {slide.desc}
                    </p>

                    <div className="flex flex-wrap gap-3 sm:gap-4">
                      <Link
                        to={slide.link}
                        className="group relative px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-xl hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 overflow-hidden"
                      >
                        <span className="relative z-10">{slide.cta}</span>
                        <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                      </Link>
                      <Link
                        to="/contact"
                        className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:-translate-y-1"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Enhanced Slide Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`group relative transition-all duration-300 ${idx === currentSlide ? 'w-8' : 'w-3'
                } h-3 rounded-full overflow-hidden`}
              aria-label={`Slide ${idx + 1}`}
            >
              <span className={`absolute inset-0 rounded-full transition-all duration-300 ${idx === currentSlide
                ? 'bg-white'
                : 'bg-white/50 group-hover:bg-white/70'
                }`}></span>
              {idx === currentSlide && (
                <span className="absolute inset-0 rounded-full bg-white animate-ping opacity-50"></span>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Features Row */}
      <section id="about" className="py-10 sm:py-8 bg-white dark:bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: 'fa-graduation-cap',
                title: 'Training & Workshops',
                desc: 'Level up your surgical skills with expert-led clinical training and hands-on workshops designed for dentists.',
                link: '/training',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: 'fa-ambulance',
                title: 'Mobile Dental Clinic',
                desc: 'Bringing advanced oral healthcare to remote communities through our specialized outreach mobile medical units.',
                link: '/mobile-clinic',
                color: 'from-green-500 to-emerald-500'
              },
              {
                icon: 'fa-cubes',
                title: 'Precision Implants',
                desc: 'High-quality Titanium implants and bio-grafting materials manufactured to meet global clinical standards.',
                link: '/implants',
                color: 'from-purple-500 to-pink-500'
              },
            ].map((item, idx) => (
              <Link
                to={item.link}
                key={idx}
                className="group relative bg-white dark:bg-white/5 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-white/10 overflow-hidden"
              >
                {/* Gradient Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/40 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <i className={`fa ${item.icon} text-2xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300`}></i>
                    </div>
                    <h4 className="font-bold text-lg text-gray-800 dark:text-white leading-snug flex-1">{item.title}</h4>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {item.desc}
                  </p>

                  <span className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm group-hover:gap-3 transition-all">
                    Learn More
                    <i className="fa fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-10 sm:py-10 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-white/5 dark:to-white/5 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            <div className="flex-1 space-y-8">
              <div className="relative">
                <span className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-sm font-bold rounded-full mb-4">
                  Our Purpose
                </span>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4 relative">
                  Mission
                  <div className="absolute -left-4 top-0 w-1 h-12 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full"></div>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base sm:text-lg">
                  At Kindway Biorezenes Medical Manufacturing, we envision a future where healthcare products and technologies are not only cutting-edge but also inherently sustainable. Our commitment is to lead the medical manufacturing industry in developing and producing innovative, biorenewable solutions that contribute to a healthier planet.
                </p>
              </div>

              <div className="relative">
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4 relative">
                  Vision
                  <div className="absolute -left-4 top-0 w-1 h-12 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full"></div>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base sm:text-lg">
                  At Kindway Biorezens, our vision is to be at the forefront of transformative biorenewable technologies that not only redefine industries but also contribute to a kinder and more sustainable world. We aspire to lead in creating innovative solutions that seamlessly integrate with nature.
                </p>
              </div>
            </div>

            <Link to="/director" className="flex-shrink-0 w-full lg:w-96 block">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <img
                  src={new URL('../assets/images/b1.webp', import.meta.url).href}
                  alt="Founder Director"
                  className="relative rounded-2xl shadow-2xl w-full h-auto transform group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                  loading="lazy"
                />
                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-10 blur-2xl text-white flex items-center justify-center">
                  <span className="text-[10px] font-bold">View Bio</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Kindway */}
      <section className="py-10 sm:py-8 bg-white dark:bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            <div className="flex-1 order-2 lg:order-1">
              <span className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-sm font-bold rounded-full mb-4">
                Why Choose
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-5">
                Kindway Biorezens
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base sm:text-lg mb-8">
                At Kindway Biorezens, we are driven by a mission to reshape the future of dentistry through innovation, accessibility, and compassionate care. As a pioneering startup in dental manufacturing and healthcare services, we design and produce advanced, reliable, and affordable dental implants, biomaterials, and devices that meet global standards of safety and performance.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-xl hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Read More
                <i className="fa fa-arrow-right text-sm"></i>
              </Link>
            </div>

            <div className="flex-shrink-0 w-full lg:w-96 order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <img
                  src={new URL('../assets/images/b3.webp', import.meta.url).href}
                  alt="Kindway"
                  className="relative rounded-2xl shadow-2xl w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pioneering Products */}
      <section className="py-10 sm:py-10 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-white/5 dark:to-white/5 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            <div className="flex-shrink-0 w-full lg:w-96">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <img
                  src={new URL('../assets/images/bg2.webp', import.meta.url).href}
                  alt="Products"
                  className="relative rounded-2xl shadow-2xl w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="flex-1">
              <span className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-sm font-bold rounded-full mb-4">
                What Sets us Apart
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-5">
                Pioneering Products
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base sm:text-lg mb-8">
                At Kindway Biorezens, innovation is at the heart of everything we create. Our product development approach blends cutting-edge technology, scientific precision, and deep clinical insight to deliver solutions that elevate the standard of dental care. We engineer and manufacture high-performance dental implants, biomaterials, and advanced chairside solutions.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-xl hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Read More
                <i className="fa fa-arrow-right text-sm"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-10 sm:py-8 bg-white dark:bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            <div className="flex-1">
              <span className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-sm font-bold rounded-full mb-4">
                What Sets us Apart
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-5">
                Expertise
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base sm:text-lg">
                Powered by a team of highly skilled and experienced dental professionals and material scientists, Kindway Biorezens brings unparalleled expertise to every solution we deliver. With deep clinical insight and hands-on industry knowledge, we understand the evolving challenges faced by modern dental practitioners. Our experts are committed to guiding, supporting, and empowering clinicians with evidence-based solutions, continuous learning, and reliable technical assistance.
              </p>
            </div>

            <div className="flex-shrink-0 w-full lg:w-96">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <img
                  src={new URL('../assets/images/ex1.webp', import.meta.url).href}
                  alt="Expertise"
                  className="relative rounded-2xl shadow-2xl w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training & Education */}
      <section className="py-10 sm:py-10 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-white/5 dark:to-white/5 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            <div className="flex-shrink-0 w-full lg:w-96">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <img
                  src={new URL('../assets/images/ex2.webp', import.meta.url).href}
                  alt="Training"
                  className="relative rounded-2xl shadow-2xl w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="flex-1">
              <span className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-sm font-bold rounded-full mb-4">
                What Sets us Apart
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-5">
                Training and Education
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base sm:text-lg mb-8">
                At Kindway Biorezens, we believe that excellence in dentistry is built on continuous learning. Our commitment goes beyond manufacturing products — we invest in the growth of dental professionals by offering advanced, practice-oriented training tailored to real-world clinical needs. Our programs are designed to bridge the gap between theory and practice.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-xl hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Read More
                <i className="fa fa-arrow-right text-sm"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-10 sm:py-8 bg-white dark:bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            <div className="flex-1">
              <span className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-sm font-bold rounded-full mb-4">
                What Sets us Apart
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-5">
                Global Reach
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base sm:text-lg mb-8">
                Our reach knows no boundaries. We proudly serve dental practitioners around the world, ensuring that our products and services are accessible to all.
              </p>
              <Link to="/research" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all group">
                Global Impact & Studies
                <i className="fa fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
              </Link>
            </div>

            <div className="flex-shrink-0 w-full lg:w-96">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <img
                  src={globalReachImg}
                  alt="Global Reach"
                  className="relative rounded-2xl shadow-2xl w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-12 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-white/5 dark:to-white/5 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-sm font-bold rounded-full mb-4">
              Social Proof
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white">
              What Fellow Dentists Say
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                text: "The SLA surface treatment on Kindway implants is world-class. Osseointegration is significantly faster than other mid-tier brands I've used.",
                author: "Dr. Anjali Verma",
                role: "Oral Surgeon, Delhi",
                rating: 5
              },
              {
                text: "Attending the Tissue Augmentation workshop was a turning point for my clinical practice. The hands-on training was incredibly detailed.",
                author: "Dr. Sameer Khan",
                role: "Implantologist, Mumbai",
                rating: 5
              },
              {
                text: "Kindway BioReZens brings affordability to high-end dental biotech. My patients are happy, and the clinical outcomes are excellent.",
                author: "Dr. Rajesh Gupta",
                role: "Senior Consultant, Varanasi",
                rating: 5
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-white dark:bg-white/5 p-6 sm:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-white/10"
              >
                {/* Quote Icon */}
                <i className="fa fa-quote-left text-blue-100 dark:text-gray-800 text-6xl absolute top-4 right-4 opacity-50"></i>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <i key={i} className="fa fa-star text-yellow-400"></i>
                  ))}
                </div>

                <p className="text-gray-600 dark:text-gray-300 italic mb-6 leading-relaxed relative z-10">
                  "{item.text}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center text-white font-bold text-lg">
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800 dark:text-white">{item.author}</h5>
                    <p className="text-sm text-blue-600">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Insights / Blog */}
      <section className="py-10 sm:py-10 bg-white dark:bg-transparent border-t border-gray-100 dark:border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
            <div className="max-w-xl">
              <span className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-sm font-bold rounded-full mb-4">
                Educational Hub
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Clinical Insights & Research
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
                Stay updated with the latest in dental technology, surgery planning, and regenerative materials.
              </p>
            </div>
            <Link
              to="/training"
              className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all group"
            >
              View All Articles
              <i className="fa fa-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                tag: 'Research',
                title: 'Bone Grafting in Implant Success',
                desc: 'How synthetic grafts provide the scaffolding for natural bone regeneration.',
                img: research1Img,
                color: 'from-blue-600 to-cyan-600'
              },
              {
                tag: 'Tutorial',
                title: 'Implant Surgery Planning',
                desc: 'Critical steps in the pre-surgical phase for predictable long-term outcomes.',
                img: research2Img,
                color: 'from-green-600 to-emerald-600'
              },
              {
                tag: 'Case Study',
                title: 'Outreach Impact Report',
                desc: 'Reviewing the results of our latest mobile dental clinic mission.',
                img: research3Img,
                color: 'from-purple-600 to-pink-600'
              },
              {
                tag: 'Innovation',
                title: 'Titanium Grade 4 vs Grade 5',
                desc: 'Which material is best for your patients? A metallurgical perspective.',
                img: research4Img,
                color: 'from-orange-600 to-red-600'
              },
            ].map((item, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[16/10] shadow-lg">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  <span className={`absolute top-4 left-4 bg-gradient-to-r ${item.color} text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg`}>
                    {item.tag}
                  </span>
                </div>
                <h4 className="font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {item.title}
                </h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-8 sm:py-12 overflow-hidden">
        {/* Background with Overlay */}
        <div className="absolute inset-0">
          <img
            src={new URL('../assets/images/bg.webp', import.meta.url).href}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-800/95"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 text-center">
            {[
              { count: 1500, label: 'Workshops/Trainings', sub: 'Clinical Excellence Empowered', icon: 'fa-graduation-cap' },
              { count: 1160, label: 'Students', sub: 'Professionals Trained', icon: 'fa-users' },
              { count: 1145, label: 'Medical Camps', sub: 'Communities Served', icon: 'fa-heart' },
            ].map((stat, idx) => (
              <div key={idx} className="group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className={`fa ${stat.icon} text-2xl text-yellow-300`}></i>
                </div>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <CountUp
                    key={`${stat.label}-${stat.count}`}
                    start={Math.floor(Number(stat.count) * 0.95)}
                    end={Number(stat.count)}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-300"
                  />
                  <span className="text-yellow-300 text-3xl sm:text-4xl font-bold">+</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-tight">{stat.label}</h3>
                <p className="text-blue-200 text-xs sm:text-sm font-medium opacity-80 uppercase tracking-widest">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Activities */}
      <section className="py-10 sm:py-12 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-white/5 dark:to-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-sm font-bold rounded-full mb-4">
              Kindway
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white">
              Recent Activities
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {recentActivities.map((item, idx) => (
              <div
                key={idx}
                className="group bg-white dark:bg-white/5 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden h-52">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <i className="fa fa-calendar text-blue-600 text-sm"></i>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.date}</p>
                  </div>

                  <p className="text-blue-600 text-xs font-semibold mb-2 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                    Kindway Biorezens
                  </p>

                  <h4 className="font-bold text-gray-800 dark:text-white mb-3 leading-snug line-clamp-2">
                    {item.title}
                  </h4>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5 line-clamp-3">
                    {item.desc}
                  </p>

                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm group-hover:gap-3 transition-all"
                  >
                    Read More
                    <i className="fa fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}