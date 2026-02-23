import PageBanner from '../components/PageBanner'
import { Link } from 'react-router-dom'

export default function BoneGrafts() {
    return (
        <main className="bg-white dark:bg-gray-900">
            <PageBanner title="Bone Graft Materials" />

            {/* Hero Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
                        <div className="flex-1">
                            <span className="title-subhny">Bio-Regenerative Solutions</span>
                            <h2 className="title-w3l mb-6">Advanced Bone Grafting Solutions</h2>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                                Successful implants start with a strong foundation. Our synthetic and bio-renewable bone graft materials provide the scaffolding necessary for natural bone regeneration, ensuring stable implant placement even in compromised sites.
                            </p>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-3xl mb-8">
                                <h4 className="font-bold text-gray-800 dark:text-white mb-4">Why Bone Grafting Matters:</h4>
                                <ul className="space-y-3">
                                    {[
                                        'Preservation of alveolar ridge after extraction',
                                        'Augmenting bone volume for implant stability',
                                        'Correcting anatomical deficiencies',
                                        'Promoting faster healing and osseointegration',
                                    ].map((text, i) => (
                                        <li key={i} className="flex gap-3 text-sm text-gray-700 dark:text-gray-300">
                                            <i className="fa fa-caret-right text-blue-600 mt-1"></i>
                                            {text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <Link to="/contact" className="btn-primary-custom">Order Grafting Materials</Link>
                                <Link to="/training" className="px-8 py-3 rounded-lg border-2 border-blue-600 text-blue-600 font-bold hover:bg-blue-600 hover:text-white transition-all">Enroll in Grafting Workshop</Link>
                            </div>
                        </div>
                        <div className="flex-shrink-0 w-full lg:w-[450px]">
                            <div className="relative">
                                <img
                                    src={new URL('../assets/images/bg1.jpg', import.meta.url).href}
                                    alt="Bone Grafting Solutions"
                                    className="radius-image shadow-2xl w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Educational Content */}
            <section className="py-16 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h3 className="title-left mb-6">The Science of Regeneration</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                Our bone graft materials are engineered to be osteoconductive, allowing new bone to grow across the scaffold while it slowly resorbs. This balance is critical for long-term health.
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                By choosing Kindway BioReZens, you are selecting materials that have undergone rigorous testing for purity, strength, and clinical efficacy.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { label: 'Synthetic', icon: 'fa-microscope', desc: 'No risk of cross-contamination.' },
                                { label: 'Bio-Renewable', icon: 'fa-leaf', desc: 'Sustainably sourced and environment friendly.' },
                                { label: 'Affordable', icon: 'fa-tag', desc: 'Making advanced care accessible to all patients.' },
                                { label: 'Proven', icon: 'fa-check-circle', desc: 'Used in over 1000+ successful cases.' },
                            ].map((item, i) => (
                                <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm">
                                    <i className={`fa ${item.icon} text-2xl text-blue-600 mb-3`}></i>
                                    <h5 className="font-bold text-gray-800 dark:text-white mb-1">{item.label}</h5>
                                    <p className="text-xs text-gray-500">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Educational Blog Post Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <span className="title-subhny text-center block mb-2">Clinical Insights</span>
                    <h3 className="title-w3l text-center mb-10">Educational Resources</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md flex flex-col">
                            <img
                                src={new URL('../assets/images/b4.jpg', import.meta.url).href}
                                className="w-full h-48 object-cover"
                                alt="Case Study"
                            />
                            <div className="p-8">
                                <h4 className="text-xl font-bold mb-4">Importance of Bone Grafts in Implant Success</h4>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                                    In this detailed case study, we examine how proper tissue augmentation led to successful implant outcomes in a patient with severe bone resorption.
                                </p>
                                <Link to="/training" className="text-blue-600 font-bold hover:underline">Read Full Clinical Report →</Link>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md flex flex-col">
                            <img
                                src={new URL('../assets/images/b5.jpg', import.meta.url).href}
                                className="w-full h-48 object-cover"
                                alt="Procedures"
                            />
                            <div className="p-8">
                                <h4 className="text-xl font-bold mb-4">Bone Grafting Procedures: Step-by-Step</h4>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                                    A guide for dentists on best practices for using synthetic graft materials, from site preparation to final suturing.
                                </p>
                                <Link to="/training" className="text-blue-600 font-bold hover:underline">Download Procedure Guide →</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
