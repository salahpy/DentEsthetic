import React, { useState, useEffect, useRef } from 'react';
import { Shield, Clock, Microscope, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const FeaturePoint = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="flex items-start">
    <div className="flex-shrink-0">
      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
        <Icon className="w-5 h-5 text-blue-600" />
      </div>
    </div>
    <div className="ml-4">
      <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
      <p className="mt-1 text-gray-600">{description}</p>
    </div>
  </div>
);

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null); // Store the timer ID here

  const images = [
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80"
  ];

  // Set up a timer that changes the image every 4 seconds
  const startImageTimer = () => {
    timerRef.current = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
  };

  useEffect(() => {
    startImageTimer(); // Start the timer on component mount

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current); // Clear the timer when the component unmounts
      }
    };
  }, [images.length]);

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current); // Clear the previous timer
    }
    startImageTimer(); // Restart the timer
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
    resetTimer(); // Reset the timer when next image is shown
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    resetTimer(); // Reset the timer when previous image is shown
  };

  const features = [
    {
      icon: Shield,
      title: 'Technologies de pointe',
      description: 'Équipements dernier cri pour des soins précis et confortables'
    },
    {
      icon: Heart,
      title: 'Approche bienveillante',
      description: 'Une équipe à l\'écoute pour des soins en toute sérénité'
    },
    {
      icon: Microscope,
      title: 'Expertise reconnue',
      description: '15 ans d\'excellence en dentisterie esthétique'
    },
    {
      icon: Clock,
      title: 'Flexibilité horaire',
      description: 'Des créneaux adaptés à votre emploi du temps'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-2xl shadow-xl overflow-hidden">
              <div className="relative w-full h-[400px]">
                {images.map((image, index) => (
                  <img
                    key={image}
                    src={image}
                    alt={`Notre cabinet dentaire ${index + 1}`}
                    className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                  />
                ))}
              </div>
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                  onClick={prevImage}
                  className="p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
                  aria-label="Image précédente"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-800" />
                </button>
                <button
                  onClick={nextImage}
                  className="p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
                  aria-label="Image suivante"
                >
                  <ChevronRight className="w-6 h-6 text-gray-800" />
                </button>
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentImageIndex(index);
                      resetTimer();
                    }}
                    className={`w-2 h-2 rounded-full transition-colors ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
                    aria-label={`Aller à l'image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Excellence et innovation en dentisterie esthétique
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Avec 15 années d'expérience, le Cabinet DentEsthetic offre des soins dentaires modernes,
              personnalisés et chaleureux. Notre mission est de vous offrir le plus beau des sourires
              dans un environnement confortable et accueillant.
            </p>

            <div className="grid grid-cols-1 gap-8">
              {features.map((feature, index) => (
                <FeaturePoint
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
