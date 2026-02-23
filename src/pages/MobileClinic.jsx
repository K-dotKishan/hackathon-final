import PageBanner from '../components/PageBanner'
import { Link } from 'react-router-dom'

const campImages = [
    new URL('../assets/images/cam1.jpg', import.meta.url).href,
    new URL('../assets/images/cam2.jpg', import.meta.url).href,
    new URL('../assets/images/cam3.jpg', import.meta.url).href,
    new URL('../assets/images/cam4.jpg', import.meta.url).href,
    new URL('../assets/images/cam5.jpg', import.meta.url).href,
    new URL('../assets/images/cam6.jpg', import.meta.url).href,
    new URL('../assets/images/cam7.jpg', import.meta.url).href,
    new URL('../assets/images/cam8.jpg', import.meta.url).href,
]

export default function MobileClinic() {
    return (
        <main className="bg-white dark:bg-gray-900">
            <PageBanner
                title="Mobile Dental Clinic"
                bgImage={new URL('../assets/images/bg3.jpg', import.meta.url).href}
            />

            {/* Hero Service */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="flex-1">
                            <span className="title-subhny">Kindway BioReZens Outreach</span>
                            <h2 className="title-w3l mb-6">Mobile Dental Clinic Outreach Programs</h2>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                                Our outreach services are dedicated to bringing high-quality dental care to the underserved, marginalized, and those in remote areas. We believe that distance or economic status should never be a barrier to essential oral healthcare.
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                                Equipped with fully functional mobile dental units, our expert team provides on-the-spot screenings, treatments, and oral hygiene education.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                {[
                                    'Advanced Mobile Units',
                                    'Remote Area Coverage',
                                    'Free Dental Screenings',
                                    'Oral Health Education',
                                    'Quality On-site Treatment',
                                    'Skilled Dental Officers',
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                                            <i className="fa fa-check text-white text-[10px]"></i>
                                        </div>
                                        <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                            <Link to="/contact" className="btn-primary-custom">Request a Camp in Your Area</Link>
                        </div>
                        <div className="flex-shrink-0 w-full lg:w-[450px]">
                            <img
                                src={new URL('../assets/images/bg3.jpg', import.meta.url).href}
                                alt="Mobile Dental Unit"
                                className="radius-image shadow-2xl w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section className="py-16 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
                        <div className="flex-1">
                            <span className="title-subhny">Our Impact</span>
                            <h3 className="title-left mb-6">Serving the Community with Care</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                                Through our "Malviya Seva Prakalp" and other community initiatives, we have successfully treated thousands of patients who otherwise had no access to dental professionals.
                            </p>
                            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 mb-8">
                                <blockquote className="italic text-gray-700 dark:text-gray-300 mb-4">
                                    "The mobile clinic brought relief to our village where even basics were hard to find. The doctors were professional and compassionate."
                                </blockquote>
                                <p className="font-bold text-blue-600">— Community Leader, Varanasi Outreach</p>
                            </div>
                        </div>
                        <div className="flex-shrink-0 w-full lg:w-[450px]">
                            <img
                                src={new URL('../assets/images/camp1.jpg', import.meta.url).href}
                                alt="Dental Camp"
                                className="radius-image shadow-2xl w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Workshop Gallery */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <span className="title-subhny text-center block mb-2">Outreach Highlights</span>
                    <h3 className="title-w3l text-center mb-10">Mobile Clinic Gallery</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {campImages.map((imgUrl, idx) => (
                            <div key={idx} className="overflow-hidden rounded-xl shadow-md group aspect-[4/3]">
                                <img
                                    src={imgUrl}
                                    alt={`Workshop ${idx + 1}`}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link to="/contact" className="btn-primary-custom">Book an Outreach Program</Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
