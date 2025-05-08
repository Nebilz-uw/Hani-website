import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-purple">About Golden Hour</h2>
          <p className="mb-4 text-lg text-gray-700">
            At Golden Hour, we believe home is where healing happens best. Our certified caregivers deliver thoughtful, one-on-one support to help seniors maintain independence while feeling truly cared for.
          </p>
          <p className="mb-6 text-lg text-gray-700">
            Whether it's help with daily routines, a kind conversation, or dependable household support — we're here to bring dignity, comfort, and joy to every day.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <div className="bg-lavender/50 p-4 rounded-lg">
              <h3 className="font-medium text-lg text-purple mb-2">Certified Caregivers</h3>
              <p>Trained, experienced, and compassionate staff</p>
            </div>
            <div className="bg-lavender/50 p-4 rounded-lg">
              <h3 className="font-medium text-lg text-purple mb-2">Personalized Care</h3>
              <p>Customized plans to match individual needs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;