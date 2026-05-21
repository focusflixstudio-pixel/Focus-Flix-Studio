// pages/gallery/[category].js
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import logo from '@/../public/images/Focus Flix.png';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, X, ChevronRight, ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const imageData = {
  wedding: [
    { id: 1, src: '/images/wedding/wedding-1.webp', alt: 'Beautiful Wedding Ceremony' },
    { id: 2, src: '/images/wedding/wedding-2.webp', alt: 'Bride and Groom Portrait' },
    { id: 3, src: '/images/wedding/wedding-3.webp', alt: 'Wedding Reception Dance' },
    { id: 4, src: '/images/wedding/wedding-4.webp', alt: 'Exchange of Vows' },
    { id: 5, src: '/images/wedding/wedding-5.webp', alt: 'Wedding Party Group Photo' },
    { id: 6, src: '/images/wedding/wedding-6.webp', alt: 'Romantic Couple Shot' },
    { id: 7, src: '/images/wedding/wedding-7.webp', alt: 'Wedding Cake Cutting' },
    { id: 8, src: '/images/wedding/wedding-8.webp', alt: 'First Dance Moment' },
  ],
  'pre-wedding': [
    { id: 1, src: '/images/pre-wedding/pre-wedding-1.webp', alt: 'Romantic Outdoor Session' },
    { id: 2, src: '/images/pre-wedding/pre-wedding-2.webp', alt: 'Sunset Couple Portrait' },
    { id: 3, src: '/images/pre-wedding/pre-wedding-3.webp', alt: 'Casual Fun Moments' },
    { id: 4, src: '/images/pre-wedding/pre-wedding-4.webp', alt: 'Intimate Close-up Shot' },
    { id: 5, src: '/images/pre-wedding/pre-wedding-5.webp', alt: 'Beach Romance Session' },
    { id: 6, src: '/images/pre-wedding/pre-wedding-6.webp', alt: 'Garden Love Story' },
    { id: 7, src: '/images/pre-wedding/pre-wedding-7.webp', alt: 'Garden Love Story' },
  ],
  events: [
    { id: 1, src: '/images/events/event-1.webp', alt: 'Corporate Event Photography' },
    { id: 2, src: '/images/events/event-2.webp', alt: 'Birthday Party Celebration' },
    { id: 3, src: '/images/events/event-3.webp', alt: 'Conference and Seminars' },
    { id: 4, src: '/images/events/event-4.webp', alt: 'Social Gathering Moments' },
    { id: 5, src: '/images/events/event-5.webp', alt: 'Festival and Cultural Events' },
    { id: 6, src: '/images/events/event-6.webp', alt: 'Award Ceremony Coverage' },
    { id: 7, src: '/images/events/event-7.webp', alt: 'Concert and Live Events' },
    { id: 8, src: '/images/events/event-8.webp', alt: 'Family Reunion Photography' },
  ],
  maternity: [
    { id: 1, src: '/images/maternity/maternity-1.webp', alt: 'Beautiful Expectant Mother' },
    { id: 2, src: '/images/maternity/maternity-2.webp', alt: 'Couple Maternity Session' },
    { id: 3, src: '/images/maternity/maternity-3.webp', alt: 'Outdoor Maternity Portrait' },
    { id: 4, src: '/images/maternity/maternity-4.webp', alt: 'Studio Maternity Shoot' },
    { id: 5, src: '/images/maternity/maternity-5.webp', alt: 'Family Maternity Photos' },
    { id: 6, src: '/images/maternity/maternity-6.webp', alt: 'Maternity with Props' },
  ],
  'baby-shoot': [
    { id: 1, src: '/images/baby-shoot/baby-1.webp', alt: 'Newborn Baby Portrait' },
    { id: 2, src: '/images/baby-shoot/baby-2.webp', alt: 'Baby with Parents' },
    { id: 3, src: '/images/baby-shoot/baby-3.webp', alt: 'Cute Baby Expressions' },
    { id: 4, src: '/images/baby-shoot/baby-4.webp', alt: 'Baby Milestone Photos' },
    { id: 5, src: '/images/baby-shoot/baby-5.webp', alt: 'Sibling with New Baby' },
    { id: 6, src: '/images/baby-shoot/baby-6.webp', alt: 'Baby in Creative Props' },
  ],
};

const categoryTitles = {
  wedding: 'Wedding Photography',
  'pre-wedding': 'Pre-Wedding Sessions',
  events: 'Event Coverage',
  maternity: 'Maternity Masterpieces',
  'baby-shoot': 'Baby & Newborn Photography',
};

