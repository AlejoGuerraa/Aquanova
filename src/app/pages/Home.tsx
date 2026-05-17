import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Waves, Smartphone, Sparkles, Shield, ArrowRight, Droplet } from "lucide-react";

export function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/20 via-accent/10 to-background">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex justify-center mb-6">
                <img
                  src="/WhatsApp_Image_2026-05-13_at_18.45.21-1.jpeg"
                  alt="Aquanova Logo"
                  className="h-32 object-contain"
                />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Piletas Inteligentes del Futuro
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Transformamos tu espacio en un oasis tecnológico con nuestros sistemas de
                domotización y automatización de piletas de última generación.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/catalog"
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-colors font-medium inline-flex items-center justify-center gap-2"
                >
                  Ver Catálogo
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/automation-kit"
                  className="px-8 py-3 bg-card text-card-foreground border-2 border-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors font-medium inline-flex items-center justify-center gap-2"
                >
                  Kit de Domotización
                  <Smartphone size={20} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Por qué elegir Aquanova?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Somos líderes en tecnología de automatización para piletas, ofreciendo soluciones
              personalizadas que se adaptan perfectamente a tus necesidades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-xl border border-primary/20"
            >
              <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Waves className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Diseño Personalizado</h3>
              <p className="text-muted-foreground">
                Cada pileta es única. Diseñamos y construimos soluciones específicas para tu
                espacio y necesidades.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-accent/10 to-primary/10 p-8 rounded-xl border border-accent/20"
            >
              <div className="w-14 h-14 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="text-accent" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Control Total</h3>
              <p className="text-muted-foreground">
                Controla temperatura, iluminación, filtrado y más desde tu smartphone en cualquier
                momento.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-xl border border-primary/20"
            >
              <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Tecnología Avanzada</h3>
              <p className="text-muted-foreground">
                Sistemas de última generación con sensores inteligentes y automatización completa.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-accent/10 to-primary/10 p-8 rounded-xl border border-accent/20"
            >
              <div className="w-14 h-14 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-accent" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Garantía Total</h3>
              <p className="text-muted-foreground">
                Respaldamos nuestro trabajo con garantía completa y soporte técnico permanente.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Droplet className="text-primary" size={32} />
                <span className="text-primary font-semibold">Sobre Nosotros</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Innovación en Piletas Domotizadas
              </h2>
              <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                En Aquanova nos especializamos en la construcción y automatización de piletas de
                alta gama. Con años de experiencia en el sector, hemos perfeccionado nuestros
                sistemas de domotización para ofrecer la mejor experiencia posible.
              </p>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Nuestro equipo de ingenieros y diseñadores trabaja en cada proyecto de forma
                personalizada, asegurando que tu pileta no solo sea hermosa, sino también
                inteligente y eficiente.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-muted-foreground">Más de 500 piletas instaladas</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-muted-foreground">
                    Tecnología de punta en automatización
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-muted-foreground">
                    Soporte técnico 24/7 para nuestros clientes
                  </span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-colors font-medium"
              >
                Contáctanos
                <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1200&q=80"
                alt="Pileta moderna"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-xl border border-border">
                <div className="text-4xl font-bold text-primary mb-1">100%</div>
                <div className="text-muted-foreground">Personalizado</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ofrecemos soluciones completas para cada etapa de tu proyecto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Diseño y Construcción</h3>
              <p className="text-muted-foreground mb-4">
                Diseñamos y construimos piletas a medida con los más altos estándares de calidad.
              </p>
              <Link to="/catalog" className="text-primary hover:text-accent inline-flex items-center gap-1">
                Ver catálogo
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Sistema de Domotización</h3>
              <p className="text-muted-foreground mb-4">
                Kit completo de automatización que se adapta a cualquier pileta existente.
              </p>
              <Link to="/automation-kit" className="text-primary hover:text-accent inline-flex items-center gap-1">
                Conocer más
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Mantenimiento y Soporte</h3>
              <p className="text-muted-foreground mb-4">
                Servicio técnico especializado y mantenimiento preventivo para tu pileta.
              </p>
              <Link to="/contact" className="text-primary hover:text-accent inline-flex items-center gap-1">
                Contactar
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para transformar tu pileta?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Solicita un presupuesto sin compromiso y descubre cómo podemos ayudarte a crear la
              pileta de tus sueños.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-white text-primary rounded-lg hover:bg-muted transition-colors font-medium inline-flex items-center justify-center gap-2"
              >
                Solicitar Presupuesto
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/catalog"
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-medium"
              >
                Ver Catálogo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
