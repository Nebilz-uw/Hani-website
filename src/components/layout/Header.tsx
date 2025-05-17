import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../../types';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/#about' },
  { label: 'Services', path: '/#services' },
  { label: 'Contact', path: '/contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className={`text-2xl font-bold ${scrolled ? 'text-black' : 'text-black'}`}>
              Golden Hour
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                item={item}
                scrolled={scrolled}
                onClick={closeMenu}
              />
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden ${scrolled ? 'text-black' : 'text-black'}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md">
          <nav className="flex flex-col p-4">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                item={item}
                mobile
                scrolled={scrolled}
                onClick={closeMenu}
              />
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  item: NavItem;
  mobile?: boolean;
  scrolled?: boolean;
  onClick: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ 
  item, 
  mobile = false,
  scrolled = false,
  onClick
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = location.pathname === item.path || 
    (location.pathname === '/' && item.path.startsWith('/#'));

  const className = mobile
    ? `block py-3 ${isActive ? 'text-black font-medium' : 'text-black hover:text-gold-600'}`
    : `font-medium ${
        scrolled 
          ? `${isActive ? 'text-black' : 'text-black hover:text-gold-600'}`
          : `${isActive ? 'text-black' : 'text-black hover:text-gold-200'}`
      } transition-colors`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick();

    if (location.pathname !== '/' && item.path.startsWith('/#')) {
      navigate('/');
      setTimeout(() => {
        const targetId = item.path.substring(2);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else if (item.path.startsWith('/#')) {
      const targetId = item.path.substring(2);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(item.path);
    }
  };

  return (
    <a href={item.path} className={className} onClick={handleClick}>
      {item.label}
    </a>
  );
};

export default Header;