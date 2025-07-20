import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Phone, Mail, Clock, Send, Shield, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.service) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Quote Request Sent!",
      description:
        "Thank you for your inquiry! We'll contact you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const services = [
    { value: "lawn-care", label: "Lawn Care" },
    { value: "garden-design", label: "Garden Design" },
    { value: "tree-trimming", label: "Tree Trimming" },
    { value: "irrigation", label: "Irrigation" },
    { value: "decking", label: "Decking & Patios" },
    { value: "lighting", label: "Landscape Lighting" },
    { value: "full-design", label: "Complete Landscape Design" },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-forest-green text-white relative overflow-hidden"
      ref={ref}
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1200')",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Ready to Transform Your Outdoor Space?
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Get started with a free consultation and personalized quote. Our
              landscape experts are ready to bring your vision to life with
              innovative design and professional craftsmanship.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-sage-green/20 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Phone className="text-accent-gold w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Call Us Today</h4>
                  <p className="opacity-80">(555) 123-LAWN (5296)</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-sage-green/20 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Mail className="text-accent-gold w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Email Us</h4>
                  <p className="opacity-80">hello@greenvisionlandscaping.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-sage-green/20 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Clock className="text-accent-gold w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Business Hours</h4>
                  <p className="opacity-80">Mon-Fri: 7AM-6PM | Sat: 8AM-4PM</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-serif font-bold mb-6">
              Get Your Free Quote
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-accent-gold">Full Name</label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="bg-white/10 border-white/30 text-white placeholder-white/60 focus:border-accent-gold"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-accent-gold">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-white/10 border-white/30 text-white placeholder-white/60 focus:border-accent-gold"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-accent-gold">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="bg-white/10 border-white/30 text-white placeholder-white/60 focus:border-accent-gold"
                    placeholder="Your Phone"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-accent-gold">
                    Service Needed
                  </label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => handleInputChange("service", value)}
                  >
                    <SelectTrigger className="bg-white/10 border-white/30 text-white focus:border-accent-gold">
                      <SelectValue placeholder="Select Service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.value} value={service.value}>
                          {service.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-accent-gold">
                  Project Details
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="bg-white/10 border-white/30 text-white placeholder-white/60 focus:border-accent-gold resize-none"
                  placeholder="Tell us about your project..."
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-accent-gold text-charcoal py-4 text-lg font-semibold glow-button hover:bg-accent-gold/90"
              >
                <Send className="mr-2" />
                Send My Free Quote Request
              </Button>
            </form>

            <div className="text-center mt-6">
              <p className="text-sm opacity-70">
                <Shield className="inline mr-1 w-4 h-4" />
                Your information is secure and will never be shared
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-serif font-bold text-center mb-8">
            Visit Our Location
          </h3>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
            <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center">
              <div className="text-center text-charcoal">
                <MapPin className="text-3xl text-forest-green mb-2 mx-auto" />
                <p className="text-lg font-semibold">GreenVision Landscaping</p>
                <p>123 Garden Lane, Green Valley, CA 90210</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
