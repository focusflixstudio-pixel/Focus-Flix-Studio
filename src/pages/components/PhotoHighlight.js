import React from 'react';

const PhotoHighlight = () => {
  const highlights = [
    {
      id: 1,
      title: "The Cinematic Horizon",
      category: "Cinematography / Narrative",
      image: "/images/h1.webp",
      link: "#"
    },
    {
      id: 2,
      title: "Chasing Golden Light",
      category: "Commercial / Editorial",
      image: "/images/h2.webp",
      link: "#"
    },
    {
      id: 3,
      title: "Intimate Moments",
      category: "Wedding / Lifestyle",
      image: "/images/poonam2.webp",
      link: "#" 
    },
    {
      id: 4,
      title: "Urban Stories",
        category: "Street / Documentary",
        image: "/images/ankitpoonam.webp",
        link: "#"
    }
  ];

  return (
    <section className="relative w-full bg-slate-950 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-950/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="mb-12 text-center md:text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-white font-medium mb-3">
            Featured Showcases
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-slate-100 tracking-tight">
            Prime <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-amber-200 to-slate-400">Perspectives</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-center">
          
          {highlights.map((item, index) => (
            <div key={item.id} className="group cursor-pointer w-full">
              <a 
                href={item.link} 
                className="block relative overflow-hidden rounded-sm aspect-[16/9] bg-slate-900 shadow-2xl space-y-0"
              >
              
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out scale-100 group-hover:scale-103"
                  loading={index === 0 ? "eager" : "lazy"}
                />
             
              </a>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default PhotoHighlight;