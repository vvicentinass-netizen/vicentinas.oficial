import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import eventosImg from "@/assets/eventos-charcuterie.jpg";
import platosImg from "@/assets/platos-tacos.jpg";
import decoracionImg from "@/assets/decoracion-boda.jpg";
import foodStandImg from "@/assets/food-stand-display.jpg";
import mesaDulceImg from "@/assets/mesa-dulce-postres.jpg";
import boxesEspecialesImg from "@/assets/boxes-especiales.jpg";

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filters = ["Todos", "Eventos", "Platos", "Mesas dulces", "Food stand", "Decoración", "Boxes especiales"];

  const galleryItems = [
    { image: eventosImg, category: "Eventos", alt: "Eventos y catering" },
    { image: platosImg, category: "Platos", alt: "Mini tacos y platos gourmet" },
    { image: decoracionImg, category: "Decoración", alt: "Decoración de boda elegante" },
    { image: foodStandImg, category: "Food stand", alt: "Food stand con variedad" },
    { image: mesaDulceImg, category: "Mesas dulces", alt: "Mesa dulce con postres" },
    { image: boxesEspecialesImg, category: "Boxes especiales", alt: "Boxes especiales de comida" },
  ];

  const filteredItems =
    activeFilter === "Todos"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section id="galeria" className="py-20 bg-card" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-display text-primary mb-4">Galería</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <Button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                variant={activeFilter === filter ? "default" : "outline"}
                className={`transition-smooth ${
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground"
                    : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {filter}
              </Button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={`${item.category}-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative group overflow-hidden rounded-lg shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer aspect-square"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vicentinas-dark/80 via-vicentinas-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-display text-xl">{item.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
