import { Award, Users, Target } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import aboutPhoto from "@/assets/about-photo.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              About <span className="text-gradient">The Studio</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We are filmmakers, photographers, and storytellers driven by emotion and visual craft.
              Our team combines years of experience in cinematography, direction, and post-production
              to deliver content that doesn't just look beautiful—it resonates.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From concept to final cut, we approach every project with the same dedication to
              craft and creativity. We believe in the power of moving images to inspire, engage,
              and transform how audiences connect with brands.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {[
                { value: "5+", label: "Projects" },
                { value: "3+", label: "Clients" },
                { value: "1+", label: "Years" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                >
                  <div className="text-3xl font-display font-bold text-accent mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Image & Values */}
          <div className="space-y-6">
            {/* Studio Photo */}
            <motion.div
              className="relative overflow-hidden rounded-sm aspect-video mb-8"
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src={aboutPhoto} 
                alt="Studio behind the scenes" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border border-accent/20 pointer-events-none" />
            </motion.div>

            {/* Values */}
            {[
              {
                icon: Target,
                title: "Creative Vision",
                description: "Every frame is crafted with intention. We push creative boundaries while staying true to your brand's story and goals."
              },
              {
                icon: Award,
                title: "Technical Excellence",
                description: "State-of-the-art equipment and proven workflows ensure your content meets the highest production standards."
              },
              {
                icon: Users,
                title: "Collaborative Process",
                description: "Your vision, our expertise. We work closely with you at every stage to bring your story to life authentically."
              }
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  className="p-6 bg-card border border-border rounded-sm hover:border-accent transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 8 }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className="w-10 h-10 rounded-sm bg-accent/10 flex items-center justify-center flex-shrink-0"
                      whileHover={{
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.4 }
                      }}
                    >
                      <Icon className="w-5 h-5 text-accent" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-display font-semibold mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
