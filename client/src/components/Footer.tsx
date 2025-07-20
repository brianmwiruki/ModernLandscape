import { Leaf } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Leaf className="text-2xl text-sage-green" />
              <span className="text-xl font-serif font-bold">GreenVision</span>
            </div>
            <p className="text-white/70 mb-6">
              Transforming outdoor spaces into natural masterpieces with expert
              design, sustainable practices, and unmatched craftsmanship since
              2010.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-sage-green transition-colors"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-sage-green transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-sage-green transition-colors"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-sage-green transition-colors"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-white/70">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-sage-green transition-colors"
                >
                  Lawn Care
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-sage-green transition-colors"
                >
                  Garden Design
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-sage-green transition-colors"
                >
                  Tree Trimming
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-sage-green transition-colors"
                >
                  Irrigation Systems
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-sage-green transition-colors"
                >
                  Decking & Patios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-sage-green transition-colors"
                >
                  Landscape Lighting
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-white/70">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-sage-green transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="hover:text-sage-green transition-colors"
                >
                  Our Projects
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-sage-green transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sage-green transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="hover:text-sage-green transition-colors"
                >
                  Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-sage-green transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4 text-white/70">
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt text-sage-green mt-1 mr-3"></i>
                <div>
                  <p>123 Garden Lane</p>
                  <p>Green Valley, CA 90210</p>
                </div>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone text-sage-green mr-3"></i>
                <p>(555) 123-LAWN (5296)</p>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope text-sage-green mr-3"></i>
                <p>hello@greenvisionlandscaping.com</p>
              </div>
              <div className="flex items-start">
                <i className="fas fa-clock text-sage-green mt-1 mr-3"></i>
                <div>
                  <p>Mon-Fri: 7AM-6PM</p>
                  <p>Sat: 8AM-4PM, Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © 2024 GreenVision Landscaping. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-white/60">
            <a href="#" className="hover:text-sage-green transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-sage-green transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-sage-green transition-colors">
              License
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
