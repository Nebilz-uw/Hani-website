import React, { useEffect } from 'react';
import ContactForm from '../components/common/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import StickyMobileNav from '../components/common/StickyMobileNav';

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Us | Golden Hour Home Care Services';
  }, []);

  return (
    <div className="pt-24 pb-20 md:pb-20 bg-cream">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-purple">Get In Touch</h1>
          <p className="text-lg text-gray-700">
            We're here to answer your questions and provide the information you need about our home care services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <ContactCard 
            icon={<Phone className="text-purple" size={28} />}
            title="Call Us"
            content={<a href="tel:2063713952" className="text-purple hover:underline">206-371-3952</a>}
          />
          <ContactCard 
            icon={<Mail className="text-purple" size={28} />}
            title="Email Us"
            content={<a href="mailto:goldenhourhc@gmail.com" className="text-purple hover:underline">goldenhourhc@gmail.com</a>}
          />
          <ContactCard 
            icon={<MapPin className="text-purple" size={28} />}
            title="Visit Us"
            content="13116 164TH ST SW, Lynnwood, WA 98087"
          />
        </div>

        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6 text-purple text-center">Send Us a Message</h2>
          <ContactForm isContactPage />
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6 text-purple text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <FaqItem 
              question="What areas do you serve?"
              answer="We provide home care services in Lynnwood and surrounding areas in Washington State."
            />
            <FaqItem 
              question="Do you offer overnight care?"
              answer="Yes, we offer overnight care for clients who require 24-hour supervision or assistance."
            />
            <FaqItem 
              question="Are your caregivers certified?"
              answer="All our caregivers are certified, thoroughly screened, and receive ongoing training."
            />
            <FaqItem 
              question="How do I get started with your services?"
              answer="Contact us to schedule a free consultation. We'll assess your needs and develop a personalized care plan."
            />
          </div>
        </div>
      </div>
      <StickyMobileNav />
    </div>
  );
};

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, content }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center">
      <div className="inline-flex items-center justify-center w-12 h-12 bg-lavender rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
      <h3 className="text-lg font-medium mb-2 text-purple">{question}</h3>
      <p className="text-gray-700">{answer}</p>
    </div>
  );
};

export default ContactPage;