import React, { useState, useEffect } from 'react';
import { Camera, Video, Heart, Award, Users, Calendar, Phone, Mail, MapPin, Instagram, Facebook, Twitter, Quote } from 'lucide-react';
import Image from 'next/image';
import Navbar from './components/Navbar';
import logo from '@/../public/images/Focus Flix.png';
import Footer from './components/Footer';
import Head from 'next/head';

export default function AboutUs() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Amit & Neha",
      text: "Absolutely magical! They captured every precious moment of our special day with such artistry and emotion.",
      location: "Tuscany Wedding"
    },
    {
      name: "Ram & Anjali",
      text: "Professional, creative, and so easy to work with. Our wedding film still gives us goosebumps every time we watch it.",
      location: "Beach Wedding"
    },
    {
      name: "Priya & Arjun",
      text: "They didn't just document our wedding - they created a timeless piece of art that we'll treasure forever.",
      location: "Garden Wedding"
    }
  ];

  const stats = [
    { number: "500+", label: "Weddings Captured", icon: Heart },
    { number: "8+", label: "Years Experience", icon: Award },
    { number: "50+", label: "Happy Couples", icon: Users },
    { number: "24/7", label: "Available Support", icon: Calendar }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <>
    <Head>
  <title>
    About Focus Flix Studio | Wedding Photographer & Cinematographer in Delhi
  </title>

  <meta
    name="description"
    content="Learn about Focus Flix Studio, Delhi's premium wedding photography and cinematography agency specializing in cinematic wedding films, candid photography, pre wedding shoots and luxury wedding storytelling."
  />

  <meta
    name="keywords"
    content="about focus flix studio, wedding photographer delhi, wedding cinematographer delhi, pre wedding photography delhi, candid wedding photography"
  />

  <meta name="robots" content="index, follow" />

  <link
    rel="canonical"
    href="https://focusflixstudio.com/about-us"
  />

  <meta
    property="og:title"
    content="About Focus Flix Studio | Wedding Photographer & Cinematographer in Delhi"
  />

  <meta
    property="og:description"
    content="Luxury wedding photography and cinematic wedding films in Delhi NCR."
  />

  <meta
    property="og:image"
    content="https://focusflixstudio.com/images/herotwo.webp"
  />

  <meta
    property="og:url"
    content="https://focusflixstudio.com/about-us"
  />

  <meta property="og:type" content="website" />
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Focus Flix Studio",
      image: "https://focusflixstudio.com/images/herotwo.png",
      url: "https://focusflixstudio.com/about-us",
      telephone: "+91-9910553381",
      email: "hello@focusflix.in",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Delhi",
        addressCountry: "IN"
      },
      sameAs: [
        "https://www.instagram.com/focus_flix_studio/"
      ],
      description:
        "Wedding photography and cinematography agency in Delhi NCR specializing in cinematic wedding films."
    })
  }}
/>
</Head>
    
  
    <div className="min-h-screen bg-[#09090b] text-zinc-100 antialiased selection:bg-amber-500/20 selection:text-amber-300">
      <Navbar logo={logo} />

      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/[0.02] rounded-full blur-[120px] pointer-events-none select-none" />
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-zinc-500/[0.02] rounded-full blur-[120px] pointer-events-none select-none" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-40 pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider block">Who We Are</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
                We shoot masterpieces through{' '}
                <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                  Visual Storytelling
                </span>
              </h1>
            </div>

            <div className="space-y-4 text-zinc-400 text-base font-normal leading-relaxed">
              <p>
                Founded by a passionate artist who believes every love story deserves to be told with breathtaking beauty, we have dedicated our lives to capturing the magic of your most precious moments.
              </p>
              <p>
                With an eye for detail and a heart for romance, we blend cinematic techniques with timeless photography to create heirloom pieces that will make your grandchildren fall in love with your love story.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 bg-zinc-900/40 backdrop-blur-sm rounded-xl border border-white/[0.04] hover:border-amber-500/20 transition-all duration-300">
                <Camera className="w-6 h-6 text-amber-500 mb-3" />
                <h3 className="font-bold text-white mb-1 text-sm sm:text-base">Artistic Vision</h3>
                <p className="text-zinc-400 text-xs sm:text-sm">Every frame tells a real story of love, laughter, and timeless elegance.</p>
              </div>

              <div className="p-5 bg-zinc-900/40 backdrop-blur-sm rounded-xl border border-white/[0.04] hover:border-amber-500/20 transition-all duration-300">
                <Video className="w-6 h-6 text-amber-500 mb-3" />
                <h3 className="font-bold text-white mb-1 text-sm sm:text-base">Cinematic Magic</h3>
                <p className="text-zinc-400 text-xs sm:text-sm">High-quality wedding films that capture the true essence of your big day.</p>
              </div>
            </div>
          </div>
          
          <div className="relative group w-full max-w-md mx-auto lg:max-w-none">
            <div className="aspect-square relative w-full bg-zinc-900 rounded-2xl overflow-hidden border border-white/[0.06] shadow-xl">
              <Image 
                src="/images/herotwo.png" 
                alt="About Us" 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-102"
                sizes="(max-width: 1024px) 100vw, 500px"
                priority
              />
            </div>
          </div>

        </div>
      </section>

      <section className="border-y border-white/[0.05] bg-zinc-900/20 backdrop-blur-sm py-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-center text-zinc-500 mb-1">
                    <Icon className="w-4 h-4" />
                  </div>
                  <p className="text-2xl sm:text-3xl font-black text-white">{stat.number}</p>
                  <p className="text-xs sm:text-sm text-zinc-400 font-normal">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mt-20">
  <h2 className="text-3xl font-bold text-white mb-8">
    Frequently Asked Questions
  </h2>

  <div className="space-y-6">
    <div>
      <h3 className="text-xl font-semibold text-white">
        What is the cost of wedding photography in Delhi?
      </h3>

      <p className="text-zinc-400 mt-2">
        Wedding photography pricing depends on coverage, number of events,
        cinematography requirements and destination location.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-white">
        Do you offer destination wedding coverage?
      </h3>

      <p className="text-zinc-400 mt-2">
        Yes, Focus Flix covers destination weddings across India.
      </p>
    </div>
  </div>
