import { useState, useEffect, useRef } from 'react'

const DENTAL_BOT_DATA = {
    en: {
        greetings: ["Hello! I'm Kindy, your Kindway AI assistant. How can I help you today?", "Hi there! Welcome to Kindway Biorezens. I'm here to answer your dental tech and training questions."],
        knowledge: [
            {
                keywords: ['implant', 'titanium', 'z-neo'],
                response: "Kindway specializes in high-precision dental implants. Our Z-Neo line is made from medical-grade titanium with advanced surface treatments for faster osseointegration."
            },
            {
                keywords: ['workshop', 'training', 'course', 'learn'],
                response: "We offer professional surgical workshops including Dental Implantology and Tissue Augmentation. You can view our full schedule on the 'Training & Workshops' page."
            },
            {
                keywords: ['location', 'address', 'where'],
                response: "We are located at 38 Balaji Colony, Samneghat, near the BHU Trauma Center in Varanasi. We also have a facility in the Central Discovery Center at BHU."
            },
            {
                keywords: ['contact', 'phone', 'call', 'email'],
                response: "You can reach us at +91-9151161267 or email Dr. Rajesh Bansal at rajeshbansal97@gmail.com."
            },
            {
                keywords: ['bone', 'graft', 'biomaterial'],
                response: "Our bio-renewable bone grafting materials are designed to accelerate bone regeneration and provide a stable foundation for implants."
            }
        ],
        default: "That's a great question! I'm still learning about specific clinical cases. For detailed technical advice, I recommend speaking with our Founder Director, Dr. Rajesh Bansal.",
        placeholder: "Ask me anything...",
        status: "Always active"
    },
    hi: {
        greetings: ["नमस्ते! मैं किंडी हूँ, आपकी किंडवे एआई सहायक। आज मैं आपकी क्या मदद कर सकती हूँ?", "नमस्ते! किंडवे बायोरेज़न्स में आपका स्वागत है। मैं आपके दंत तकनीक और प्रशिक्षण संबंधी प्रश्नों के उत्तर देने के लिए यहाँ हूँ।"],
        knowledge: [
            {
                keywords: ['implant', 'इम्प्लांट', 'titanium', 'टाइटेनियम', 'z-neo'],
                response: "किंडवे उच्च-सटीक डेंटल इम्प्लांट्स में विशेषज्ञता रखता है। हमारी ज़ेड-नियो (Z-Neo) लाइन मेडिकल-ग्रेड टाइटेनियम से बनी है जिसमें तेज़ एकीकरण के लिए उन्नत उपचार दिए गए हैं।"
            },
            {
                keywords: ['workshop', 'कार्यशाला', 'training', 'प्रशिक्षण', 'course', 'कोर्स', 'learn', 'सीखना'],
                response: "हम डेंटल इम्प्लांटोलॉजी और टिश्यू ऑग्मेंटेशन सहित पेशेवर सर्जिकल कार्यशालाएं प्रदान करते हैं। आप 'Training & Workshops' पेज पर हमारा पूरा शेड्यूल देख सकते हैं।"
            },
            {
                keywords: ['location', 'पता', 'address', 'स्थिति', 'where', 'कहां'],
                response: "हम वाराणसी में बीएचयू ट्रॉमा सेंटर के पास 38 बालाजी कॉलोनी, सामनेघाट में स्थित हैं। बीएचयू में सेंट्रल डिस्कवरी सेंटर में भी हमारी एक सुविधा है।"
            },
            {
                keywords: ['contact', 'संपर्क', 'phone', 'फोन', 'call', 'कॉल', 'email', 'ईमेल'],
                response: "आप हमसे +91-9151161267 पर संपर्क कर सकते हैं या डॉ. राजेश बंसल को rajeshbansal97@gmail.com पर ईमेल कर सकते हैं।"
            },
            {
                keywords: ['bone', 'हड्डी', 'graft', 'ग्राफ्ट', 'biomaterial'],
                response: "हमारी बायो-रिन्यूएबल बोन ग्राफ्टिंग सामग्रियां हड्डी के पुनरुत्थान को तेज़ करने और इम्प्लांट्स के लिए एक स्थिर आधार प्रदान करने के लिए डिज़ाइन की गई हैं।"
            }
        ],
        default: "यह एक अच्छा सवाल है! मैं अभी भी विशिष्ट नैदानिक मामलों के बारे में सीख रही हूँ। अधिक जानकारी के लिए, मैं हमारे संस्थापक निदेशक, डॉ. राजेश बंसल से बात करने की सलाह देती हूँ।",
        placeholder: "कुछ भी पूछें...",
        status: "हमेशा सक्रिय"
    }
}

