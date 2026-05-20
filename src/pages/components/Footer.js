import {
  Facebook,
  Instagram,
  Youtube,
  PhoneCall,
  Mail,
  MapPin,
  Camera,
  Video,
  Heart,
  ArrowRight,
  ExternalLink
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const services = [
    { name: 'Wedding Photography', icon: Camera },
    { name: 'Event Coverage', icon: Video },
    { name: 'Pre-Wedding Shoots', icon: Heart },
    { name: 'Corporate Events', icon: Camera }
  ]

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'About Us', href: '/about-us' }
  ]

  const socialLinks = [
    { 
      name: 'Facebook', 
      icon: Facebook, 
      href: 'https://www.facebook.com/focusflixstudio',
      color: 'hover:text-blue-400'
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      href: 'https://www.instagram.com/focus_flix_studio/',
      color: 'hover:text-pink-400'
    },
    { 
      name: 'YouTube', 
      icon: Youtube, 
      href: 'https://www.youtube.com/@focusflixstudio',
      color: 'hover:text-red-400'
    }
  ]

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden border-t border-white/5">
     
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-400 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-28 h-28 bg-purple-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
        backgroundSize: '20px 20px'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
      
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 md:gap-12 md:mb-12 gap-4 mb-4">
          
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="inline-block group focus:outline-none focus:ring-2 focus:ring-amber-400/50 rounded-lg">
              <Image 
                src="/images/Focus Flix.png" 
                alt="Focus Flix Logo" 
                width={180} 
                height={50} 
                className="transition-all duration-300 group-hover:scale-102"
                priority
              />
            </Link>
            
            <p className="text-gray-400 leading-relaxed max-w-md text-sm sm:text-base">
              Capturing timeless moments through weddings, events, and life&apos;s most cherished stories. 
              Based in Delhi, available nationwide for your special occasions.
            </p>
            
            <div className="flex flex-wrap gap-2 pt-2">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <div 
                    key={index} 
                    className="group flex items-center gap-2 px-3 py-1.5 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-amber-400/50 transition-all duration-300"
                  >
                    <Icon className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
                    <span className="text-xs text-gray-300 group-hover:text-white transition-colors">{service.name}</span>
                  </div>
                )
              })}
            </div>

            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-amber-400/50 transition-all duration-300 ${social.color} focus:outline-none focus:ring-2 focus:ring-amber-400/50`}
                  >
                    <Icon className="w-5 h-5 transition-all duration-300 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-transparent opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300" />
                    <span className="sr-only">{social.name}</span>
                  </a>
                )
              })}
            </div>
          </div>

          <div className="space-y-6 md:ps-4 lg:ps-0">
            <h4 className="text-lg font-bold text-white relative tracking-wide uppercase text-sm">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-amber-400 to-transparent" />
            </h4>
            <ul className="space-y-2.5 pt-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-all duration-300 py-1 text-sm focus:outline-none"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-amber-400" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white relative tracking-wide uppercase text-sm">
              Get In Touch
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-amber-400 to-transparent" />
            </h4>
            
            <div className="space-y-3 pt-2">
              <a 
                href="tel:+919910553381" 
                className="group flex items-center gap-4 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-amber-400/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
              >
                <div className="p-2 bg-amber-400/10 rounded-lg group-hover:bg-amber-400/20 transition-colors shrink-0">
                  <PhoneCall className="w-4 h-4 text-amber-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Call Us</p>
                  <p className="text-white text-sm font-medium truncate">+91 99105 53381</p>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-gray-500 opacity-0 group-hover:opacity-100 transition-all shrink-0" />
              </a>

              <a 
                href="mailto:hello@focusflix.in" 
                className="group flex items-center gap-4 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-amber-400/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
              >
                <div className="p-2 bg-amber-400/10 rounded-lg group-hover:bg-amber-400/20 transition-colors shrink-0">
                  <Mail className="w-4 h-4 text-amber-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Email</p>
                  <p className="text-white text-sm font-medium truncate">hello@focusflix.in</p>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-gray-500 opacity-0 group-hover:opacity-100 transition-all shrink-0" />
              </a>

              <button 
                onClick={() => window.open('https://maps.app.goo.gl/3d3Uh1SNKuZZF9iZ8', '_blank', 'noopener,noreferrer')}
                className="w-full text-left group flex items-center gap-4 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-amber-400/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
              >
                <div className="p-2 bg-amber-400/10 rounded-lg group-hover:bg-amber-400/20 transition-colors shrink-0">
                  <MapPin className="w-4 h-4 text-amber-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Location</p>
                  <p className="text-gray-300 text-xs font-medium leading-snug line-clamp-2 group-hover:text-white transition-colors">
                    WZ-19, Nimri Village, Block D, Shastri Nagar, Delhi, 110052
                  </p>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-gray-500 opacity-0 group-hover:opacity-100 transition-all shrink-0" />
              </button>
            </div>

            <a 
              href="https://wa.me/919910553381?text=I%20would%20like%20to%20get%20a%20quote%20for%20my%20event." 
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 w-full justify-center px-5 py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-semibold text-sm rounded-xl hover:from-amber-500 hover:to-amber-600 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-black"
            >
              Get Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="h-px bg-white/10 w-full mb-6" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-gray-500 text-center sm:text-left">
          <p>© {currentYear} Focus Flix Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-amber-400 transition-colors focus:outline-none">Privacy Policy</a>
            <a href="#terms" className="hover:text-amber-400 transition-colors focus:outline-none">Terms of Service</a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
    </footer>
  )
}

export default Footer