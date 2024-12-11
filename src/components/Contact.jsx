import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="contact" className="w-full min-h-screen bg-[#0a192f] flex justify-center items-center p-4">
      <motion.form
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#00f6ff] text-gray-300">Contact</p>
          <p className="text-gray-300 py-4">Submit the form below or shoot me an email</p>
        </div>
        <input
          className="bg-[#1a2e4c] p-2 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00f6ff]"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#1a2e4c] text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00f6ff]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#1a2e4c] p-2 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00f6ff]"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-white border-2 hover:bg-[#00f6ff] hover:border-[#00f6ff] hover:text-[#0a192f] px-4 py-3 my-8 mx-auto flex items-center transition-all duration-300"
        >
          Let's Collaborate
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;