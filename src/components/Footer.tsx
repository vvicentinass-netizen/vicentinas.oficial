import { Heart, Instagram, Facebook, Mail } from "lucide-react";
import logoVicentinas from "@/assets/logo-vicentinas.png";

const Footer = () => {
  return (
    <footer className="bg-vicentinas-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Slogan */}
          <div>
            <img src={logoVicentinas} alt="Vicentinas Catering" className="h-16 mb-4" />
            <p className="text-white/80 italic">
              Comé rico, festejá mejor.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#inicio" className="hover:text-white transition-smooth">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-smooth">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-white transition-smooth">
                  Galería
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-smooth">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-display text-xl mb-4">Seguinos</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/vicentinas.oficial/"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-smooth"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://mail.google.com/mail/u/0/?pli=1#inbox?compose=CllgCJfpsSWwPnlJgWgpltkWbTDPptckFXHZPRfZXcbSbRqHkMSgwxtLSTpvtdJQSsrjfcFxgNB"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-smooth"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>
            © {new Date().getFullYear()} Vicentinas Catering. Hecho con{" "}
            <Heart className="inline h-4 w-4 text-primary fill-primary" /> en Santo Tomé,
            Santa Fe.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
