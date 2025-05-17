import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const { scrollY } = useScroll();
  const [isClient, setIsClient] = useState(false);
  
  const backgroundY = useTransform(scrollY, [0, 500], ['0%', '30%']);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const overlayHeight = useTransform(scrollY, [0, 300], ['0%', '75%']);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("https://images.pexels.com/photos/7551662/pexels-photo-7551662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          y: backgroundY
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gold-500/90 to-gold-600/80"></div>
      </motion.div>

      <div className="relative z-10">
        <div className="container-custom min-h-screen flex items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
            style={{ opacity }}
            className="max-w-4xl lg:max-w-6xl xl:max-w-7xl py-32 lg:py-0"
          >
            <motion.h1 
              variants={titleVariants}
              className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-semibold text-black mb-8"
            >
              Compassionate Home Care for Your Loved Ones
            </motion.h1>

            <motion.p 
              variants={contentVariants}
              className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-black mb-12"
            >
              Supporting your independence, safety, and peace of mind — from the comfort of home.
            </motion.p>

            <motion.div 
              variants={contentVariants}
              className="flex flex-col sm:flex-row gap-6"
            >
              <a 
                href="#contact" 
                className="btn bg-white text-gold-800 hover:bg-gold-100 focus:ring-white text-lg lg:text-xl xl:text-2xl px-8 py-4 lg:px-12 lg:py-6"
              >
                📅 Book a Free Consultation
              </a>
              <a 
                href="#services" 
                className="btn bg-transparent border-2 border-black text-black hover:bg-white/20 focus:ring-white text-lg lg:text-xl xl:text-2xl px-8 py-4 lg:px-12 lg:py-6"
              >
                Our Services
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ opacity }}
        >
          <ChevronDown className="text-black w-8 h-8 lg:w-12 lg:h-12" />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-lg"
        style={{ height: overlayHeight }}
      >
        <div className="container-custom py-16 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16 lg:mb-24"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-8 text-black">Our Story: Why Golden Hour Matters</h2>
              <p className="text-xl lg:text-2xl xl:text-3xl text-gray-700 mb-16">
                Golden Hour was founded with a simple mission: to provide the kind of care we'd want for our own family members. Every day, we work to make a difference in the lives of seniors who wish to maintain their independence and dignity at home.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16 lg:mb-24">
                <motion.div 
                  className="stat-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <h3 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-black mb-4">5,000+</h3>
                  <p className="text-lg lg:text-xl xl:text-2xl">Care Hours Provided</p>
                </motion.div>
                <motion.div 
                  className="stat-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <h3 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-black mb-4">200+</h3>
                  <p className="text-lg lg:text-xl xl:text-2xl">Families Served</p>
                </motion.div>
                <motion.div 
                  className="stat-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <h3 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-black mb-4">99%</h3>
                  <p className="text-lg lg:text-xl xl:text-2xl">Client Satisfaction</p>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
                <motion.div 
                  className="pillar-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <div className="text-4xl lg:text-5xl xl:text-6xl mb-6">🤝</div>
                  <h3 className="text-xl lg:text-2xl xl:text-3xl font-medium text-black mb-4">Personalized Care</h3>
                  <p className="text-lg lg:text-xl">Tailored support for each individual's unique needs</p>
                </motion.div>
                <motion.div 
                  className="pillar-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <div className="text-4xl lg:text-5xl xl:text-6xl mb-6">💫</div>
                  <h3 className="text-xl lg:text-2xl xl:text-3xl font-medium text-black mb-4">Professional Excellence</h3>
                  <p className="text-lg lg:text-xl">Certified caregivers with ongoing training</p>
                </motion.div>
                <motion.div 
                  className="pillar-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <div className="text-4xl lg:text-5xl xl:text-6xl mb-6">❤️</div>
                  <h3 className="text-xl lg:text-2xl xl:text-3xl font-medium text-black mb-4">Compassionate Support</h3>
                  <p className="text-lg lg:text-xl">Care delivered with dignity and respect</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;