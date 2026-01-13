import { motion } from "framer-motion"
import { Sparkles, Shield, Clock } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("../assets/modern-clean-minimalist-home-interior-with-natural.jpg")',
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Sparkles size={16} />
              Professional Cleaning Services
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight"
            >
              Sparkling Clean Spaces, <span className="text-green-600">Every Time</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Professional cleaning services for domestic and commercial clients across Bradford. Reliable, affordable,
              and high-quality solutions tailored to your needs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <motion.a
                href="#contact"
                className="btn btn-primary btn-lg px-8 py-4 rounded-lg text-base font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Quote
              </motion.a>
              <motion.a
                href="#services"
                className="btn btn-outline btn-lg px-8 py-4 rounded-lg text-base font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Our Services
              </motion.a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0"
            >
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-green-600 mb-2">
                  <Shield size={20} />
                </div>
                    <p className="text-sm font-semibold text-gray-900">Fully Insured</p>
                    <p className="text-xs text-gray-600">Protected Services</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-green-600 mb-2">
                  <Clock size={20} />
                </div>
                <p className="text-sm font-semibold text-gray-900">Flexible Hours</p>
                <p className="text-xs text-gray-600">7 Days a Week</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-green-600 mb-2">
                  <Sparkles size={20} />
                </div>
                <p className="text-sm font-semibold text-gray-900">Eco-Friendly</p>
                <p className="text-xs text-gray-600">Safe Products</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src="/home.png" alt="Professional cleaning service" className="w-full h-auto" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-6 -left-8 bg-white rounded-xl shadow-xl p-1 max-w-xs"
            >
              <div className="flex items-center gap-4">
                <div>
                  <a href="https://www.protectivity.com/product/cleaning-insurance/?showCert=true&policy=xuCAQd3PgyUcqMMi1kVH_w2" title="Cleaning Insurance Site Seal by Protectivity" target="_blank"><img src="https://secure.protectivity.com/customer/siteseal/asset/60" alt="Cleaners Site Seal by Protectivity" width="150" height="50" /></a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
