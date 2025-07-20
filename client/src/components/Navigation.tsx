import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Leaf, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Leaf className="text-2xl text-forest-green" />
          <span className="text-xl font-serif font-bold text-forest-green">
            GreenVision
          </span>
        </div>

        <ul className="hidden md:flex space-x-8">
          {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-sage-green transition-colors duration-300"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        <Button
          onClick={() => scrollToSection("contact")}
          className="bg-sage-green text-white hover:bg-forest-green transition-colors hidden md:inline-flex"
        >
          Get Quote
        </Button>

        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="text-xl text-forest-green" />
          ) : (
            <Menu className="text-xl text-forest-green" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t border-gray-200"
        >
          <div className="px-4 py-4 space-y-4">
            {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left hover:text-sage-green transition-colors"
              >
                {item}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-sage-green text-white hover:bg-forest-green"
            >
              Get Quote
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
