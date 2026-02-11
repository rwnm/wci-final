import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contact WIPA Chemicals | Global Technical Support",
  description: "Get in touch with WIPA Chemicals for technical support, product inquiries, and distribution opportunities. Global headquarters in Belgium.",
}

export default function Contact() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Header */}
      <div className="bg-slate-900 pt-32 pb-20 px-6 sm:px-8 lg:px-12 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-sky-900/20 to-transparent pointer-events-none" />
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 relative z-10">Contact Us</h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto relative z-10">
          Get in touch with our team for technical support, product inquiries, or partnership opportunities.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Contact Details */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Headquarters</h2>
              <div className="flex items-start gap-4 text-slate-600">
                <svg className="w-6 h-6 text-sky-600 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-slate-900">WIPA Chemicals International</p>
                  <p>Durmakker 17</p>
                  <p>9940 Evergem</p>
                  <p>Belgium</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 text-slate-600">
                  <svg className="w-6 h-6 text-sky-600 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-slate-900">General Inquiries</p>
                    <a href="mailto:info@wipa-chemicals.com" className="text-sky-600 hover:text-sky-700 transition-colors">
                      info@wipa-chemicals.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-slate-600">
                  <svg className="w-6 h-6 text-sky-600 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-slate-900">Phone</p>
                    <a href="tel:+3292534063" className="text-sky-600 hover:text-sky-700 transition-colors">
                      +32 (0)9 253 40 63
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-[300px] bg-slate-200 rounded-2xl overflow-hidden relative group">
              <div className="absolute inset-0 flex items-center justify-center bg-slate-300">
                <div className="text-center">
                  <svg className="w-12 h-12 text-slate-400 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <span className="text-slate-500 font-medium">Interactive Map Placeholder</span>
                </div>
              </div>
              <iframe
                className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.6666324263385!2d3.737151315756464!3d51.13333397957519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c376f9c9b5a0ab%3A0x6b8f3e3e3e3e3e3e!2sDurmakker%2017%2C%209940%20Evergem%2C%20Belgium!5e0!3m2!1sen!2sus!4v1625680000000!5m2!1sen!2sus"
                loading="lazy"
              />
            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 lg:p-10 h-fit sticky top-24">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all"
                    placeholder="john@company.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-slate-700 mb-2">Industry / Application</label>
                <div className="relative">
                  <select
                    id="industry"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all appearance-none"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>Select your industry</option>
                    <option value="compressors">Air Compressors</option>
                    <option value="gas-engines">Gas Engines</option>
                    <option value="refrigeration">Refrigeration</option>
                    <option value="hydraulics">Hydraulics</option>
                    <option value="gear-oils">Industrial Gear Oils</option>
                    <option value="food-grade">Food Grade Applications</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all resize-none"
                  placeholder="Tell us about your requirements..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-slate-900 hover:bg-sky-600 text-white font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Send Message</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  )
}
