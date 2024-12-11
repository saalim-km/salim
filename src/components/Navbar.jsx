import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f]/90 text-gray-300 z-50"
    >
      <div>
        <h1 className="text-4xl font-bold text-[#00f6ff]">S.</h1>
      </div>

      {/* menu */}
      <ul className="hidden md:flex gap-x-8">
        {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
          <li key={item}>
            <Link
              to={item}
              smooth={true}
              duration={500}
              className="hover:text-[#00f6ff] cursor-pointer capitalize"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <motion.ul
        initial={{ x: '100%' }}
        animate={{ x: nav ? 0 : '100%' }}
        transition={{ duration: 0.5 }}
        className={`${
          nav ? 'flex' : 'hidden'
        } absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex-col justify-center items-center`}
      >
        {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
          <li key={item} className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to={item}
              smooth={true}
              duration={500}
              className="hover:text-[#00f6ff] cursor-pointer capitalize"
            >
              {item}
            </Link>
          </li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default Navbar;