import React from 'react';
import { Smile, Stethoscope, Binary, Sparkles, CircleDot, Activity } from 'lucide-react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      title: 'Blanchiment Dentaire',
      description: 'Retrouvez l\'éclat naturel de votre sourire avec nos techniques de blanchiment avancées.',
      icon: Sparkles
    },
    {
      title: 'Implants Dentaires',
      description: 'Solutions durables et naturelles pour remplacer les dents manquantes.',
      icon: CircleDot
    },
    {
      title: 'Facettes Esthétiques',
      description: 'Transformez votre sourire avec nos facettes sur mesure de haute qualité.',
      icon: Smile
    },
    {
      title: 'Orthodontie Invisible',
      description: 'Alignez vos dents discrètement avec nos solutions d\'orthodontie invisible.',
      icon: Binary
    },
    {
      title: 'Soins Dentaires Généraux',
      description: 'Maintenez une excellente santé bucco-dentaire avec nos soins préventifs.',
      icon: Stethoscope
    },
    {
      title: 'Détartrage Professionnel',
      description: 'Préservez vos dents et vos gencives en éliminant le tartre et la plaque dentaire.',
      icon: Activity
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez notre gamme complète de services dentaires esthétiques
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;