export default function AIChatbot() {
    const [isOpen, setIsOpen] = useState(false)
    const [lang, setLang] = useState('en')
    const [messages, setMessages] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const scrollRef = useRef(null)

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [messages, isTyping])

    useEffect(() => {
        // Initial greeting based on current language
        setMessages([
            { role: 'bot', content: DENTAL_BOT_DATA[lang].greetings[Math.floor(Math.random() * DENTAL_BOT_DATA[lang].greetings.length)] }
        ])
    }, [lang])

    const handleSend = async (e) => {
        e.preventDefault()
        if (!inputValue.trim()) return

        const userMsg = inputValue.trim()
        setMessages(prev => [...prev, { role: 'user', content: userMsg }])
        setInputValue('')
        setIsTyping(true)

        // Simulate AI response delay
        setTimeout(() => {
            let botResponse = DENTAL_BOT_DATA[lang].default
            const lowerMsg = userMsg.toLowerCase()

            for (const item of DENTAL_BOT_DATA[lang].knowledge) {
                if (item.keywords.some(kw => lowerMsg.includes(kw.toLowerCase()))) {
                    botResponse = item.response
                    break
                }
            }

            setMessages(prev => [...prev, { role: 'bot', content: botResponse }])
            setIsTyping(false)
        }, 1000)
    }

    return (
        <div className="fixed bottom-6 right-6 z-[99999]">
            {/* Chat Window */}
            {isOpen && (
                <div className="absolute bottom-20 right-0 w-[calc(100vw-48px)] sm:w-[400px] h-[500px] sm:h-[550px] max-h-[calc(100vh-120px)] bg-white dark:bg-navy-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-white/10 overflow-hidden flex flex-col animate-in fade-in slide-in-from-bottom-10 duration-300">
                    {/* Header */}
                    <div className="p-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                                <i className="fa fa-android text-lg"></i>
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">Kindy AI</h4>
                                <p className="text-[10px] text-white/80">{DENTAL_BOT_DATA[lang].status}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="flex bg-white/10 p-1 rounded-lg backdrop-blur-sm mr-2">
                                <button
                                    onClick={() => setLang('en')}
                                    className={`px-2 py-0.5 text-[10px] font-bold rounded ${lang === 'en' ? 'bg-white text-blue-600' : 'text-white'}`}
                                >
                                    EN
                                </button>
                                <button
                                    onClick={() => setLang('hi')}
                                    className={`px-2 py-0.5 text-[10px] font-bold rounded ${lang === 'hi' ? 'bg-white text-blue-600' : 'text-white'}`}
                                >
                                    हिन्दी
                                </button>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
                            >
                                <i className="fa fa-times"></i>
                            </button>
                        </div>
                    </div>

                    {/* Messages Area */}
                    <div
                        ref={scrollRef}
                        className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth bg-gray-50/50 dark:bg-transparent"
                    >
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.role === 'user'
                                        ? 'bg-blue-600 text-white rounded-tr-none'
                                        : 'bg-white dark:bg-white/10 dark:text-gray-200 shadow-sm border border-gray-100 dark:border-white/5 rounded-tl-none'
                                        }`}
                                >
                                    {msg.content}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-white dark:bg-white/10 p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 dark:border-white/5">
                                    <div className="flex gap-1">
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Input Area */}
                    <form
                        onSubmit={handleSend}
                        className="p-4 bg-white dark:bg-navy-900 border-t border-gray-100 dark:border-white/10 flex gap-2"
                    >
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder={DENTAL_BOT_DATA[lang].placeholder}
                            className="flex-1 bg-gray-100 dark:bg-white/5 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none dark:text-white"
                        />
                        <button
                            type="submit"
                            className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
                        >
                            <i className="fa fa-paper-plane mr-0.5 mt-0.5"></i>
                        </button>
                    </form>
                </div>
            )}

            {/* Floating Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 ${isOpen
                    ? 'bg-red-500 text-white rotate-90'
                    : 'bg-blue-600 text-white relative'
                    }`}
            >
                {isOpen ? (
                    <i className="fa fa-times text-xl"></i>
                ) : (
                    <>
                        <i className="fa fa-commenting text-xl"></i>
                        {!isOpen && (
                            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
                                1
                            </span>
                        )}
                    </>
                )}
            </button>
        </div>
    )
}
