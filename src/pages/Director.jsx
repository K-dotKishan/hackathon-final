import PageBanner from '../components/PageBanner'
import activity1 from '../assets/images/b1.webp'
import activity2 from '../assets/images/b3.webp'
import bannerBg from '../assets/images/bg.webp'

export default function Director() {
    return (
        <main className="bg-white dark:bg-transparent">
            <PageBanner
                title="Founder Director"
                bgImage={bannerBg}
            />

            <section className="py-16 sm:py-20 bg-white dark:bg-transparent">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
                        {/* Director Image */}
                        <div className="flex-shrink-0 w-full lg:w-[400px]">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur opacity-25"></div>
                                <div className="space-y-4">
                                    <img
                                        src={activity1}
                                        alt="Clinical Workshop"
                                        className="relative rounded-2xl shadow-xl w-full h-auto transform group-hover:scale-[1.01] transition-transform duration-500"
                                    />
                                    <img
                                        src={activity2}
                                        alt="Dental Implant Training"
                                        className="relative rounded-2xl shadow-xl w-full h-auto transform group-hover:scale-[1.01] transition-transform duration-500"
                                    />
                                </div>
                                <div className="mt-6 text-center lg:text-left">
                                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Dr. Rajesh Bansal</h3>
                                    <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg">MDS, PhD - Founder Director</p>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 space-y-6">
                            <div className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-sm font-bold rounded-full">
                                Leadership Message
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white leading-tight">
                                Driving Dental Excellence <br className="hidden sm:block" /> Through Innovation
                            </h2>

                            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                                As the Founder Director of Kindway Biorezens, my mission has always been to bridge the gap between advanced dental technology and clinical practice. We understand the challenges dentists face every day, especially when it comes to surgical outcomes and patient recovery.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
                                <div className="p-6 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/10">
                                    <i className="fa fa-bullseye text-3xl text-blue-600 mb-4"></i>
                                    <h4 className="font-bold text-gray-800 dark:text-white mb-2">Our Mission</h4>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">To manufacture biorenewable dental solutions that are both cutting-edge and sustainable for a healthier planet.</p>
                                </div>
                                <div className="p-6 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/10">
                                    <i className="fa fa-eye text-3xl text-blue-600 mb-4"></i>
                                    <h4 className="font-bold text-gray-800 dark:text-white mb-2">Our Vision</h4>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">To be at the forefront of transformative biorenewable technologies that redefine the medical manufacturing industry.</p>
                                </div>
                            </div>

                            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                                At Kindway, we don't just sell products; we provide a partnership. Through our specialized training workshops and mobile clinic outreach, we ensure that clinical excellence is accessible to all, from urban practitioners to underserved rural communities.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-blue-600 text-white shadow-lg">
                                    <i className="fa fa-certificate text-xl"></i>
                                    <span className="font-bold text-sm">MSME Registered</span>
                                </div>
                                <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-green-600 text-white shadow-lg">
                                    <i className="fa fa-check-circle text-xl"></i>
                                    <span className="font-bold text-sm">ISO Certified</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
