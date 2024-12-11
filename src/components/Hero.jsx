import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4">
        <div className="max-w-[1000px] mx-auto flex flex-col justify-center h-full">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-[#00f6ff]"
          >
            Hi, my name is
          </motion.p>
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-7xl font-bold text-white"
          >
            Salim
          </motion.h1>
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-7xl font-bold text-[#8892b0]"
          >
            MERN Stack Developer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-[#8892b0] py-4 max-w-[700px]"
          >
            I'm a full-stack developer specializing in building exceptional digital experiences.
            Currently, I'm focused on building responsive full-stack web applications.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#00f6ff] hover:border-[#00f6ff] hover:text-[#0a192f] transition-all duration-300">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                →
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;