import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack MERN application with authentication, payment integration, and admin dashboard",
    tech: ["MongoDB", "Express", "React", "Node.js", "Redux", "Stripe"],
    image: "https://via.placeholder.com/400x300"
  },
  {
    title: "Real-time Chat App",
    description: "Chat application with real-time messaging, user presence, and file sharing",
    tech: ["Socket.io", "React", "Node.js", "Express", "MongoDB"],
    image: "https://via.placeholder.com/400x300"
  },
  {
    title: "Task Management System",
    description: "Collaborative task management platform with team features",
    tech: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    image: "https://via.placeholder.com/400x300"
  }
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="projects" className="w-full min-h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <motion.div
          ref={ref}
          initial={{ y: 100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="pb-8"
        >
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#00f6ff]">
            Projects
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial={{ y: 100, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-center items-center mx-auto content-div hover:scale-105 transition-all duration-500 glassmorphism"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-sm bg-[#00f6ff]/10 text-[#00f6ff] rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;