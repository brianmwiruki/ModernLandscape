import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Scissors,
  Compass,
  TreePine,
  Droplets,
  Hammer,
  Lightbulb,
  Check,
} from "lucide-react";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const services = [
    {
      icon: <Scissors className="text-2xl text-sage-green" />,
      title: "Lawn Care",
      description:
        "Professional lawn maintenance, fertilization, and seasonal care to keep your grass healthy and vibrant year-round.",
      features: [
        "Weekly mowing & edging",
        "Fertilization programs",
        "Weed control",
        "Aeration & overseeding",
      ],
      bgColor: "bg-sage-green/10",
    },
    {
      icon: <Compass className="text-2xl text-accent-gold" />,
      title: "Garden Design",
      description:
        "Custom garden designs that blend beauty with functionality, creating outdoor spaces perfectly suited to your lifestyle.",
      features: [
        "3D design visualization",
        "Plant selection & placement",
        "Seasonal color planning",
        "Native plant integration",
      ],
      bgColor: "bg-accent-gold/10",
    },
    {
      icon: <TreePine className="text-2xl text-warm-brown" />,
      title: "Tree Trimming",
      description:
        "Expert tree care services including pruning, trimming, and health assessment to maintain beautiful, safe trees.",
      features: [
        "Crown thinning & shaping",
        "Deadwood removal",
        "Tree health assessment",
        "Storm damage cleanup",
      ],
      bgColor: "bg-warm-brown/10",
    },
    {
      icon: <Droplets className="text-2xl text-blue-600" />,
      title: "Irrigation Systems",
      description:
        "Smart irrigation solutions that conserve water while ensuring your landscape receives optimal hydration.",
      features: [
        "Smart controller installation",
        "Drip irrigation systems",
        "Sprinkler system repair",
        "Water usage optimization",
      ],
      bgColor: "bg-blue-100",
    },
    {
      icon: <Hammer className="text-2xl text-warm-brown" />,
      title: "Decking & Patios",
      description:
        "Custom outdoor living spaces including decks, patios, and hardscaping that extend your home outdoors.",
      features: [
        "Custom deck construction",
        "Stone & brick patios",
        "Fire pit installation",
        "Outdoor kitchen setup",
      ],
      bgColor: "bg-sandstone/20",
    },
    {
      icon: <Lightbulb className="text-2xl text-yellow-600" />,
      title: "Landscape Lighting",
      description:
        "Professional outdoor lighting design that enhances safety, security, and the beauty of your landscape.",
      features: [
        "LED pathway lighting",
        "Tree & garden uplighting",
        "Security lighting",
        "Smart lighting controls",
      ],
      bgColor: "bg-yellow-100",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="services" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest-green mb-6">
            Our Premium Services
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            From initial design to ongoing maintenance, we offer comprehensive
            landscaping solutions tailored to your unique vision and lifestyle
            needs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="service-card bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-sage-green/20 hover:shadow-2xl"
            >
              <div className="text-center">
                <div
                  className={`${service.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-forest-green mb-4">
                  {service.title}
                </h3>
                <p className="text-charcoal/70 mb-6">{service.description}</p>
                <ul className="text-sm text-charcoal/60 space-y-2 text-left">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="text-sage-green mr-2 w-4 h-4" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
