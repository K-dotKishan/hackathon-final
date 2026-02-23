import PageBanner from '../components/PageBanner'
import { Link } from 'react-router-dom'
import aboutBg from '../assets/images/bg.webp'
import storyImg from '../assets/images/b1.webp'

const teamMembers = [
  { img: new URL('../assets/images/t1.webp', import.meta.url).href, name: 'Dr. Rajesh Bansal', role: 'Founder Director (MDS, PhD)' },
  { img: new URL('../assets/images/t6.webp', import.meta.url).href, name: 'Prof. D. D. N. Singh', role: 'M.Sc, PhD' },
  { img: new URL('../assets/images/t7.webp', import.meta.url).href, name: 'Prof. Vakil Singh', role: 'M.Sc, PhD' },
  { img: new URL('../assets/images/t8.webp', import.meta.url).href, name: 'Prof. Monika Bansal', role: 'MDS, PhD (Periodontist)' },
  { img: new URL('../assets/images/t2.webp', import.meta.url).href, name: 'Mr. Dinesh Kumar', role: 'Founder and Charter Accountant' },
  { img: new URL('../assets/images/t3.webp', import.meta.url).href, name: 'Mr. P. Vishwakarma', role: 'CNC Operator' },
  { img: new URL('../assets/images/t4.webp', import.meta.url).href, name: 'Mr. Anshu Pandey', role: 'Assistant and CNC Operator' },
  { img: new URL('../assets/images/robin.webp', import.meta.url).href, name: 'Dr. Robin Kr. Chaube', role: 'Dental Officer' },
  { img: new URL('../assets/images/sourav.webp', import.meta.url).href, name: 'Dr. Sourav Kr. Vishwakarma', role: 'Graft. R&D Officer' },
]

export default function About() {
  return (
    <main className="bg-white dark:bg-transparent">
      <PageBanner
        title="About Us"
        bgImage={aboutBg}
      />

      {/* Why Choose Kindway */}
      <section className="py-16 bg-white dark:bg-transparent">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            <div className="flex-1">
              {/* Main content starts here */}
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                At Kindway Biorezens, we are driven by a mission to reshape the future of dentistry
                through innovation, accessibility, and compassionate care. As a pioneering startup in
                dental manufacturing and healthcare services, we design and produce advanced, reliable,
                and affordable dental implants, biomaterials, and devices that meet global standards of
                safety and performance. Our vision is clear — to elevate dental care, enhance patient
                quality of life, and support clinicians with technology that simplifies and strengthens
                clinical practice.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Alongside manufacturing excellence, we are committed to delivering world-class dental
                treatment at accessible and ethical pricing, ensuring every patient receives the highest
                level of care without compromise. With modern technology, skilled clinicians, and a
                strong patient-first philosophy, we provide treatment experiences that are comfortable,
                precise, and outcomes-driven.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                We also believe in strengthening the dental community. Through comprehensive training
                programs, live clinical workshops, and hands-on surgical sessions, we empower dental
                professionals at every stage — from foundational learners to advanced clinicians —
                equipping them with practical skills, confidence, and real-world expertise.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Extending our commitment to social responsibility, we actively reach underserved
                communities through our mobile dental clinic outreach initiatives. By bringing quality
                dental care directly to marginalized and remote populations, we aim to close gaps in
                oral healthcare access.
              </p>
              <p className="text-gray-700 dark:text-gray-300 font-semibold mb-1">
                Innovation. Accessibility. Education. Compassion.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
                At Kindway BioReZens, we are building a future where advanced dental care is available
                to all — in clinics, in classrooms, and in communities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/products" className="btn-primary-custom">View Product Range</Link>
                <Link to="/contact" className="px-8 py-3 rounded-lg border-2 border-blue-600 text-blue-600 font-bold hover:bg-blue-600 hover:text-white transition-all">Support Center</Link>
              </div>
            </div>
            <div className="flex-shrink-0 w-full lg:w-96 mt-4 lg:mt-10">
              <img
                src={new URL('../assets/images/b3.webp', import.meta.url).href}
                alt="Kindway"
                className="radius-image shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50 dark:bg-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            <div className="flex-1">
              <span className="title-subhny">Our Story</span>
              <h3 className="title-left mb-5">Kindway BioRezens</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Kindway BioRezens was founded with a simple yet powerful belief — dentistry deserves
                innovation that is both cutting-edge and accessible. We are more than a company; we are
                a mission-driven team dedicated to advancing dental care through precision engineering,
                quality manufacturing, and meaningful innovation.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                As a growing dental-technology startup, we are committed to revolutionizing the industry
                by creating patient-focused, affordable, and high-performance solutions. Our vision is
                rooted in improving the quality of life for patients while empowering dental
                professionals with tools and technologies that simplify clinical workflows and elevate
                care standards.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                From advanced implants and biomaterials to reliable dental devices, every product we
                design reflects our unwavering commitment to safety, performance, and long-term
                reliability. Guided by research, clinical insight, and a passion for innovation, we
                continuously push the boundaries of dental technology.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
                At Kindway BioReZens, we are building the future of dentistry — one breakthrough, one
                clinic, and one confident smile at a time.
              </p>
              <Link to="/training" className="btn-primary-custom">Join Our Workshops</Link>
            </div>
            <div className="flex-shrink-0 w-full lg:w-96 mt-4 lg:mt-10">
              <img
                src={storyImg}
                alt="Our Story"
                className="radius-image shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white dark:bg-transparent">
        <div className="container mx-auto px-4">
          <span className="title-subhny text-center block mb-2">Our Team</span>
          <h3 className="title-w3l text-center mb-10">Executive Team & Advisors</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="text-center group">
                <div className="overflow-hidden rounded-xl mb-3 shadow-md bg-gray-100 dark:bg-white/10">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-bold text-gray-800 dark:text-white text-sm md:text-base leading-snug mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm mb-3">
                  {member.role}
                </p>
                <div className="flex justify-center gap-2">
                  {['fa-facebook', 'fa-twitter', 'fa-linkedin'].map((icon) => (
                    <a
                      key={icon}
                      href="#"
                      className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/10 hover:bg-blue-600 hover:text-white text-gray-600 dark:text-gray-400 transition-all duration-200 text-xs"
                    >
                      <i className={`fa ${icon}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}