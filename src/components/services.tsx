import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Home, Sparkles, Key, Building2 } from "lucide-react"

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Home,
      title: "Domestic Cleaning",
      description:
        "Regular house cleaning services tailored to your schedule and needs. From weekly maintenance to deep cleans.",
      features: [
        "Weekly/Fortnightly cleaning",
        "Kitchen & bathroom sanitization",
        "Dusting & vacuuming",
        "Flexible scheduling",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Sparkles,
      title: "Deep Cleaning",
      description:
        "Comprehensive cleaning service that reaches every corner. Perfect for spring cleaning or special occasions.",
      features: [
        "Detailed room-by-room cleaning",
        "Appliance cleaning",
        "Window & skirting boards"
      ],
      color: "from-green-500 to-green-600",
    },
    {
      icon: Key,
      title: "End of Tenancy",
      description:
        "Professional move-out cleaning to ensure you get your deposit back. Meets landlord and agency standards.",
      features: [
        "Full property deep clean",
        "Oven & appliance cleaning",
        "Deposit-back guarantee",
        "Inventory checklist",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Building2,
      title: "Commercial Cleaning",
      description: "Professional cleaning services for offices, retail spaces, and commercial properties of all sizes.",
      features: [
        "Office & workspace cleaning",
        "Retail space maintenance",
        "Flexible scheduling",
        "Customized cleaning plans",
      ],
      color: "from-orange-500 to-orange-600",
    },
  ]

  return (
    <section id="services" ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive cleaning solutions designed to meet your specific needs, whether residential or commercial.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className={`bg-gradient-to-r ${service.color} p-6`}>
                <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-2">{service.title}</h3>
                <p className="text-white/90 leading-relaxed">{service.description}</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="bg-green-100 rounded-full p-1 mt-0.5">
                        <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a href="#contact" className="btn btn-primary btn-lg px-8 py-4 rounded-lg text-base font-medium inline-block">
            Request a Service
          </a>
        </motion.div>
      </div>
    </section>
  )
}
