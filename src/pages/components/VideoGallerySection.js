import React, { useState } from 'react';
import { Play, ExternalLink, Clock, Eye } from 'lucide-react';

const VideoGallerySection = () => {
  const [hoveredVideo, setHoveredVideo] = useState(null);

  const videos = [
    {
      id: 1,
      title: "Gaurav & Jyotika",
      description: "Comprehensive walkthrough of our latest features",
      thumbnail: "images/gaurav.png",
      duration: "03:36",
      views: "12.4K",
      driveLink: "https://drive.google.com/file/d/1u0vSBpkIojYBokKyJiY60S58UZpqk6OC/view?usp=drive_link",
      category: "Pre-wedding"
    },
    {
      id: 2,
      title: "Jatin & Chanchal",
      description: "Deep dive into advanced concepts and techniques",
      thumbnail: "images/jatin.png",
      duration: "03:27",
      views: "8.9K",
      driveLink: "https://drive.google.com/file/d/1x1iYUIBTGT8AZ87mJCO63SN1k1Ake16q/view?usp=drive_link",
      category: "Wedding"
    },
    {
      id: 3,
      title: "Rahul & Venuka",
      description: "Real-world applications and success metrics",
      thumbnail: "images/rahul.png",
      duration: "04:00",
      views: "15.2K",
      driveLink: "https://drive.google.com/file/d/1obXfSnXuZi5wjpnGA5xDY054KcYoieYH/view?usp=drive_link",
      category: "Wedding"
    },
    {
      id: 4,
      title: "Jatin & Mihika",
      description: "Exclusive look at our development process",
      thumbnail: "images/jatintwo.png",
      duration: "03:15",
      views: "7.8K",
      driveLink: "https://drive.google.com/file/d/1sOnaJ1gSUrKFnsgy6ez0MA5ssGw5kKRz/view?usp=sharing",
      category: "Pre-wedding"
    }
  ];

  const handleVideoClick = (driveLink) => {
    window.open(driveLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 px-4 bg-[#0d0d0d] min-h-fit">
      <div className="max-w-7xl mx-auto">
     <div className='w-full justify-center text-center items-center flex flex-col mt-10'>
        <p className='md:text-2xl text-xl text-white'>
          We turn your special moment into{' '}<br></br>
          <span className='text-amber-400 font-bold my-class'>Cinematic Masterpiece</span>{' '}
        </p>
        <div className='w-[20%] my-5 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent'></div>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className={`group relative bg-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                hoveredVideo === video.id ? 'ring-4 ring-blue-500 ring-opacity-50' : ''
              }`}
              onMouseEnter={() => setHoveredVideo(video.id)}
              onMouseLeave={() => setHoveredVideo(null)}
              onClick={() => handleVideoClick(video.driveLink)}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-all duration-300 hover:bg-white/30">
                    <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                    {video.category}
                  </span>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-4 right-4 flex items-center space-x-1 bg-black/70 backdrop-blur-sm rounded-full px-2 py-1">
                  <Clock className="w-3 h-3 text-white" />
                  <span className="text-white text-xs font-medium">{video.duration}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {video.title}
                </h3>

                
                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 hidden">
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{video.views} views</span>
                  </div>
                  <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-4 h-4" />
                    <span>Watch now</span>
                  </div>
                </div>
              </div>

              {/* Hover Animation Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500 transition-colors duration-300" />
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Responsive Grid Animation */
        @media (min-width: 768px) {
          .grid > div:nth-child(1) { animation: fade-in 0.8s ease-out 0.1s both; }
          .grid > div:nth-child(2) { animation: fade-in 0.8s ease-out 0.2s both; }
          .grid > div:nth-child(3) { animation: fade-in 0.8s ease-out 0.3s both; }
          .grid > div:nth-child(4) { animation: fade-in 0.8s ease-out 0.4s both; }
        }

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </section>
  );
};

export default VideoGallerySection;