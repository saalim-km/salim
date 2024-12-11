import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaFigma, FaSketch, FaArrowRight } from 'react-icons/fa';
import { SiAdobexd, SiAdobeillustrator } from 'react-icons/si';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    console.log('About component mounted');
  }, []);

  useEffect(() => {
    console.log('inView changed:', inView);
  }, [inView]);

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  if (!ref) {
    console.error('useInView ref is undefined');
    return null;
  }

  return (
    <section id="about" className="w-full min-h-screen bg-[#0a192f] text-gray-300 py-16">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-12">
          <motion.div
            ref={ref}
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="sm:text-right pb-8 pl-4"
          >
            <p className="text-4xl font-bold inline border-b-4 border-[#00f6ff]">
              About
            </p>
          </motion.div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 mb-12">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="sm:text-right text-4xl font-bold"
          >
            <p>Hi. I'm Salim, nice to meet you. Please take a look around.</p>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p>
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?
            </p>
          </motion.div>
        </div>
        
        {/* UI/UX Logos */}
        <div className="flex justify-center items-center space-x-8 mb-12">
          {[FaFigma, FaSketch, SiAdobexd, SiAdobeillustrator].map((Icon, index) => (
            <motion.div
              key={index}
              variants={logoVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Icon className="text-4xl text-[#00f6ff]" />
            </motion.div>
          ))}
        </div>

        {/* GitHub Section */}
        <motion.div
          className="relative w-48 h-16 bg-[#00f6ff] text-[#0a192f] rounded-full font-bold flex items-center justify-center cursor-pointer overflow-hidden group"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <span className="mr-2 group-hover:mr-4 transition-all duration-300">GitHub</span>
          <FaArrowRight className="absolute right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;

