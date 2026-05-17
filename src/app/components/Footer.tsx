import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-muted border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/Icono.png"
                alt="Aquanova Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="text-xl font-bold text-primary">Aquanova</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Especialistas en piletas domotizadas y automatizadas.
              Transformamos tu espacio en un oasis tecnológico.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Catálogo de Piletas
                </Link>
              </li>
              <li>
                <Link to="/automation-kit" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Kit de Domotización
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Servicios</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>Construcción de Piletas</li>
              <li>Sistemas de Domotización</li>
              <li>Automatización Completa</li>
              <li>Mantenimiento y Soporte</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <Mail size={18} className="mt-0.5 text-primary flex-shrink-0" />
                <span>info@aquanova.com</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <Phone size={18} className="mt-0.5 text-primary flex-shrink-0" />
                <span>+54 11 1234-5678</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin size={18} className="mt-0.5 text-primary flex-shrink-0" />
                <span>Buenos Aires, Argentina</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Aquanova. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
