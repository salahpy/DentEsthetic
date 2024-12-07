import React from 'react';
import { Phone } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80"
          alt="Modern Dental Office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/75" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 flex items-center min-h-screen">
        <div className="py-32 lg:py-48">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Un sourire parfait<br />commence ici
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl">
            Des soins dentaires modernes et esthétiques adaptés à vos besoins, 
            réalisés par des experts passionnés par votre sourire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#appointment"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Prenez rendez-vous
            </a>
            <a
              href="tel:+33123456789"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-100 bg-blue-900/50 hover:bg-blue-900/75 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Appelez-nous
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;