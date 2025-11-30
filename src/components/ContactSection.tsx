import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ContactSection = () => {
  const { toast } = useToast();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@cinematicstudio.com",
      href: "mailto:hello@cinematicstudio.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (234) 567-890",
      href: "tel:+1234567890"
    },
    {
      icon: MapPin,
      title: "Studio",
      value: "123 Creative Avenue\nLos Angeles, CA 90028",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-24 bg-card relative overflow-hidden" ref={ref}>
      {/* Background Accent */}
      <motion.div 
        className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Let's <span className="text-gradient">Create</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Ready to bring your vision to life? Get in touch and let's start
              crafting your story.
            </p>

            <div className="space-y-8">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    whileHover={{ x: 8 }}
                  >
                    <motion.div 
                      className="w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center flex-shrink-0"
                      whileHover={{
                        rotate: [0, -10, 10, 0],
                        backgroundColor: "hsl(var(--accent) / 0.2)",
                        transition: { duration: 0.4 }
                      }}
                    >
                      <Icon className="w-5 h-5 text-accent" />
                    </motion.div>
                    <div>
                      <div className="font-semibold mb-1">{item.title}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground whitespace-pre-line">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                animate={{
                  scale: focusedField === "name" ? 1.02 : 1,
                }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative">
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="bg-background border-border focus:border-accent transition-all duration-300 h-12"
                  />
                  {focusedField === "name" && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                      layoutId="inputUnderline"
                    />
                  )}
                </div>
              </motion.div>

              <motion.div
                animate={{
                  scale: focusedField === "email" ? 1.02 : 1,
                }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="bg-background border-border focus:border-accent transition-all duration-300 h-12"
                  />
                  {focusedField === "email" && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                      layoutId="inputUnderline"
                    />
                  )}
                </div>
              </motion.div>

              <motion.div
                animate={{
                  scale: focusedField === "message" ? 1.02 : 1,
                }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative">
                  <Textarea
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={6}
                    className="bg-background border-border focus:border-accent resize-none transition-all duration-300"
                  />
                  {focusedField === "message" && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                      layoutId="inputUnderline"
                    />
                  )}
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6 transition-all duration-300 hover:shadow-glow"
                >
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
