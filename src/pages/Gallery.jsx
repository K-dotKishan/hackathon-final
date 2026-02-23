import PageBanner from '../components/PageBanner'

const galleryImages = [
  'team1.jpg', 'team2.jpg', 'team3.jpg', 'team4.jpg',
  'team5.jpg', 'team6.jpg', 'team7.jpg', 'team8.jpg',
  'cam1.jpg', 'cam2.jpg', 'cam3.jpg', 'cam4.jpg'
].map(img => new URL(`../assets/images/${img}`, import.meta.url).href)

export default function Gallery() {
  return (
    <main className="bg-white dark:bg-gray-900">
      <PageBanner title="Gallery" />
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="title-subhny block mb-2">Our Gallery</span>
          <h3 className="title-w3l mb-10">Step into a world of healthy smiles and exquisite dental artistry</h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((imgUrl, idx) => (
              <div key={idx} className="overflow-hidden rounded-2xl shadow-lg group cursor-pointer aspect-square">
                <img
                  src={imgUrl}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="title-subhny">Clinical Proof</span>
            <h3 className="title-w3l">Before & After Results</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-4">Visual documentation of bone grafting and implant success cases from our clinical workshops.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: 'Full Arch Restoration', desc: 'Case study of severe bone loss treated with Kindway Bio-Graft and All-on-4 implants.', before: new URL('../assets/images/b4.jpg', import.meta.url).href, after: new URL('../assets/images/bg2.jpg', import.meta.url).href },
              { title: 'Single Lateral Incsor', desc: 'Aesthetic replacement using Type 4 Titanium SLA implant with immediate loading.', before: new URL('../assets/images/b5.jpg', import.meta.url).href, after: new URL('../assets/images/bg1.jpg', import.meta.url).href },
            ].map((caseStudy, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-xl">
                <div className="flex gap-2 mb-6">
                  <div className="flex-1 text-center font-bold text-xs uppercase tracking-widest text-gray-400">Before</div>
                  <div className="flex-1 text-center font-bold text-xs uppercase tracking-widest text-blue-600 font-black">After Results</div>
                </div>
                <div className="flex gap-4 mb-6">
                  <div className="flex-1 rounded-2xl overflow-hidden aspect-[4/3] border border-gray-100"><img src={caseStudy.before} className="w-full h-full object-cover grayscale opacity-60" /></div>
                  <div className="flex-1 rounded-2xl overflow-hidden aspect-[4/3] shadow-lg border-2 border-blue-100"><img src={caseStudy.after} className="w-full h-full object-cover" /></div>
                </div>
                <h4 className="font-bold text-gray-800 dark:text-white mb-2 text-lg">{caseStudy.title}</h4>
                <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">{caseStudy.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}