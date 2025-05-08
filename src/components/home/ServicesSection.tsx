import React from 'react';
import { Service } from '../../types';

const services: Service[] = [
  {
    id: 1,
    title: 'Personal Care',
    description: 'Assistance with daily activities including bathing, dressing, grooming, and medication reminders.',
    icon: '🧠'
  },
  {
    id: 2,
    title: 'Companionship',
    description: 'Meaningful conversation, recreational activities, and emotional support to prevent isolation.',
    icon: '👥'
  },
  {
    id: 3,
    title: 'Transportation',
    description: 'Safe transportation to appointments, shopping, social events, and other outings.',
    icon: '🚗'
  },
  {
    id: 4,
    title: 'Respite Care',
    description: 'Temporary relief for family caregivers, allowing them time to rest and recharge.',
    icon: '💆'
  },
  {
    id: 5,
    title: 'Specialized Support',
    description: 'Tailored non-medical care for clients with specific conditions like dementia or Parkinson\'s.',
    icon: '🏥'
  },
  {
    id: 6,
    title: 'Household Support',
    description: 'Light housekeeping, meal preparation, laundry, and other home maintenance tasks.',
    icon: '🏡'
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="section bg-cream-dark">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-purple">What We Offer</h2>
          <p className="text-lg text-gray-700">
            Our comprehensive services are designed to support independence, dignity, and quality of life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="card hover:-translate-y-1">
      <div className="text-4xl mb-4">
        {service.icon}
      </div>
      <h3 className="text-xl font-medium mb-3 text-purple">{service.title}</h3>
      <p className="text-gray-700">
        {service.description}
      </p>
    </div>
  );
};

export default ServicesSection;