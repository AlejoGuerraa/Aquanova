import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/WhatsApp_Image_2026-05-13_at_18.45.22.jpeg"
              alt="Aquanova Logo"
              className="h-12 w-12 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-primary">Aquanova</span>
              <span className="text-xs text-muted-foreground hidden sm:block">Piletas Domotizadas & Automatizadas</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Inicio
            </Link>
            <Link
              to="/catalog"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Catálogo
            </Link>
            <Link
              to="/automation-kit"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Kit de Domotización
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-colors font-medium"
            >
              Contacto
            </Link>
          </nav>

          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                to="/catalog"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Catálogo
              </Link>
              <Link
                to="/automation-kit"
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kit de Domotización
              </Link>
              <Link
                to="/contact"
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-colors font-medium text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contacto
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
