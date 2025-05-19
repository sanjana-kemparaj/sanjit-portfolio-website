import { Link as ScrollLink } from 'react-scroll'; // Renamed to avoid conflicts
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from "@/lib/utils"; // Import cn for easier class combination

const Navbar = () => {
  const navLinks = [
    { to: 'home', label: 'home.', isPrimary: true },
    { to: 'skills', label: 'skills.' },
    { to: 'projects', label: 'works.' },
    { to: 'contact', label: 'contact.' },
  ];

  const scrollLinkProps = {
    smooth: true ,
    duration: 500
  }
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const closeMenu =() =>{
    setIsMenuOpen(false);
  }

  return (
        <nav data-aos="fade-down" className="relative bg-boxbg p-2 z-50 flex justify-between items-center text-greytext text-lg rounded-4xl">
        <a className="p-2 text-white font-medium">sanjit g shankar.</a>
            <div className="hidden md:flex max-w-4xl justify-end flex flex-1 font-bold">
                {navLinks.map(link => (
                  <ScrollLink 
                  key ={link.to} 
                  to={link.to} 
                  {...scrollLinkProps}
                  className={cn("p-4 cursor-pointer hover:text-white", link.isPrimary ? "text-white" : "text-greytext hover:text-white")}
                >{link.label}</ScrollLink>
                ))}
            </div>
             {/* --- Mobile Menu Button --- */}
            <div className="md:hidden">
                <button 
                  onClick={toggleMenu}
                  aria-label="Toggle Menu"
                  className="p-2 rounded-md text-greytext hover:text-white focus:outline-none z-100"
                >
                <Menu className="h-6 w-6" />
                </button>
            </div>
                {/* --- Mobile Menu Dropdown --- */}
            <div
        className={cn(
          "fixed inset-0  h-screen z-[60] md:hidden bg-boxbg", // Base styles and positioning
          "transition-transform duration-300 ease-in-out origin-top -my-10 -mx-24",
          isMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0",
          !isMenuOpen && "pointer-events-none"
        )}
      >
        <div className="flex flex-col h-screen w-screen px-8 mx-30">
           {navLinks.map(link => (
            
            <ScrollLink
              key={link.to}
              to={link.to}
              {...scrollLinkProps}
              onClick={closeMenu}
              className={cn( // Use cn for cleaner class combination
                "block rounded-md cursor-pointer transition-colors duration-200 font-medium text-[5rem]",
                link.isPrimary ? "text-white" : "text-greytext hover:text-white")}
            >
              {link.label}
              
            </ScrollLink>
            
           ))}
           <X onClick={closeMenu} className="h-12 w-12 border border-greytext absolute top-4 right-24 rounded-md"/>
        </div>
      </div>
        </nav>

  )
}

export default Navbar
