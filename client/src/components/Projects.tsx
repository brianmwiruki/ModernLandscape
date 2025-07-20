import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Images } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Modern Backyard Oasis",
      description:
        "Complete landscape redesign featuring custom water feature, natural stone pathways, and drought-resistant plantings.",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "backyards",
      tags: ["Water Feature", "Eco-Friendly"],
    },
    {
      id: 2,
      title: "Premium Lawn Care",
      description:
        "Year-round lawn maintenance program resulting in a lush, healthy lawn with perfect edges and seasonal color.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "lawns",
      tags: ["Lawn Care", "Maintenance"],
    },
    {
      id: 3,
      title: "Tranquil Water Garden",
      description:
        "Custom pond design with natural waterfall feature, aquatic plants, and integrated lighting system.",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "water-features",
      tags: ["Water Feature", "Custom Design"],
    },
    {
      id: 4,
      title: "Outdoor Entertainment Hub",
      description:
        "Multi-level deck with integrated fire pit, outdoor kitchen prep area, and professional landscape lighting.",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "backyards",
      tags: ["Hardscaping", "Lighting"],
    },
    {
      id: 5,
      title: "Front Yard Transformation",
      description:
        "Complete front landscape redesign with curved garden beds, native plantings, and preserved mature trees.",
      image:
        "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "lawns",
      tags: ["Native Plants", "Tree Care"],
    },
    {
      id: 6,
      title: "Contemporary Water Feature",
      description:
        "Sleek modern fountain design with integrated LED lighting and minimalist garden surrounding.",
      image:
        "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "water-features",
      tags: ["Modern Design", "LED Lighting"],
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "backyards", label: "Backyards" },
    { id: "lawns", label: "Lawns" },
    { id: "water-features", label: "Water Features" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

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
    <section id="projects" className="py-20 bg-soft-cream" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest-green mb-6">
            Our Featured Projects
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto mb-8">
            Explore our portfolio of stunning landscape transformations that
            showcase our commitment to excellence and innovation.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-forest-green to-sage-green text-white"
                    : "bg-white text-charcoal hover:bg-sage-green hover:text-white"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="project-card group relative overflow-hidden rounded-xl shadow-lg bg-white"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-serif font-bold mb-2">
                  {project.title}
                </h3>
                <p className="text-sm opacity-90 mb-3">{project.description}</p>
                <div className="flex items-center">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`text-xs px-2 py-1 rounded-full mr-2 ${
                        index === 0
                          ? "bg-accent-gold/20 text-accent-gold"
                          : "bg-sage-green/20 text-sage-green"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button className="bg-forest-green text-white px-8 py-4 text-lg font-semibold hover:bg-sage-green transition-colors duration-300">
            <Images className="mr-2" />
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
