
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Users, Heart, Target } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const values = [
    {
      icon: Award,
      title: "Reliability",
      description: "Consistent, dependable service you can count on every time",
    },
    {
      icon: Users,
      title: "Professionalism",
      description: "Trained staff delivering exceptional standards of cleanliness",
    },
    {
      icon: Heart,
      title: "Customer Care",
      description: "Your satisfaction is our top priority in everything we do",
    },
    {
      icon: Target,
      title: "Attention to Detail",
      description: "Meticulous cleaning that doesn't miss a single spot",
    },
  ]

  return (
    <section id="about" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
            About CleanQuest Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Based in Bradford, we provide professional cleaning services for both domestic and commercial clients. Our
            commitment to excellence ensures your space is always spotless.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center mb-4 shadow-sm">
                <value.icon className="text-green-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">Why Choose CleanQuest?</h3>
          <p className="text-lg text-green-50 max-w-3xl mx-auto mb-8 leading-relaxed">
            We combine years of experience with modern cleaning techniques and eco-friendly products. Our team is fully
            trained, insured, and dedicated to delivering exceptional results that exceed your expectations.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-1">100+</p>
              <p className="text-green-100">Happy Clients</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-1">5+</p>
              <p className="text-green-100">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-1">100%</p>
              <p className="text-green-100">Satisfaction Rate</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
