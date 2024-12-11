import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaGitAlt, FaHtml5, FaCss3Alt, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiNestjs, SiTypescript, SiFigma, SiRedux, SiTailwindcss, SiBootstrap, SiC } from 'react-icons/si';

const skills = [
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Nest.js', icon: SiNestjs },
  { name: 'React', icon: FaReact },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Redux', icon: SiRedux },
  { name: 'Git', icon: FaGitAlt },
  { name: 'Figma', icon: SiFigma },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'HTML', icon: FaHtml5 },
  { name: 'CSS', icon: FaCss3Alt },
  { name: 'C', icon: SiC },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Bootstrap', icon: SiBootstrap },
];


const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 200, damping: 20 } },
  };

  return (
    <section id="skills" className="w-full min-h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <p className="text-4xl font-bold inline border-b-4 border-[#00f6ff]">Skills</p>
          <p className="py-4">These are the technologies I've worked with</p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <skill.icon className="text-5xl mb-4 text-[#00f6ff] transition-colors duration-300" />
              <p className="font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