export default function CategoryGallery({ category, initialImages, title }) {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openModal = (image, index) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const closeModal = () => setSelectedImage(null);

  const nextImage = (e) => {
    e?.stopPropagation();
    if (selectedIndex < initialImages.length - 1) {
      const newIndex = selectedIndex + 1;
      setSelectedIndex(newIndex);
      setSelectedImage(initialImages[newIndex]);
    }
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    if (selectedIndex > 0) {
      const newIndex = selectedIndex - 1;
      setSelectedIndex(newIndex);
      setSelectedImage(initialImages[newIndex]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage, selectedIndex]);

  if (router.isFallback) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-2 border-amber-500 border-t-transparent" />
      </div>
    );
  }

  return (
    <>
    <div className="min-h-screen bg-[#060608] text-zinc-100 selection:bg-amber-500/30 selection:text-amber-200">
      <Navbar logo={logo} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.06] pb-8 mb-12">
          <div className="space-y-3">
            <Link 
              href="/#gallery" 
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-500 uppercase group hover:text-amber-400 transition-colors focus:outline-none"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Collections
            </Link>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              {title}
            </h1>
          </div>
          <p className="text-sm sm:text-base text-zinc-400 font-light max-w-sm leading-relaxed">
            A curated narrative of emotional depth and pristine composition, produced by Focus Flix Studio.
          </p>
        </div>

        {initialImages.length === 0 ? (
          <div className="text-center py-24 bg-zinc-900/20 rounded-2xl border border-white/[0.03]">
            <p className="text-zinc-500 text-lg font-light tracking-wide">No visual assets available in this archive.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {initialImages.map((image, index) => (
              <div
                key={image.id}
                onClick={() => openModal(image, index)}
                className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-zinc-900 border border-white/[0.04] shadow-lg hover:shadow-2xl hover:border-amber-500/20 transition-all duration-500 cursor-zoom-in"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale-[15%] group-hover:grayscale-0"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  loading={index < 4 ? "eager" : "lazy"}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  <p className="text-white text-sm font-medium tracking-wide leading-snug">{image.alt}</p>
                  <p className="text-amber-500 text-[10px] uppercase tracking-widest font-semibold mt-1">Focus Flix Collection</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {selectedImage && (
        <div 
          onClick={closeModal}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-black/98 backdrop-blur-md animate-fadeIn"
        >
          <div className="relative w-full flex items-center justify-between px-4 sm:px-6 py-4 z-10 bg-gradient-to-b from-black/60 to-transparent">
            <div className="min-w-0">
              <h3 className="text-white font-medium text-sm sm:text-base tracking-wide truncate">{selectedImage.alt}</h3>
              <p className="text-zinc-500 text-xs tracking-wider mt-0.5">{title}</p>
            </div>
            <button
              onClick={closeModal}
              className="p-2.5 bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 hover:text-white rounded-full border border-white/[0.05] transition-all focus:outline-none"
              aria-label="Close Gallery View"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="relative flex-1 flex items-center justify-between px-2 sm:px-8">
         
            <div className="w-14 sm:w-20 flex justify-start z-10">
              {selectedIndex > 0 && (
                <button
                  onClick={prevImage}
                  className="p-3 bg-zinc-900/40 hover:bg-zinc-900/80 text-white rounded-xl border border-white/[0.04] transition-all hover:scale-105 active:scale-95 focus:outline-none"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}
            </div>

            <div 
  onClick={(e) => e.stopPropagation()}
  className="relative w-full max-w-6xl h-[75vh] flex items-center justify-center animate-scaleIn"
>
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain rounded-lg shadow-2xl drop-shadow-[0_0_32px_rgba(0,0,0,0.8)]"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />
            </div>

            <div className="w-14 sm:w-20 flex justify-end z-10">
              {selectedIndex < initialImages.length - 1 && (
                <button
                  onClick={nextImage}
                  className="p-3 bg-zinc-900/40 hover:bg-zinc-900/80 text-white rounded-xl border border-white/[0.04] transition-all hover:scale-105 active:scale-95 focus:outline-none"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}
            </div>
          </div>

          <div className="w-full text-center py-5 bg-gradient-to-t from-black/60 to-transparent z-10">
            <span className="inline-block px-3 py-1 bg-zinc-900/60 border border-white/[0.05] rounded-full text-amber-500 text-xs font-mono tracking-widest">
              {selectedIndex + 1} <span className="text-zinc-600">/</span> {initialImages.length}
            </span>
          </div>
        </div>
      )}
    </div>
    <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const paths = Object.keys(imageData).map((category) => ({
    params: { category },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { category } = params;
  
  return {
    props: {
      category,
      initialImages: imageData[category] || [],
      title: categoryTitles[category] || 'Photography Archive',
    },
  };
}