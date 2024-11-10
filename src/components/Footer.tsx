// components/Footer.tsx
import Link from 'next/link';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-8">
      <div className="max-w-md mx-auto flex flex-col items-center">
        <div className="flex gap-6 mb-4">
          <Link href="/" className="text-gray-400 hover:text-yellow-500 transition-colors">Home</Link>
          <Link href="#projects" className="text-gray-400 hover:text-yellow-500 transition-colors">Projects</Link>
          <Link href="#skills" className="text-gray-400 hover:text-yellow-500 transition-colors">Skills</Link>
          <Link href="#contact" className="text-gray-400 hover:text-yellow-500 transition-colors">Contact</Link>
        </div>
        
        <div className="flex gap-4 mb-4">
          <Link href="https://github.com/hamza01syed" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 transition-colors">
            <FaGithub size={24} />
          </Link>
          <Link href="https://linkedin.com/in/syed-humza-najam-833762268" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 transition-colors">
            <FaLinkedin size={24} />
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=100006989717151" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 transition-colors">
            <FaFacebook size={24} />
          </Link>
        </div>
        
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Syed Humza. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
