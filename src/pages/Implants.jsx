import PageBanner from '../components/PageBanner'
import { Link } from 'react-router-dom'

export default function Implants() {
    return (
        <main className="bg-white dark:bg-transparent">
            <PageBanner title="Dental Implants" />

            {/* Main Feature */}
            <section className="py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="flex-1">
                            <span className="title-subhny">Advanced Bio-Medical Solutions</span>
                            <h2 className="title-w3l mb-6">High-Performance Dental Implants</h2>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                                At Kindway BioReZens, we manufacture precision-engineered dental implants that blend cutting-edge technology with affordable pricing. Our implants are designed for superior osseointegration, ensuring long-term success and patient comfort.
                            </p>
                            <div className="space-y-4 mb-8">
                                {[
                                    { title: 'Biocompatible Grade 4 Titanium', desc: 'Superior strength and compatibility with human bone.' },
                                    { title: 'SLA Surface Treatment', desc: 'Enhanced micro-topography for faster healing and bone bonding.' },
                                    { title: 'Internal Hex Connection', desc: 'Precision-fit design that prevents microbial leakage and enhances stability.' },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center flex-shrink-0">
                                            <i className="fa fa-cogs text-blue-600"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800 dark:text-white">{item.title}</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <Link to="/contact" className="btn-primary-custom">View Product Catalogue</Link>
                                <Link to="/contact" className="px-8 py-3 rounded-lg border-2 border-blue-600 text-blue-600 font-bold hover:bg-blue-600 hover:text-white transition-all">Contact Sales</Link>
                            </div>
                        </div>
                        <div className="flex-shrink-0 w-full lg:w-[500px]">
                            <div className="relative">
                                <img
                                    src={new URL('../assets/images/bg2.webp', import.meta.url).href}
                                    alt="Dental Implants"
                                    className="radius-image shadow-2xl w-full h-auto object-cover"
                                />
                                <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl hidden md:block">
                                    <p className="text-3xl font-bold">100%</p>
                                    <p className="text-xs uppercase tracking-widest font-bold">Biocompatible</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Our Implants */}
            <section className="py-8 bg-gray-50 dark:bg-white/5">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="title-subhny">Clinical Excellence</span>
                        <h3 className="title-w3l mb-4">Precision Engineering for Better Dentistry</h3>
                        <p className="text-gray-600 dark:text-gray-400">Our product development approach blends cutting-edge technology, scientific precision, and deep clinical insight to deliver solutions that elevate the standard of dental care.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Stability', desc: 'Optimized thread design for primary stability in all bone types.' },
                            { title: 'Durability', desc: 'Tested and proven to withstand long-term occlusal loads.' },
                            { title: 'Aesthetics', desc: 'Designed to support natural-looking restorative outcomes.' },
                        ].map((item, i) => (
                            <div key={i} className="box-card dark:bg-white/10 dark:backdrop-blur-sm border-transparent dark:border-white/5">
                                <h4 className="text-xl font-bold mb-3 text-blue-600">{item.title}</h4>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-10 bg-blue-900 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Upgrade Your Practice?</h2>
                    <p className="text-blue-200 mb-10 max-w-2xl mx-auto text-lg">
                        Join the growing network of dentists using Kindway BioReZens implants to deliver exceptional patient outcomes.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/contact" className="px-10 py-4 bg-yellow-400 text-blue-900 font-bold rounded-xl hover:bg-yellow-300 transition-all shadow-xl">
                            Become a Partner
                        </Link>
                        <Link to="/training" className="px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-900 transition-all">
                            Join Implant Workshop
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
