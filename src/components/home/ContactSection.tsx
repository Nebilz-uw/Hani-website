import React from 'react';
import ContactForm from '../common/ContactForm';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-purple">Book a Free Consultation</h2>
            <p className="text-lg text-gray-700 mb-6">
              We're here to answer your questions and help you understand how our services can best support your family's needs.
            </p>
            
            <div className="bg-cream rounded-xl p-6 mb-8">
              <h3 className="text-xl font-medium mb-4 text-purple">Why Choose Golden Hour?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-purple mr-3">✓</span>
                  <span>Personalized care plans tailored to your specific needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple mr-3">✓</span>
                  <span>Extensively trained and compassionate caregivers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple mr-3">✓</span>
                  <span>Flexible scheduling to accommodate your lifestyle</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple mr-3">✓</span>
                  <span>Regular quality assurance checks and caregiver supervision</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-lavender/50 rounded-xl p-6">
              <h3 className="text-xl font-medium mb-4 text-purple">Our Service Area</h3>
              <p className="mb-4">
                We proudly serve Lynnwood and surrounding areas in Washington State.
              </p>
              <p className="font-medium">
                Call us today at <a href="tel:2063713952" className="text-purple hover:underline">206-371-3952</a> to learn more about our services.
              </p>
            </div>
          </div>
          
          <div>
            <div className="bg-cream p-6 rounded-xl shadow-md">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;