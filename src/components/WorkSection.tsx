import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  {
    id: 1,
    title: "Indie Film: Urban Essence",
    category: "Commercial",
    aspectRatio: "16:9",
    image: project1,
  },
  {
    id: 2,
    title: "Fashion Photography: Style Unveiled",
    category: "Fashion",
    aspectRatio: "4:5",
    image: project2,
  },
  {
    id: 3,
    title: "Tech Product Launch",
    category: "Commercial",
    aspectRatio: "16:9",
    image: project3,
  },
  {
    id: 4,
    title: "Documentary: City Stories",
    category: "Documentary",
    aspectRatio: "21:9",
    image: project4,
  },
  {
    id: 5,
    title: "Corporate Event Coverage",
    category: "Event",
    aspectRatio: "16:9",
    image: project1,
  },
  {
    id: 6,
    title: "Music Video: Rising",
    category: "Music",
    aspectRatio: "16:9",
    image: project3,
  },
];

const WorkSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
            Our <span className="text-gradient">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A showcase of cinematic storytelling, brand narratives, and creative vision
            brought to life through film.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative overflow-hidden bg-card rounded-sm cursor-pointer"
              style={{
                aspectRatio: project.aspectRatio === "21:9" ? "2.39" : project.aspectRatio === "4:5" ? "0.8" : "16/9",
              }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Project Image */}
              <motion.div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
                animate={{
                  scale: hoveredId === project.id ? 1.1 : 1,
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              
              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: hoveredId === project.id ? 1 : 0.7,
                }}
                transition={{ duration: 0.4 }}
              />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <motion.span 
                  className="text-xs text-accent font-semibold tracking-wider uppercase mb-2 block"
                  animate={{
                    y: hoveredId === project.id ? 0 : 10,
                    opacity: hoveredId === project.id ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {project.category}
                </motion.span>
                <motion.h3 
                  className="text-xl font-display font-semibold mb-2"
                  animate={{
                    y: hoveredId === project.id ? 0 : 10,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {project.title}
                </motion.h3>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: hoveredId === project.id ? 1 : 0,
                    y: hoveredId === project.id ? 0 : 10,
                  }}
                  transition={{ duration: 0.3 }}
                  className="text-sm text-muted-foreground"
                >
                  View Project →
                </motion.div>
              </div>

              {/* Film frame overlay */}
              <div className="absolute inset-0 border border-accent/20 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
