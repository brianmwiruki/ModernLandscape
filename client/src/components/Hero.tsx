import { motion } from "framer-motion";
import { Sprout, Play, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1200')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight"
        >
          Transforming Outdoor Spaces into{" "}
          <span className="text-accent-gold">Natural Masterpieces</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90"
        >
          From concept to creation, we bring your landscape dreams to life with
          expert design, sustainable practices, and unmatched craftsmanship.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-accent-gold text-charcoal px-8 py-4 text-lg font-semibold glow-button animate-float hover:bg-accent-gold/90"
          >
            <Sprout className="mr-2" />
            Get a Free Quote
          </Button>

          <Button
            onClick={() => scrollToSection("projects")}
            variant="outline"
            className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-charcoal transition-all duration-300"
          >
            <Play className="mr-2" />
            View Our Work
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={() => scrollToSection("about")}
          className="animate-bounce"
        >
          <ChevronDown className="text-white text-2xl" />
        </button>
      </motion.div>
    </section>
  );
}
