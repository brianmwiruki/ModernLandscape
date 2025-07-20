import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Leaf, Users } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const companyValues = [
    {
      icon: <Leaf className="text-4xl text-sage-green mb-4" />,
      title: "Sustainability",
      subtitle: "Eco-friendly practices",
      description:
        "We use native plants, organic materials, and water-efficient irrigation systems to create beautiful landscapes that protect our environment.",
    },
    {
      icon: <Award className="text-4xl text-accent-gold mb-4" />,
      title: "Creativity",
      subtitle: "Innovative designs",
      description:
        "Every project is a canvas for artistic expression, combining natural beauty with functional design to create unique outdoor experiences.",
    },
    {
      icon: <Users className="text-4xl text-warm-brown mb-4" />,
      title: "Excellence",
      subtitle: "Quality craftsmanship",
      description:
        "We're committed to delivering exceptional results through meticulous attention to detail and superior workmanship in every project.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-20 bg-soft-cream" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest-green mb-6">
              Creating Beautiful Landscapes Since 2010
            </h2>
            <p className="text-lg text-charcoal/80 mb-8">
              At GreenVision, we believe that every outdoor space has the
              potential to become something extraordinary. Our team of certified
              landscape architects and horticultural experts combines artistic
              vision with sustainable practices to create stunning environments
              that enhance your lifestyle and increase your property value.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                <Award className="text-accent-gold mr-2 w-4 h-4" />
                <span className="text-sm font-medium">Award Winning</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                <Leaf className="text-sage-green mr-2 w-4 h-4" />
                <span className="text-sm font-medium">Eco-Friendly</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                <Users className="text-warm-brown mr-2 w-4 h-4" />
                <span className="text-sm font-medium">Expert Team</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
              alt="Professional landscaping team working on garden installation"
              className="rounded-xl shadow-lg w-full h-auto"
            />
            <img
              src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
              alt="Beautifully designed garden with stone pathways and colorful flowers"
              className="rounded-xl shadow-lg w-full h-auto mt-8"
            />
            <img
              src="https://images.unsplash.com/photo-1574263867128-a3d5c1b1deae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
              alt="Professional landscaper trimming bushes and maintaining garden"
              className="rounded-xl shadow-lg w-full h-auto -mt-4"
            />
            <img
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
              alt="Hands planting flowers in rich garden soil with gardening tools"
              className="rounded-xl shadow-lg w-full h-auto mt-4"
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 mt-16"
        >
          {companyValues.map((value, index) => (
            <motion.div
              key={value.title}
              variants={itemVariants}
              className="flip-card h-64"
            >
              <div className="flip-card-inner relative w-full h-full">
                <div className="flip-card-front absolute inset-0 bg-white rounded-xl shadow-lg p-8 flex flex-col items-center justify-center">
                  {value.icon}
                  <h3 className="text-xl font-serif font-bold text-forest-green">
                    {value.title}
                  </h3>
                  <p className="text-sm text-charcoal/60 text-center mt-2">
                    {value.subtitle}
                  </p>
                </div>
                <div
                  className={`flip-card-back absolute inset-0 rounded-xl shadow-lg p-8 flex items-center justify-center ${
                    index === 0
                      ? "bg-forest-green"
                      : index === 1
                      ? "bg-accent-gold"
                      : "bg-warm-brown"
                  }`}
                >
                  <p
                    className={`text-center ${
                      index === 1 ? "text-charcoal" : "text-white"
                    }`}
                  >
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
