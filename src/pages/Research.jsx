import PageBanner from '../components/PageBanner'
import globalReachImg from '../assets/images/ex3.webp'
import research1Img from '../assets/images/b4.webp'
import research2Img from '../assets/images/b5.webp'
import research3Img from '../assets/images/bg3.webp'
import research4Img from '../assets/images/bg2.webp'
import bannerBg from '../assets/images/bg1.webp'

export default function Research() {
    const researchItems = [
        {
            tag: 'Bone Biology',
            title: 'SLA Surface Treatment & Osseointegration',
            desc: 'Our latest study on how sand-blasted, large-grit, acid-etched (SLA) surfaces significantly accelerate bone-to-implant contact (BIC) compared to standard surfaces.',
            img: research1Img,
            color: 'from-blue-600 to-cyan-600'
        },
        {
            tag: 'Clinical Safety',
            title: 'Biocompatibility of Titanium Grade 5',
            desc: 'Analyzing the long-term clinical safety of Grade 5 Titanium in stress-bearing dental applications and its resistance to corrosion in physiological environments.',
            img: research2Img,
            color: 'from-green-600 to-emerald-600'
        },
        {
            tag: 'Social Impact',
            title: 'Rural Oral Health Outreach Analytics',
            desc: 'Qualitative data gathered from our Mobile Dental Clinic missions showing a 40% improvement in oral hygiene awareness in Samneghat and surrounding districts.',
            img: research3Img,
            color: 'from-purple-600 to-pink-600'
        },
        {
            tag: 'Material Science',
            title: 'Synthetic Bone Graft Porosity',
            desc: 'Investigating the optimal macropore size for synthetic scaffolds to encourage rapid vascularization and natural bone formation.',
            img: research4Img,
            color: 'from-orange-600 to-red-600'
        }
    ]

    return (
        <main className="bg-white dark:bg-transparent">
            <PageBanner
                title="Global Research"
                bgImage={bannerBg}
            />

            {/* Global Reach Section */}
            <section className="py-16 sm:py-20 bg-white dark:bg-transparent border-b border-gray-100 dark:border-white/5">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
                        <div className="flex-1">
                            <span className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-sm font-bold rounded-full mb-4">
                                Global Impact
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-6">
                                Our Global Reach & Scientific Footprint
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                                Kindway Biorezens is proud to contribute to the global dental community. Our research-driven products are used by practitioners across continents, adhering to strict international clinical standards.
                            </p>
                            <div className="grid grid-cols-2 gap-6 pb-4">
                                <div className="text-center p-4 bg-gray-50 dark:bg-white/5 rounded-2xl">
                                    <div className="text-3xl font-bold text-blue-600 mb-1">20+</div>
                                    <div className="text-xs text-gray-500 uppercase tracking-widest">Countries</div>
                                </div>
                                <div className="text-center p-4 bg-gray-50 dark:bg-white/5 rounded-2xl">
                                    <div className="text-3xl font-bold text-blue-600 mb-1">500+</div>
                                    <div className="text-xs text-gray-500 uppercase tracking-widest">Clinical Studies</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-shrink-0 w-full lg:w-[480px]">
                            <img
                                src={globalReachImg}
                                alt="Global Network"
                                className="rounded-2xl shadow-2xl w-full h-auto border-4 border-white dark:border-gray-800"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Research Papers Grid */}
            <section className="py-16 sm:py-20 bg-gray-50 dark:bg-white/5">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Active Research & Whitepapers</h3>
                        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                            We collaborate with leading institutions like BHU Varanasi to ensure our clinical data is verified, peer-reviewed, and actionable.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {researchItems.map((item, idx) => (
                            <div key={idx} className="bg-white dark:bg-white/10 dark:backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl flex flex-col sm:flex-row group border border-transparent dark:border-white/5 hover:border-blue-500/30 transition-all duration-300">
                                <div className="sm:w-48 h-48 sm:h-auto overflow-hidden">
                                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="flex-1 p-6 space-y-3">
                                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 bg-gradient-to-r ${item.color} text-white rounded-full`}>
                                        {item.tag}
                                    </span>
                                    <h4 className="text-xl font-bold text-gray-800 dark:text-white line-clamp-2 uppercase">
                                        {item.title}
                                    </h4>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
                                        {item.desc}
                                    </p>
                                    <button className="text-blue-600 font-bold text-sm hover:underline flex items-center gap-2">
                                        Request Full Paper <i className="fa fa-file-pdf-o"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
