import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    eventType: "",
    guests: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `Hola! Quiero solicitar un presupuesto:\n\nNombre: ${formData.name}\nFecha: ${formData.date}\nTipo de evento: ${formData.eventType}\nCantidad de personas: ${formData.guests}\nMensaje: ${formData.message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    window.open(`https://wa.me/5493425123456?text=${encodedMessage}`, "_blank");
    
    toast({
      title: "¡Perfecto!",
      description: "Te estamos redirigiendo a WhatsApp para continuar.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contacto" className="py-20 bg-card" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-display text-primary mb-4">Contacto</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4" />
          <p className="text-xl text-foreground/80">
            ¿Listo para tu próximo evento? Hablemos
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="shadow-card border-2 border-border">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-2 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Input
                      name="date"
                      type="date"
                      placeholder="Fecha del evento"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="border-2 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Input
                      name="eventType"
                      placeholder="Tipo de evento"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      className="border-2 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Input
                      name="guests"
                      type="number"
                      placeholder="Cantidad de personas"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                      className="border-2 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Contanos más sobre tu evento..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="border-2 focus:border-primary"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Enviar consulta
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <Card className="border-2 border-primary shadow-card hover:shadow-hover transition-smooth bg-gradient-to-br from-primary to-primary/80 text-white">
              <CardContent className="p-8">
                <MessageCircle className="h-12 w-12 mb-4" />
                <h3 className="text-2xl font-display mb-2">Escribinos al instante</h3>
                <p className="mb-4 text-white/90">
                  Respondemos rápido por WhatsApp
                </p>
                <Button
                  onClick={() => window.open("https://wa.me/5493424682198", "_blank")}
                  size="lg"
                  className="w-full bg-white text-primary hover:bg-white/90"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  WhatsApp directo
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card border-2 border-border">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Ubicación</h4>
                    <p className="text-foreground/80">Santo Tomé, Santa Fe</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Teléfono</h4>
                    <p className="text-foreground/80">+54 9 342 468-2198</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-foreground/80">vvicentinass@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
              <p className="text-muted-foreground">Mapa de ubicación</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
