import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const testimonials = [
    {
      name: "María González",
      event: "Casamiento",
      text: "Servicio impecable, comida riquísima y atención excelente. Todos nuestros invitados quedaron encantados.",
      rating: 5,
    },
    {
      name: "Carlos Pérez",
      event: "Cumpleaños de 15",
      text: "El food stand fue un éxito total! Los chicos no pararon de comer y la ambientación quedó hermosa.",
      rating: 5,
    },
    {
      name: "Laura Martínez",
      event: "Evento corporativo",
      text: "Profesionales de principio a fin. Coordinación perfecta y comida de primera calidad.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-display text-primary mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="border-2 border-border hover:border-primary transition-smooth shadow-card hover:shadow-hover h-full bg-card">
                <CardContent className="p-6">
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground/90 mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.event}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 py-16 rounded-2xl"
        >
          <h3 className="text-4xl md:text-6xl font-display text-primary mb-4">
            Comé rico, festejá mejor.
          </h3>
          <p className="text-xl text-foreground/70 italic">
            — El slogan que define nuestra pasión
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
