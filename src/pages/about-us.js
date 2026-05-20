import React, { useState, useEffect } from 'react';
import { Camera, Video, Phone, Mail, MapPin, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import Image from 'next/image';
import Navbar from './components/Navbar';
import logo from '@/../public/images/Focus Flix.png';
import Footer from './components/Footer';
import Head from 'next/head';

export default function AboutUs() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [faqOpen, setFaqOpen] = useState(null);

  const testimonials = [
    {
      name: "Amit & Neha",
      text: "Absolutely magical. They captured every precious moment of our special day with such artistry and emotion.",
      location: "Tuscany Wedding",
      initials: "AN"
    },
    {
      name: "Ram & Anjali",
      text: "Professional, creative, and so easy to work with. Our wedding film still gives us goosebumps every time we watch it.",
      location: "Beach Wedding",
      initials: "RA"
    },
    {
      name: "Priya & Arjun",
      text: "They didn't just document our wedding — they created a timeless piece of art that we'll treasure forever.",
      location: "Garden Wedding",
      initials: "PA"
    }
  ];

  const stats = [
    { number: "500+", label: "Weddings Captured" },
    { number: "8+",   label: "Years of Experience" },
    { number: "50+",  label: "Happy Couples" },
    { number: "24/7", label: "Available Support" }
  ];

  const faqs = [
    {
      q: "What is the cost of wedding photography in Delhi?",
      a: "Wedding photography pricing depends on coverage, number of events, cinematography requirements and destination location. We offer customised packages to suit every kind of celebration."
    },
    {
      q: "Do you offer destination wedding coverage?",
      a: "Yes, Focus Flix covers destination weddings across India — from the hills of Himachal to the beaches of Goa. We bring the same cinematic eye to every location."
    },
    {
      q: "How early should we book you?",
      a: "We recommend booking at least 3–6 months in advance, especially for peak season dates. Popular dates fill quickly, so earlier is always better."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <>
      <Head>
        <title>About Focus Flix Studio | Wedding Photographer & Cinematographer in Delhi</title>
        <meta name="description" content="Learn about Focus Flix Studio, Delhi's premium wedding photography and cinematography agency specializing in cinematic wedding films, candid photography, pre wedding shoots and luxury wedding storytelling." />
        <meta name="keywords" content="about focus flix studio, wedding photographer delhi, wedding cinematographer delhi, pre wedding photography delhi, candid wedding photography" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://focusflixstudio.com/about-us" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap" rel="stylesheet" />
        <meta property="og:title" content="About Focus Flix Studio | Wedding Photographer & Cinematographer in Delhi" />
        <meta property="og:description" content="Luxury wedding photography and cinematic wedding films in Delhi NCR." />
        <meta property="og:image" content="https://focusflixstudio.com/images/herotwo.png" />
        <meta property="og:url" content="https://focusflixstudio.com/about-us" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "ProfessionalService", name: "Focus Flix Studio", image: "https://focusflixstudio.com/images/herotwo.png", url: "https://focusflixstudio.com/about-us", telephone: "+91-9910553381", email: "hello@focusflix.in", address: { "@type": "PostalAddress", addressLocality: "Delhi", addressCountry: "IN" }, sameAs: ["https://www.instagram.com/focus_flix_studio/"], description: "Wedding photography and cinematography agency in Delhi NCR specializing in cinematic wedding films." }) }} />
      </Head>

      <style jsx global>{`
        .ff-display { font-family: 'Cormorant Garamond', Georgia, serif; }
        .ff-body    { font-family: 'DM Sans', system-ui, sans-serif; }

        .ff-root {
          --bg:          #0C0B09;
          --surface:     #131210;
          --surface-2:   #1A1815;
          --ink:         #EAE6E0;
          --ink-muted:   #7A756E;
          --ink-faint:   #3A3731;
          --clay:        #C4896A;
          --clay-dim:    #2A1E18;
          --rule:        #252220;
          --white:       #161410;
        }

        /* Subtle film-grain */
        .grain-overlay::after {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 9998;
          mix-blend-mode: overlay;
        }

        /* Ambient glow top-right */
        .glow-orb {
          position: fixed;
          top: -10vw;
          right: -5vw;
          width: 55vw;
          height: 55vw;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(196,137,106,0.055) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .stat-number {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 300;
          font-size: clamp(2.6rem, 5vw, 4.2rem);
          letter-spacing: -0.02em;
          color: var(--ink);
          line-height: 1;
        }

        .divider-rule {
          border: none;
          border-top: 1px solid var(--rule);
        }

        .faq-item {
          border-bottom: 1px solid var(--rule);
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.42s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .faq-answer.open { max-height: 220px; }

        .contact-row {
          transition: background 0.2s ease, border-color 0.2s ease;
        }
        .contact-row:hover {
          background: var(--surface-2) !important;
          border-color: var(--clay-dim) !important;
        }

        .social-pill {
          transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
        }
        .social-pill:hover {
          background: var(--clay-dim) !important;
          color: var(--clay) !important;
          border-color: var(--clay-dim) !important;
        }

        .tag-pill {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.62rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--clay);
          border: 1px solid rgba(196,137,106,0.3);
          border-radius: 100px;
          padding: 0.22rem 0.8rem;
          display: inline-block;
        }

        .feature-card {
          transition: border-color 0.25s ease;
        }
        .feature-card:hover {
          border-color: rgba(196,137,106,0.2) !important;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.7s ease forwards; }

        .dot-active {
          background: var(--clay) !important;
          width: 1.75rem !important;
        }
        .dot-inactive {
          background: var(--ink-faint) !important;
          width: 0.4rem !important;
        }
      `}</style>

      <div className="ff-root ff-body grain-overlay" style={{ background: 'var(--bg)', color: 'var(--ink)', minHeight: '100vh' }}>
        <div className="glow-orb" />
        <Navbar logo={logo} />

        {/* ── HERO ── */}
        <section style={{ maxWidth: '1280px', position: 'relative', zIndex: 1 }} className="mx-auto px-6 lg:px-12 pt-32 md:pt-44 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-start">

            {/* Left */}
            <div className="lg:col-span-7 lg:pr-16 space-y-8 relative z-10">
              <div className="space-y-3">
                <span className="tag-pill">Est. 2016 · Delhi NCR</span>
                <h1 className="ff-display fade-up" style={{
                  fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
                  fontWeight: 300,
                  lineHeight: 1.06,
                  letterSpacing: '-0.02em',
                  color: 'var(--ink)'
                }}>
                  Every love story<br />
                  <em style={{ fontStyle: 'italic', color: 'var(--clay)' }}>deserves to be</em><br />
                  seen forever.
                </h1>
              </div>

              <hr className="divider-rule" style={{ width: '3.5rem' }} />

              <div style={{ color: 'var(--ink-muted)', lineHeight: 1.85, fontSize: '0.95rem', maxWidth: '500px' }} className="space-y-4">
                <p>Founded by a photographer who grew up treating every frame as a quiet poem — we don't just document weddings. We translate the weight of a glance, the tremble of a hand, the last quiet moment before everything changes.</p>
                <p>Blending cinematic technique with an editorial eye, we create films and photographs that don't age. They're heirlooms.</p>
              </div>

              {/* Feature cards */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--rule)', borderRadius: '10px', overflow: 'hidden', maxWidth: '420px' }}>
                {[
                  { Icon: Camera, title: 'Artistic Vision', desc: 'Every frame is a conscious choice, not a snapshot.' },
                  { Icon: Video,  title: 'Cinematic Craft', desc: 'Films that carry the weight and warmth of the real day.' },
                ].map(({ Icon, title, desc }) => (
                  <div key={title} className="feature-card" style={{ background: 'var(--surface)', padding: '1.4rem', border: '1px solid transparent' }}>
                    <Icon style={{ color: 'var(--clay)', width: '1rem', height: '1rem', marginBottom: '0.7rem' }} />
                    <p className="ff-display" style={{ fontSize: '1.05rem', fontWeight: 500, color: 'var(--ink)', marginBottom: '0.3rem' }}>{title}</p>
                    <p style={{ fontSize: '0.78rem', color: 'var(--ink-muted)', lineHeight: 1.65 }}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: image */}
            <div className="lg:col-span-5 relative mt-12 lg:mt-0">
              <div style={{ position: 'relative', borderRadius: '3px', overflow: 'hidden', aspectRatio: '4/5' }}>
                <Image
                  src="/images/herotwo.png"
                  alt="Wedding photography by Focus Flix Studio"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 480px"
                  priority
                />
                {/* dark vignette overlay */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12,11,9,0.5) 0%, transparent 50%)' }} />
              </div>

              {/* Floating tag */}
              <div style={{
                position: 'absolute', bottom: '1.5rem', left: '-1.25rem',
                background: 'var(--surface-2)',
                border: '1px solid var(--rule)',
                padding: '0.7rem 1.1rem',
                borderRadius: '6px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)'
              }}>
                <p style={{ fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-muted)', fontWeight: 500 }}>Based in</p>
                <p className="ff-display" style={{ fontSize: '1rem', fontWeight: 400, color: 'var(--ink)', marginTop: '0.1rem' }}>Shastri Nagar, Delhi</p>
              </div>
            </div>

          </div>
        </section>

        {/* ── STATS ── */}
        <section style={{ borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)', background: 'var(--surface)', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '1280px' }} className="mx-auto px-6 lg:px-12 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {stats.map((stat, idx) => (
                <div key={idx} style={{
                  padding: '1.5rem 2rem',
                  borderRight: idx < stats.length - 1 ? '1px solid var(--rule)' : 'none',
                }} className="text-center">
                  <p className="stat-number">{stat.number}</p>
                  <p style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginTop: '0.5rem', fontWeight: 400 }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section style={{ maxWidth: '860px', position: 'relative', zIndex: 1 }} className="mx-auto px-6 lg:px-12 py-24 text-center">
          <span className="tag-pill" style={{ marginBottom: '2.5rem', display: 'block' }}>Client Stories</span>

          <div style={{ minHeight: '170px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <p className="ff-display" style={{
              fontSize: 'clamp(1.5rem, 3.5vw, 2.3rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              lineHeight: 1.55,
              color: 'var(--ink)',
              maxWidth: '680px'
            }}>
              &ldquo;{testimonials[activeTestimonial].text}&rdquo;
            </p>

            <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div style={{
                width: '2.2rem', height: '2.2rem', borderRadius: '50%',
                background: 'var(--clay-dim)', border: '1px solid rgba(196,137,106,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.65rem', fontWeight: 500, color: 'var(--clay)', letterSpacing: '0.05em'
              }}>
                {testimonials[activeTestimonial].initials}
              </div>
              <div style={{ textAlign: 'left' }}>
                <p style={{ fontWeight: 500, fontSize: '0.85rem', color: 'var(--ink)' }}>{testimonials[activeTestimonial].name}</p>
                <p style={{ fontSize: '0.7rem', color: 'var(--ink-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '0.1rem' }}>{testimonials[activeTestimonial].location}</p>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.45rem', marginTop: '2.5rem' }}>
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={idx === activeTestimonial ? 'dot-active' : 'dot-inactive'}
                style={{
                  height: '3px', borderRadius: '100px',
                  border: 'none', cursor: 'pointer',
                  transition: 'all 0.35s ease', padding: 0
                }}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </section>

        <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--rule)', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '1280px' }} className="mx-auto px-6 lg:px-12 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <span className="tag-pill" style={{ marginBottom: '1.25rem', display: 'block' }}>Questions</span>
                <h2 className="ff-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, lineHeight: 1.2, color: 'var(--ink)' }}>
                  What couples<br /><em style={{ color: 'var(--clay)' }}>often ask us</em>
                </h2>
                <p style={{ marginTop: '1rem', color: 'var(--ink-muted)', fontSize: '0.875rem', lineHeight: 1.8 }}>
                  Planning a wedding involves a thousand decisions. We try to make ours simple.
                </p>
              </div>

              <div className="lg:col-span-8">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="faq-item">
                    <button
                      onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                      style={{
                        width: '100%', textAlign: 'left', background: 'none',
                        border: 'none', cursor: 'pointer', padding: '1.5rem 0',
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1.25rem'
                      }}
                    >
                      <span className="ff-display" style={{ fontSize: '1.1rem', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.4 }}>
                        {faq.q}
                      </span>
                      <span style={{
                        width: '1.5rem', height: '1.5rem', flexShrink: 0,
                        border: '1px solid var(--rule)', borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '1.1rem', lineHeight: 1, color: 'var(--ink-muted)',
                        transition: 'transform 0.3s ease, border-color 0.3s ease, color 0.3s ease',
                        transform: faqOpen === idx ? 'rotate(45deg)' : 'none',
                        borderColor: faqOpen === idx ? 'rgba(196,137,106,0.4)' : undefined,
                        color: faqOpen === idx ? 'var(--clay)' : undefined
                      }}>+</span>
                    </button>
                    <div className={`faq-answer ${faqOpen === idx ? 'open' : ''}`}>
                      <p style={{ color: 'var(--ink-muted)', fontSize: '0.875rem', lineHeight: 1.85, paddingBottom: '1.5rem', maxWidth: '560px' }}>
                        {faq.a}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section style={{ maxWidth: '1280px', position: 'relative', zIndex: 1 }} className="mx-auto px-6 lg:px-12 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            <div className="lg:col-span-5">
              <span className="tag-pill" style={{ marginBottom: '1.25rem', display: 'block' }}>Get in Touch</span>
              <h2 className="ff-display" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--ink)' }}>
                Let&apos;s begin<br />
                <em style={{ color: 'var(--clay)' }}>your story.</em>
              </h2>
              <p style={{ marginTop: '1.25rem', color: 'var(--ink-muted)', fontSize: '0.875rem', lineHeight: 1.85, maxWidth: '340px' }}>
                Every great film starts with a single conversation. Reach out — we'd love to hear about your day.
              </p>
            </div>

            <div className="lg:col-span-7" style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                { href: 'tel:+919910553381', Icon: Phone, label: 'Call Us', value: '+91 99105 53381', isButton: false },
                { href: 'mailto:hello@focusflix.in', Icon: Mail, label: 'Email', value: 'hello@focusflix.in', isButton: false },
              ].map(({ href, Icon, label, value }) => (
                <a key={label} href={href} className="contact-row" style={{
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  padding: '1.2rem 1.4rem',
                  background: 'var(--surface)',
                  border: '1px solid var(--rule)',
                  borderRadius: '8px', textDecoration: 'none'
                }}>
                  <div style={{ width: '2.4rem', height: '2.4rem', borderRadius: '50%', background: 'var(--clay-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon style={{ width: '0.95rem', height: '0.95rem', color: 'var(--clay)' }} />
                  </div>
                  <div>
                    <p style={{ fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-muted)', fontWeight: 500 }}>{label}</p>
                    <p style={{ fontSize: '0.975rem', color: 'var(--ink)', marginTop: '0.15rem' }}>{value}</p>
                  </div>
                </a>
              ))}

              <button
                onClick={() => window.open('https://maps.app.goo.gl/3d3Uh1SNKuZZF9iZ8', '_blank', 'noopener,noreferrer')}
                className="contact-row"
                style={{
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  padding: '1.2rem 1.4rem',
                  background: 'var(--surface)',
                  border: '1px solid var(--rule)',
                  borderRadius: '8px', cursor: 'pointer', width: '100%', textAlign: 'left'
                }}
              >
                <div style={{ width: '2.4rem', height: '2.4rem', borderRadius: '50%', background: 'var(--clay-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MapPin style={{ width: '0.95rem', height: '0.95rem', color: 'var(--clay)' }} />
                </div>
                <div>
                  <p style={{ fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-muted)', fontWeight: 500 }}>Studio</p>
                  <p style={{ fontSize: '0.975rem', color: 'var(--ink)', marginTop: '0.15rem' }}>Shastri Nagar, Delhi</p>
                </div>
              </button>

              <div style={{ display: 'flex', gap: '0.65rem', paddingTop: '0.4rem' }}>
                {[
                  { href: 'https://www.instagram.com/focus_flix_studio/', Icon: Instagram, label: 'Instagram' },
                  { href: 'https://www.facebook.com/share/1CkSmXbkGY', Icon: Facebook, label: 'Facebook' },
                  { href: 'https://www.youtube.com/@focusflixstudio', Icon: Youtube, label: 'Youtube' },
                ].map(({ href, Icon, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="social-pill" style={{
                    display: 'flex', alignItems: 'center', gap: '0.45rem',
                    padding: '0.55rem 1rem',
                    border: '1px solid var(--rule)',
                    borderRadius: '100px', textDecoration: 'none',
                    color: 'var(--ink-muted)', fontSize: '0.73rem', fontWeight: 400,
                    background: 'var(--surface)'
                  }}>
                    <Icon style={{ width: '0.8rem', height: '0.8rem' }} />
                    {label}
                  </a>
                ))}
              </div>
            </div>

          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}