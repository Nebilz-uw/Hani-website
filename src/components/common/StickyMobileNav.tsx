import React from 'react';
import { Phone, Mail } from 'lucide-react';

const StickyMobileNav: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:hidden z-40">
      <div className="grid grid-cols-2 divide-x divide-gray-200">
        <a 
          href="tel:2063713952"
          className="flex items-center justify-center py-3 text-purple hover:bg-lavender transition-colors"
        >
          <Phone size={20} className="mr-2" />
          <span className="font-medium">Call Us</span>
        </a>
        <a 
          href="#contact"
          className="flex items-center justify-center py-3 text-purple hover:bg-lavender transition-colors"
        >
          <Mail size={20} className="mr-2" />
          <span className="font-medium">Contact</span>
        </a>
      </div>
    </div>
  );
};

export default StickyMobileNav;