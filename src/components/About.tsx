import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import foodStandImg from "@/assets/food-stand.jpg";
import eventDecorationImg from "@/assets/event-decoration.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="nosotros" className="py-20 bg-card" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-display text-primary mb-4">
            Sobre Nosotros
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-foreground/90 leading-relaxed">
              Somos un emprendimiento de Santo Tomé especializado en catering, organización
              de eventos y servicio gastronómico. Acompañamos cumpleaños, XV, casamientos,
              recepciones, eventos deportivos y celebraciones familiares.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              También ofrecemos take away, delivery y comida por encargo para fechas
              especiales.
            </p>
            <p className="text-xl font-medium text-primary italic">
              Nuestra misión es simple: crear momentos que se disfrutan con buena comida y
              buena energía.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            <motion.img
              src={foodStandImg}
              alt="Food Stand Vicentinas"
              className="rounded-lg shadow-card w-full h-64 object-cover hover:shadow-hover transition-smooth"
              whileHover={{ scale: 1.05 }}
            />
            <motion.img
              src={eventDecorationImg}
              alt="Decoración de eventos"
              className="rounded-lg shadow-card w-full h-64 object-cover hover:shadow-hover transition-smooth mt-8"
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
