import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Star, MessageCircle, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Homeowner, Westfield",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      quote:
        "GreenVision transformed our backyard from a bare patch of dirt into a stunning garden paradise. Their attention to detail and creative vision exceeded all our expectations. We now have the outdoor oasis we always dreamed of!",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Property Manager",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      quote:
        "Professional, reliable, and incredibly skilled. The team at GreenVision installed our irrigation system and it's been working flawlessly for two years. Our water bill has actually decreased while our garden has never looked better!",
      rating: 5,
    },
    {
      id: 3,
      name: "Lisa & David Rodriguez",
      title: "Homeowners, Downtown",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      quote:
        "From the initial consultation to project completion, GreenVision was outstanding. They listened to our ideas, provided expert recommendations, and delivered a landscape design that perfectly matches our lifestyle. Highly recommended!",
      rating: 5,
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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="testimonials" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-forest-green mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients
            have to say about their experience working with GreenVision
            Landscaping.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="testimonial-card bg-soft-cream p-8 rounded-xl shadow-lg relative hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="flex text-accent-gold text-xl">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>

              <blockquote className="text-charcoal/80 italic mb-6 text-lg">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-forest-green">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-charcoal/60">{testimonial.title}</p>
                </div>
              </div>

              <div className="absolute top-4 right-4 text-6xl text-accent-gold/20">
                <Quote className="w-8 h-8" />
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
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="flex items-center">
              <div className="flex text-accent-gold text-2xl mr-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current" />
                ))}
              </div>
              <span className="text-xl font-semibold text-forest-green">
                5.0 Stars
              </span>
            </div>
            <span className="text-charcoal/60">•</span>
            <span className="text-charcoal/70">Based on 127+ reviews</span>
          </div>

          <Button className="bg-accent-gold text-charcoal px-8 py-4 text-lg font-semibold hover:bg-accent-gold/80 transition-colors duration-300">
            <MessageCircle className="mr-2" />
            Read All Reviews
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
