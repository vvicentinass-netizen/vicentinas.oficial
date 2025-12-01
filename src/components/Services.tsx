import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  PartyPopper,
  Utensils,
  Package,
  Sparkles,
  Users,
  Calendar,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: PartyPopper,
      title: "Catering & Organización de Eventos",
      description:
        "Para cumpleaños, XV, casamientos, recepciones y eventos sociales. Armamos el menú, el estilo, la ambientación y la coordinación completa.",
    },
    {
      icon: Utensils,
      title: "Food Stand para tus Fiestas",
      description:
        "Hamburguesas, panchos, papas, tacos, pizzas y más. Ideal para fiestas juveniles y eventos deportivos. Incluye stand de glitter como opcional.",
    },
    {
      icon: Package,
      title: "Take Away & Delivery",
      description:
        "La comida de Vicentinas en tu casa. Menú diario, combos familiares, boxes especiales y opciones para jóvenes que buscan algo rico y rápido.",
    },
    {
      icon: Sparkles,
      title: "Decoración & Alquiler",
      description:
        "Gazebo, vajilla, mobiliario, mantelería, sets temáticos y ambientaciones personalizadas.",
    },
    {
      icon: Users,
      title: "Servicio de mozos & atención de barra",
      description:
        "Personal profesional para recibir, servir y atender como corresponde.",
    },
    {
      icon: Calendar,
      title: "Fechas especiales por encargo",
      description:
        "Menús para Navidad, Año Nuevo, Pascuas o celebraciones familiares. Reservas anticipadas.",
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="servicios" className="py-20 bg-background pattern-bg" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-display text-primary mb-4">
            Nuestros Servicios
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 border-border hover:border-primary hover:shadow-hover transition-all duration-300 bg-card group cursor-pointer">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <CardTitle className="text-2xl font-display text-foreground">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-foreground/80 leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <Button
                      variant="link"
                      onClick={scrollToContact}
                      className="mt-4 text-primary hover:text-primary/80 p-0 h-auto font-semibold"
                    >
                      Ver más →
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
