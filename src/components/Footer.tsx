import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  { href: "https://www.linkedin.com/in/", icon: <FaLinkedin /> },
  { href: "https://github.com/", icon: <FaGithub /> },
  { href: "xxx@gmail.com", icon: <FaEnvelope /> },
];

const Footer = () => {
  return (
    <footer className='w-screen bg-red-400 py-4 text-black px-10'>
        <div className='contatiner mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row'>
            <p className='font-genral text-[14px]'>
                &copy; Nova 2024. All rights reserved
            </p>
            <div className='flex justify-center gap-4 md:justify-start mr-20'>
                {socialLinks.map((link, index) => (
                <a key={index} href={link.href} target="_blank"
                rel="noopener noreferrer"
                className="text-black transition-colors duration-500 ease-in-out hover:text-white">
                    {link.icon}
                </a>
                ))}            
            </div>
            <a
                href="#privacy-policy"
                className="text-center text-sm font-general hover:underline md:text-right"
                >
                Privacy Policy
            </a>
        </div>
    </footer>
  )
}

export default Footer;
