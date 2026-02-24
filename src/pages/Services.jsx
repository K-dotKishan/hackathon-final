import PageBanner from '../components/PageBanner'
import { Link } from 'react-router-dom'

const trainingImages = [
  new URL('../assets/images/team1.webp', import.meta.url).href,
  new URL('../assets/images/team2.webp', import.meta.url).href,
  new URL('../assets/images/team3.webp', import.meta.url).href,
  new URL('../assets/images/team4.webp', import.meta.url).href,
  new URL('../assets/images/team0.webp', import.meta.url).href,
  new URL('../assets/images/team5.webp', import.meta.url).href,
  new URL('../assets/images/team6.webp', import.meta.url).href,
  new URL('../assets/images/team7.webp', import.meta.url).href,
]
const campImages = [
  new URL('../assets/images/cam1.webp', import.meta.url).href,
  new URL('../assets/images/cam2.webp', import.meta.url).href,
  new URL('../assets/images/cam3.webp', import.meta.url).href,
  new URL('../assets/images/cam4.webp', import.meta.url).href,
  new URL('../assets/images/cam5.webp', import.meta.url).href,
  new URL('../assets/images/cam6.webp', import.meta.url).href,
  new URL('../assets/images/cam7.webp', import.meta.url).href,
  new URL('../assets/images/cam8.webp', import.meta.url).href,
]

export default function Services() {
  return (
    <main className="bg-white dark:bg-transparent">
      <PageBanner title="Services" />
      <section className="py-12 bg-white dark:bg-transparent">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            <div className="flex-1">
              <span className="title-subhny">Kindway Biorezen</span>
              <h3 className="title-w3l mb-5">Out Reach Dental Camp</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                These are outreach services provided to the poor, weak, marginalized and those residing in remote areas. We have fully equipped mobile dental clinic for this purpose.
              </p>
              <Link to="/about" className="btn-primary-custom">Read More</Link>
            </div>
            <div className="flex-shrink-0 w-full lg:w-96">
              <img src={new URL('../assets/images/bg3.webp', import.meta.url).href} alt="Outreach Dental Camp" className="radius-image shadow-xl w-full h-auto" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-gray-50 dark:bg-white/5">
        <div className="container mx-auto px-4">
          <span className="title-subhny text-center block mb-2">KINDWAY BIOREZEN</span>
          <h3 className="title-w3l text-center mb-10">Available Training Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {trainingImages.map((imgUrl, idx) => (
              <div key={idx} className="overflow-hidden rounded-xl shadow-md group">
                <img src={imgUrl} alt={`Training ${idx + 1}`} className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 bg-white dark:bg-transparent">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            <div className="flex-1">
              <span className="title-subhny">Kindway BioRezens</span>
              <h3 className="title-left mb-5">Free dental camp organized by Kindway Biorezens</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                Team of Doctors: Prof. Rajesh Bansal, Prof. Monika Bansal, Dr. Robin Chaube, Dr. Smriti Singh, Dr. Omkar, Dr. Ritesh, Dr. Saurabh, Anshu Pandey, Pushpraj Vishwakarma, Himanshu
              </p>
              <Link to="/contact" className="btn-primary-custom">Contact Us</Link>
            </div>
            <div className="flex-shrink-0 w-full lg:w-96">
              <img src={new URL('../assets/images/camp1.webp', import.meta.url).href} alt="Dental Camp" className="radius-image shadow-xl w-full h-auto" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-gray-50 dark:bg-white/5">
        <div className="container mx-auto px-4">
          <h3 className="title-w3l text-center mb-10">Workshop Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {campImages.map((imgUrl, idx) => (
              <div key={idx} className="overflow-hidden rounded-xl shadow-md group">
                <img src={imgUrl} alt={`Workshop ${idx + 1}`} className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}