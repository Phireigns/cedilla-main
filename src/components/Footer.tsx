import { FiFacebook, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="relative bg-[#76162a] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#ffdbdb]/60 text-sm">
            © {new Date().getFullYear()} Cedilla Restaurant. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/cedilla.hk/" target="_blank"
              className="text-[#ee8080] hover:text-[#ffdbdb] transition-colors duration-300"
              aria-label="Facebook"
            >
              <FiFacebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/cedilla.hk/" target="_blank"
              className="text-[#ee8080] hover:text-[#ffdbdb] transition-colors duration-300"
              aria-label="Instagram"
            >
              <FiInstagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer; 