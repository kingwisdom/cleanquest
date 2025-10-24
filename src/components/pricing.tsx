import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Check } from "lucide-react"

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const pricingPlans = [
    {
      category: "Domestic Cleaning",
      price: "£16",
      unit: "per hour",
      description: "Regular house cleaning services",
      features: [
        "Minimum 2 hours",
        "Kitchen & bathroom cleaning",
        "Dusting & vacuuming",
        "Flexible scheduling",
        "Eco-friendly products",
      ],
      popular: false,
    },
    {
      category: "Deep Cleaning",
      price: "£20",
      unit: "per hour",
      description: "Comprehensive deep cleaning",
      features: [
        "Minimum 3 hours",
        "All domestic cleaning included",
        "Appliance cleaning",
        "Window & skirting boards",
        "Carpet cleaning available",
      ],
      popular: true,
    },
    {
      category: "End of Tenancy",
      price: "From £150",
      unit: "per property",
      description: "Professional move-out cleaning",
      features: ["1-bed: £150", "2-bed: £180", "3-bed: £220", "4-bed: £250", "Deposit-back guarantee"],
      popular: false,
    },
    {
      category: "Commercial Cleaning",
      price: "Custom",
      unit: "quote",
      description: "Tailored business solutions",
      features: [
        "Office cleaning",
        "Retail spaces",
        "Flexible scheduling",
        "Regular contracts available",
        "Customized cleaning plans",
      ],
      popular: false,
    },
  ]

  return (
    <section id="pricing" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
            Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Affordable rates with no hidden fees. Quality cleaning services that fit your budget.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all ${plan.popular ? "ring-2 ring-green-500 scale-105" : ""
                }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                  Popular
                </div>
              )}

              <div className="p-6 border-b border-gray-100">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">{plan.category}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-green-600">{plan.price}</span>
                  <span className="text-gray-600">{plan.unit}</span>
                </div>
              </div>

              <div className="p-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="bg-green-100 rounded-full p-1 mt-0.5 flex-shrink-0">
                        <Check className="text-green-600" size={14} />
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.a
                  href="#contact"
                  className={`btn w-full mt-6 ${plan.popular ? "btn-primary" : "btn-outline"}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Quote
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center bg-blue-50 rounded-xl p-8"
        >
          <p className="text-gray-700 mb-4">
            <strong>Note:</strong> All prices are subject to property size and condition. Contact us for a personalized
            quote tailored to your specific needs.
          </p>
          <p className="text-sm text-gray-600">We offer flexible payment options and discounts for regular bookings.</p>
        </motion.div>
      </div>
    </section>
  )
}
