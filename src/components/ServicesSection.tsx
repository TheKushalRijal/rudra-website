import { Film, Camera, Video, Sparkles, Palette, Zap } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: Film,
    title: "Commercial Production",
    description: "High-impact brand films and commercial content that captivates audiences and drives results.",
  },
  {
    icon: Video,
    title: "Brand Films",
    description: "Cinematic storytelling that brings your brand's vision and values to life with emotional depth.",
  },
  {
    icon: Camera,
    title: "Event Videography",
    description: "Professional coverage of corporate events, conferences, and special moments with cinematic quality.",
  },
  {
    icon: Sparkles,
    title: "Creative Photography",
    description: "Striking visual imagery for campaigns, portraits, and product photography with artistic direction.",
  },
  {
    icon: Palette,
    title: "Color Grading",
    description: "Expert color correction and grading to achieve the perfect cinematic look for your project.",
  },
  {
    icon: Zap,
    title: "Post-Production",
    description: "Complete editing, VFX, and sound design to polish your content to perfection.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 bg-card relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(90deg, hsl(var(--accent)) 0px, transparent 1px, transparent 40px), 
                           repeating-linear-gradient(0deg, hsl(var(--accent)) 0px, transparent 1px, transparent 40px)`,
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <motion.div 
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
            <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Comprehensive video production and creative services tailored to bring
            your vision to life with cinematic excellence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className="group p-8 bg-background/50 backdrop-blur-sm border border-border rounded-sm hover:border-accent transition-all duration-500 hover:shadow-glow"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <motion.div 
                  className="w-14 h-14 rounded-sm bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors"
                  whileHover={{
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  <Icon className="w-7 h-7 text-accent" />
                </motion.div>
                <h3 className="text-xl font-display font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
