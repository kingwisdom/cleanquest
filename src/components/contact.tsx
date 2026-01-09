
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react"
import { ToastContainer, toast } from 'react-toastify';

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault()

      // Send email via API
      await fetch('https://drivesolution.cloud/notification/email/send/onbehalf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          replyTo: formData.email,
          subject: `New Contact Form Submission from ${formData.name}`,
          message: formData.message,
          contacts: [
            {
              name: formData.name,
              email: "bookings@cleanquest.co.uk",
              phone: formData.phone,
              otherInfo: `Service: ${formData.service}`
            },
            {
              name: formData.name,
              email: "productdrive@proton.me",
              phone: formData.phone,
              otherInfo: `Service: ${formData.service}`
            }
          ],
          emailDisplayName: "From Get a Quote",
          messageType: 0
        })
      })

      // Handle form submission


    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("There was an error submitting the form. Please try again later.");
    }
    finally {
      const phone = "447459755292";
      const message = `${formData?.name}%0A${formData?.email}%0A${formData?.message}%0A${formData?.phone}%0AService Required: ${formData?.service}`;

      window.open(
        `https://api.whatsapp.com/send?phone=${phone}&text=${message}`,
        "_blank"
      );
      toast.success("Thank you for your inquiry! We'll get back to you soon.")
      setFormData({ name: "", email: "", phone: "", service: "", message: "" })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@cleanquest.co.uk",
      link: "mailto:hello@cleanquest.co.uk",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "07459755292",
      link: "tel:07459755292",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "07771096254",
      link: "tel:07771096254",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bradford, UK",
      link: null,
    },
  ]

  return (
    <section id="contact" ref={ref} className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to experience spotless cleaning? Contact us today for a free quote.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Contact Information</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We're here to answer any questions you may have about our cleaning services. Reach out to us and we'll
              respond as soon as we can.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                    <info.icon className="text-green-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{info.title}</p>
                    {info.link ? (
                      <a href={info.link} className="text-gray-600 hover:text-green-600 transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 bg-white rounded-xl p-6 shadow-lg"
            >
              <h4 className="font-semibold text-gray-900 mb-3">Business Hours</h4>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Sunday: 8:00 AM - 8:00 PM</p>
                <p className="text-sm text-green-600 font-medium">Available 7 days a week</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Request a Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input input-bordered w-full"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input input-bordered w-full"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="input input-bordered w-full"
                  placeholder="07771096254"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Required *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="select select-bordered w-full"
                >
                  <option value="">Select a service</option>
                  <option value="domestic">Domestic Cleaning</option>
                  <option value="deep">Deep Cleaning</option>
                  <option value="tenancy">End of Tenancy</option>
                  <option value="commercial">Commercial Cleaning</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="textarea textarea-bordered w-full"
                  placeholder="Tell us about your cleaning needs..."
                />
              </div>

              <motion.button
                type="submit"
                className="btn btn-primary w-full gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={18} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
      <ToastContainer />
    </section>
  )
}
