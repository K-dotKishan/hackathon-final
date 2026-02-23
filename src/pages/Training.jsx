import PageBanner from '../components/PageBanner'
import { Link } from 'react-router-dom'

const trainingImages = [
  new URL('../assets/images/team1.jpg', import.meta.url).href,
  new URL('../assets/images/team2.jpg', import.meta.url).href,
  new URL('../assets/images/team3.jpg', import.meta.url).href,
  new URL('../assets/images/team4.jpg', import.meta.url).href,
  new URL('../assets/images/team0.jpg', import.meta.url).href,
  new URL('../assets/images/team5.jpg', import.meta.url).href,
  new URL('../assets/images/team6.jpg', import.meta.url).href,
  new URL('../assets/images/team7.jpg', import.meta.url).href,
]

export default function Training() {
  return (
    <main className="bg-white dark:bg-gray-900">
      <PageBanner
        title="Training"
        bgImage={new URL('../assets/images/bg1.jpg', import.meta.url).href}
      />
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            <div className="flex-1">
              <span className="title-subhny">What Sets us Apart</span>
              <h3 className="title-w3l mb-5">Training and Education</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                At Kindway Biorezens, we believe that excellence in dentistry is built on continuous learning. Our commitment goes beyond manufacturing products — we invest in the growth of dental professionals by offering advanced, practice-oriented training tailored to real-world clinical needs.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                Our programs are designed to bridge the gap between theory and practice, equipping clinicians with confidence, skill, and the latest evidence-based techniques.
              </p>
              <Link to="/contact" className="btn-primary-custom">Enroll Now</Link>
            </div>
            <div className="flex-shrink-0 w-full lg:w-96">
              <img src={new URL('../assets/images/ex2.jpg', import.meta.url).href} alt="Training" className="radius-image shadow-xl w-full h-auto" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <span className="title-subhny text-center block mb-2">Our Programs</span>
          <h3 className="title-w3l text-center mb-10">What We Offer</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: 'fa-graduation-cap', title: 'Dental Implant Workshops', desc: 'Hands-on implant placement training for dentists. Learn advanced surgical protocols under the guidance of expert clinicians.' },
              { icon: 'fa-flask', title: 'Tissue Augmentation Training', desc: 'Comprehensive courses on bone grafting, soft tissue management, and regenerative procedures for dental professionals.' },
              { icon: 'fa-hospital-o', title: 'Clinical Mentorship', desc: 'One-on-one mentorship programs with experienced specialists to accelerate your clinical skill development.' },
            ].map((item, idx) => (
              <div key={idx} className="box-card group text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <i className={`fa ${item.icon} text-2xl text-blue-600 group-hover:text-white transition-colors duration-300`}></i>
                </div>
                <h4 className="font-bold text-lg text-gray-800 dark:text-white mb-3">{item.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Event Calendar */}
      <section className="py-20 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="title-subhny">Upcoming Events</span>
            <h3 className="title-w3l">Workshop Calendar 2026</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-4">Stay updated with our upcoming clinical training sessions and community outreach programs.</p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {[
              { date: 'March 15-18', month: 'MAR', title: 'Advanced Implantology Masterclass', type: 'Clinical Workshop', location: 'Varanasi Center' },
              { date: 'April 05', month: 'APR', title: 'Tissue Augmentation & Bone Grafting', type: 'Hands-on training', location: 'Mumbai Satellite' },
              { date: 'April 22-25', month: 'APR', title: 'Mobile Clinic Outreach: Rural Uttar Pradesh', type: 'Community Program', location: 'Gorakhpur Region' },
              { date: 'May 10', month: 'MAY', title: 'CBCT Guided Surgery Planning', type: 'Webinar / Online', location: 'Digital Portal' },
            ].map((ev, i) => (
              <div key={i} className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-transparent hover:border-blue-400 transition-all group">
                <div className="w-20 h-20 bg-blue-600 text-white flex flex-col items-center justify-center rounded-2xl shadow-lg ring-4 ring-blue-600/10">
                  <span className="text-xs font-bold opacity-80">{ev.month}</span>
                  <span className="text-2xl font-black">{ev.date.split(' ')[1]?.split('-')[0] || ev.date.split(' ')[1]}</span>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest px-2 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded-full mb-2 inline-block">
                    {ev.type}
                  </span>
                  <h4 className="font-bold text-gray-800 dark:text-white text-lg">{ev.title}</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm"><i className="fa fa-map-marker mr-1 text-blue-500"></i> {ev.location}</p>
                </div>
                <button
                  onClick={() => document.getElementById('register-section').scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl font-bold text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                >
                  Save Spot
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Registration form */}
      <section id="register-section" className="py-20 bg-blue-900 text-white stats-bg">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <span className="text-yellow-400 font-bold uppercase tracking-widest text-sm">Join the Elite</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Register for Upcoming Workshops</h2>
              <p className="text-blue-100/80 leading-relaxed mb-8 text-lg">
                Seats are limited for hands-on clinical sessions. Register early to secure your spot and receive pre-workshop reading materials.
              </p>
              <div className="space-y-6">
                {[
                  { icon: 'fa-check-circle', title: 'Official Certification', desc: 'Receive a recognized certificate upon completion.' },
                  { icon: 'fa-check-circle', title: 'Hands-on Kits', desc: 'All clinical materials and models provided.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <i className={`fa ${item.icon} text-2xl text-yellow-400 mt-1`}></i>
                    <div>
                      <h4 className="font-bold text-xl">{item.title}</h4>
                      <p className="text-blue-200/70 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-[500px] bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Workshop Registration</h3>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Registration sent! We will contact you shortly.'); }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Full Name *" className="w-full px-5 py-3 rounded-xl border border-gray-100 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none" required />
                  <input type="email" placeholder="Email Address *" className="w-full px-5 py-3 rounded-xl border border-gray-100 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none" required />
                </div>
                <input type="tel" placeholder="WhatsApp Number *" className="w-full px-5 py-3 rounded-xl border border-gray-100 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none" required />
                <select className="w-full px-5 py-3 rounded-xl border border-gray-100 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none appearance-none" required>
                  <option value="">Select Workshop *</option>
                  <option>Implant Masterclass - March</option>
                  <option>Bone Grafting - April</option>
                  <option>CBCT Webinar - May</option>
                </select>
                <textarea placeholder="Any clinical background or specific requirements?" className="w-full px-5 py-3 rounded-xl border border-gray-100 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none min-h-[100px] resize-none"></textarea>
                <button type="submit" className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/30">
                  Book My Slot Today
                </button>
                <p className="text-[10px] text-gray-400 text-center mt-4 uppercase tracking-widest font-bold">
                  Secure checkout powered by Kindway BioReZens
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <span className="title-subhny text-center block mb-2">Highlights</span>
          <h3 className="title-w3l text-center mb-10">Training Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {trainingImages.map((imgUrl, idx) => (
              <div key={idx} className="overflow-hidden rounded-xl shadow-md group">
                <img src={imgUrl} alt={`Training ${idx + 1}`} className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}