import PageBanner from '../components/PageBanner'
import { Link } from 'react-router-dom'

export default function Products() {
    return (
        <main className="bg-white dark:bg-gray-900">
            <PageBanner
                title="Product Palette"
                bgImage={new URL('../assets/images/bg2.jpg', import.meta.url).href}
            />

            {/* Main Intro */}
            <section className="py-20">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <span className="title-subhny">Innovation at Heart</span>
                    <h2 className="title-w3l mb-6">Pioneering Dental Biotech Solutions</h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                        Kindway BioReZens specializes in the design and manufacture of high-performance dental implants and bio-regenerative materials. We bridge the gap between premium quality and accessibility.
                    </p>
                </div>
            </section>

            {/* Product Categories */}
            <section className="py-16 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Category 1: Implants */}
                        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden group">
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={new URL('../assets/images/bg2.jpg', import.meta.url).href}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    alt="Dental Implants"
                                />
                                <div className="absolute inset-0 bg-blue-900/40 group-hover:bg-blue-900/20 transition-colors"></div>
                            </div>
                            <div className="p-10">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Dental Implant Systems</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                    Titanium Grade 4 SLA-treated implants designed for maximum primary stability and rapid osseointegration.
                                </p>
                                <Link to="/implants" className="btn-primary-custom w-full justify-center">Explore Implant Range</Link>
                            </div>
                        </div>

                        {/* Category 2: Bone Grafts */}
                        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden group">
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={new URL('../assets/images/bg1.jpg', import.meta.url).href}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    alt="Bone Grafts"
                                />
                                <div className="absolute inset-0 bg-blue-900/40 group-hover:bg-blue-900/20 transition-colors"></div>
                            </div>
                            <div className="p-10">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Regenerative Biomaterials</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                    Synthetic and bio-renewable bone substitute materials for predictable tissue augmentation and ridge preservation.
                                </p>
                                <Link to="/bone-grafts" className="btn-primary-custom w-full justify-center">Explore Biomaterials</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Market Growth / Support */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="flex-1">
                            <span className="title-subhny">Why Partner with Us</span>
                            <h3 className="title-left mb-6">Unlocking Global Market Opportunities</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                                Beyond products, we offer clinical partnership. Our manufacturing capability allows for patient-specific solutions and high-volume supply with unmatched reliability.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    'Custom Patient-Specific Implants',
                                    'ISO Certified Manufacturing',
                                    'Clinical Mentorship for Partners',
                                    'Global Logistical Coverage',
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <i className="fa fa-arrow-circle-right text-blue-600"></i>
                                        <span className="text-gray-700 dark:text-gray-200 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-10">
                                <Link to="/contact" className="btn-primary-custom">Request Product Catalogue</Link>
                            </div>
                        </div>
                        <div className="flex-shrink-0 w-full lg:w-[450px]">
                            <img
                                src={new URL('../assets/images/b2.jpg', import.meta.url).href}
                                className="radius-image shadow-2xl"
                                alt="Product Support"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}