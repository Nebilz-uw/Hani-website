import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

const Layout: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      {isHomePage && <QuickContactStrip />}
      <Footer />
    </div>
  );
};

const QuickContactStrip: React.FC = () => {
  return (
    <section className="bg-lavender py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-medium text-purple">Get in Touch</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <span className="inline-block w-6 mr-2">📞</span> 
                <a href="tel:2063713952" className="hover:text-purple-dark transition-colors">206-371-3952</a>
              </p>
              <p className="flex items-center">
                <span className="inline-block w-6 mr-2">📧</span> 
                <a href="mailto:goldenhourhc@gmail.com" className="hover:text-purple-dark transition-colors">goldenhourhc@gmail.com</a>
              </p>
              <p className="flex items-center">
                <span className="inline-block w-6 mr-2">📍</span> 
                <span>13116 164TH ST SW, Lynnwood, WA 98087</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/contact" 
              className="btn-primary text-center"
            >
              Send Us a Message
            </a>
            <a 
              href="#contact" 
              className="btn-secondary text-center"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layout;