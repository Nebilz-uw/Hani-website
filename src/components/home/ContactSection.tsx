import React from 'react';
import ContactForm from '../common/ContactForm';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-8 text-purple">Book a Free Consultation</h2>
            <p className="text-xl lg:text-2xl xl:text-3xl text-gray-700 mb-12">
              We're here to answer your questions and help you understand how our services can best support your family's needs.
            </p>
            
            <div className="bg-cream rounded-xl p-8 lg:p-10 xl:p-12 mb-12">
              <h3 className="text-2xl lg:text-3xl xl:text-4xl font-medium mb-6 text-purple">Why Choose Golden Hour?</h3>
              <ul className="space-y-4 lg:space-y-6">
                <li className="flex items-start">
                  <span className="text-purple text-xl lg:text-2xl mr-4">✓</span>
                  <span className="text-lg lg:text-xl xl:text-2xl">Personalized care plans tailored to your specific needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple text-xl lg:text-2xl mr-4">✓</span>
                  <span className="text-lg lg:text-xl xl:text-2xl">Extensively trained and compassionate caregivers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple text-xl lg:text-2xl mr-4">✓</span>
                  <span className="text-lg lg:text-xl xl:text-2xl">Flexible scheduling to accommodate your lifestyle</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple text-xl lg:text-2xl mr-4">✓</span>
                  <span className="text-lg lg:text-xl xl:text-2xl">Regular quality assurance checks and caregiver supervision</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-lavender/50 rounded-xl p-8 lg:p-10 xl:p-12">
              <h3 className="text-2xl lg:text-3xl xl:text-4xl font-medium mb-6 text-purple">Our Service Area</h3>
              <p className="text-lg lg:text-xl xl:text-2xl mb-6">
                We proudly serve Lynnwood and surrounding areas in Washington State.
              </p>
              <p className="text-lg lg:text-xl xl:text-2xl font-medium">
                Call us today at <a href="tel:2063713952" className="text-purple hover:underline">206-371-3952</a> to learn more about our services.
              </p>
            </div>
          </div>
          
          <div>
            <div className="bg-cream p-8 lg:p-10 xl:p-12 rounded-xl shadow-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;