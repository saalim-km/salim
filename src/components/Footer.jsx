import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-[#0a192f] text-gray-300 py-8">
      <div className="max-w-[1000px] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-2xl font-bold text-[#00f6ff]">Salim</p>
            <p className="text-sm">MERN Stack Developer</p>
          </div>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-[#00f6ff] transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="#"
              className="hover:text-[#00f6ff] transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="#"
              className="hover:text-[#00f6ff] transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm">© 2024 Salim. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;