</section>

      <section className="max-w-3xl mx-auto px-4 pt-20 pb-12 relative z-10 text-center">
        <div className="relative min-h-[140px] flex flex-col justify-center items-center">
          <Quote className="absolute -top-4 text-zinc-800/40 w-12 h-12 -z-10" />
          
          <div className="transition-all duration-300 px-2">
            <p className="text-base sm:text-xl text-zinc-300 font-normal italic leading-relaxed">
              &ldquo;{testimonials[activeTestimonial].text}&rdquo;
            </p>
            <div className="mt-4">
              <h4 className="text-white font-bold text-sm sm:text-base">{testimonials[activeTestimonial].name}</h4>
              <p className="text-amber-500 text-xs uppercase font-semibold tracking-wider mt-0.5">{testimonials[activeTestimonial].location}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-1.5 mt-6">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTestimonial(idx)}
              className={`h-1 rounded-full transition-all duration-300 ${idx === activeTestimonial ? 'w-5 bg-amber-500' : 'w-1.5 bg-zinc-800'}`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 pt-8 relative z-10">
        <div className="w-full text-center flex flex-col items-center mb-10">
          <p className="text-lg sm:text-xl text-zinc-300 font-medium">
            Let&apos;s create <span className="text-amber-400 font-bold">Magic</span> together
          </p>
          <div className="w-16 mt-3 h-0.5 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
          
          <div className="md:col-span-2 bg-zinc-900/30 backdrop-blur-sm rounded-xl p-6 border border-white/[0.04] space-y-4">
            <h3 className="text-lg font-bold text-white">Get in Touch</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              
              <a href="tel:+919910553381" className="p-4 bg-zinc-950/50 border border-white/[0.04] rounded-lg hover:border-amber-500/20 transition-all flex items-center gap-3">
                <div className="p-2 bg-zinc-900 text-amber-500 rounded-md shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-zinc-500 uppercase font-bold">Call Us</p>
                  <p className="text-zinc-300 text-xs font-medium mt-0.5 whitespace-nowrap">+91 99105 53381</p>
                </div>
              </a>

              <a href="mailto:hello@focusflix.in" className="p-4 bg-zinc-950/50 border border-white/[0.04] rounded-lg hover:border-amber-500/20 transition-all flex items-center gap-3">
                <div className="p-2 bg-zinc-900 text-amber-500 rounded-md shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-zinc-500 uppercase font-bold">Email Us</p>
                  <p className="text-zinc-300 text-xs font-medium mt-0.5 truncate">hello@focusflix.in</p>
                </div>
              </a>

              <button 
                onClick={() => window.open('https://maps.app.goo.gl/3d3Uh1SNKuZZF9iZ8', '_blank', 'noopener,noreferrer')}
                className="p-4 bg-zinc-950/50 border border-white/[0.04] rounded-lg hover:border-amber-500/20 text-left transition-all flex items-center gap-3 focus:outline-none w-full"
              >
                <div className="p-2 bg-zinc-900 text-amber-500 rounded-md shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-zinc-500 uppercase font-bold">Studio Location</p>
                  <p className="text-zinc-400 text-xs font-medium mt-0.5 truncate">Shastri Nagar, Delhi</p>
                </div>
              </button>
              
            </div>
          </div>

          <div className="bg-zinc-900/30 backdrop-blur-sm rounded-xl p-6 border border-white/[0.04] flex flex-col justify-between gap-4">
            <h3 className="text-lg font-bold text-white">Follow Our Journey</h3>
            <div className="grid grid-cols-3 gap-2">
              <a href="https://www.instagram.com/focus_flix_studio/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center py-3 bg-zinc-950/50 rounded-lg border border-white/[0.04] text-zinc-400 hover:text-pink-400 hover:border-pink-500/10 hover:bg-pink-500/[0.01] transition-all group">
                <Instagram className="w-4 h-4 group-hover:scale-105 transition-transform" />
                <span className="text-[10px] mt-1.5 font-normal">Instagram</span>
              </a>
              <a href="#" className="flex flex-col items-center justify-center py-3 bg-zinc-950/50 rounded-lg border border-white/[0.04] text-zinc-400 hover:text-blue-400 hover:border-blue-500/10 hover:bg-blue-500/[0.01] transition-all group">
                <Facebook className="w-4 h-4 group-hover:scale-105 transition-transform" />
                <span className="text-[10px] mt-1.5 font-normal">Facebook</span>
              </a>
              <a href="#" className="flex flex-col items-center justify-center py-3 bg-zinc-950/50 rounded-lg border border-white/[0.04] text-zinc-400 hover:text-sky-400 hover:border-sky-500/10 hover:bg-sky-500/[0.01] transition-all group">
                <Twitter className="w-4 h-4 group-hover:scale-105 transition-transform" />
                <span className="text-[10px] mt-1.5 font-normal">Twitter</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
    </>
  );
}