import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram } from 'lucide-react';
import { SocialLink } from '../../types';

const socialLinks: SocialLink[] = [
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/hani553h/',
    label: 'hani553h',
    icon: 'instagram'
  },
  {
    platform: 'Facebook',
    url: 'https://www.facebook.com/hani.hani', 
    label: 'Hani Hani',
    icon: 'facebook'
  }
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gold-100 py-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-black">Golden Hour</h3>
            <p className="max-w-xs text-black">
              Supporting your independence, safety, and peace of mind — from the comfort of home.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-black">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-black hover:text-gold-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="/#about" className="text-black hover:text-gold-600 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/#services" className="text-black hover:text-gold-600 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-black hover:text-gold-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-black">Connect</h3>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gold-600 transition-colors"
                  aria-label={social.platform}
                >
                  {social.icon === 'instagram' ? (
                    <Instagram size={24} />
                  ) : (
                    <Facebook size={24} />
                  )}
                </a>
              ))}
            </div>
            <address className="not-italic text-black">
              <p>13116 164TH ST SW</p>
              <p>Lynnwood, WA 98087</p>
              <p className="mt-2">
                <a href="mailto:goldenhourhc@gmail.com" className="hover:text-gold-600 transition-colors">
                  goldenhourhc@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:2063713952" className="hover:text-gold-600 transition-colors">
                  206-371-3952
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gold-200 mt-8 pt-6 text-center md:text-left">
          <p className="text-black">&copy; {currentYear} Golden Hour Home Care Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;