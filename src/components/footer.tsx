import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">CleanQuest Solutions</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Professional cleaning services for domestic and commercial clients across Bradford. Your trusted partner
              for spotless spaces.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="text-green-500 flex-shrink-0 mt-1" size={18} />
                <a
                  href="mailto:info@cleanquest.co.uk"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@cleanquest.co.uk
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="text-green-500 flex-shrink-0 mt-1" size={18} />
                <a href="tel:07771096254" className="text-gray-400 hover:text-white transition-colors">
                  07771096254
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-green-500 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-400">Bradford, UK</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} CleanQuest Solutions Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
