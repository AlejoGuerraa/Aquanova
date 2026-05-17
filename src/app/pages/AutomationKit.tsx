import { motion } from "motion/react";
import {
  Smartphone,
  Thermometer,
  Lightbulb,
  Droplets,
  Clock,
  Cpu,
  Shield,
  Wifi,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export function AutomationKit() {
  const features = [
    {
      icon: Smartphone,
      title: "Control desde App",
      description:
        "Aplicación móvil intuitiva para iOS y Android. Controla todos los aspectos de tu pileta desde cualquier lugar.",
    },
    {
      icon: Thermometer,
      title: "Control de Temperatura",
      description:
        "Sistema de calefacción inteligente con termostato automático. Mantén tu pileta siempre a la temperatura ideal.",
    },
    {
      icon: Lightbulb,
      title: "Iluminación LED RGB",
      description:
        "Luces LED de colores totalmente programables. Crea ambientes únicos con millones de combinaciones.",
    },
    {
      icon: Droplets,
      title: "Control de pH y Cloro",
      description:
        "Sensores que monitorean constantemente la química del agua y ajustan automáticamente los niveles.",
    },
    {
      icon: Clock,
      title: "Programación Horaria",
      description:
        "Programa filtrado, calefacción y limpieza según tus horarios. Ahorra energía automáticamente.",
    },
    {
      icon: Cpu,
      title: "Inteligencia Artificial",
      description:
        "Aprende tus patrones de uso y optimiza el consumo energético sin sacrificar confort.",
    },
  ];

  const specs = [
    { label: "Compatibilidad", value: "Cualquier pileta existente" },
    { label: "Instalación", value: "2-3 días laborales" },
    { label: "Garantía", value: "3 años completos" },
    { label: "Conectividad", value: "WiFi 2.4GHz / 5GHz" },
    { label: "App", value: "iOS 14+ / Android 8+" },
    { label: "Consumo", value: "Ultra bajo (< 50W)" },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-primary/20 via-accent/10 to-background overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/40 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                <Cpu className="text-primary" size={20} />
                <span className="text-primary font-medium">Kit de Domotización Aquanova</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Convierte tu Pileta en una Pileta Inteligente
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Nuestro kit de domotización se adapta a cualquier pileta existente, transformándola
                en una piscina automatizada de última generación sin necesidad de reconstrucción.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-colors font-medium inline-flex items-center justify-center gap-2"
                >
                  Solicitar Presupuesto
                  <ArrowRight size={20} />
                </Link>
                <a
                  href="#features"
                  className="px-8 py-3 bg-card text-card-foreground border-2 border-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors font-medium"
                >
                  Conocer Más
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Funciones del Sistema de Domotización
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Control total de tu pileta desde la palma de tu mano
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-card to-muted/30 p-6 rounded-xl border border-border hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
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
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
                alt="Control de pileta desde smartphone"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Wifi className="text-primary" size={32} />
                <span className="text-primary font-semibold">Conexión Inteligente</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Sistema 100% Personalizado para tu Pileta
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Cada kit de domotización es único. Nuestro equipo técnico realiza un análisis
                completo de tu pileta para diseñar e instalar un sistema perfectamente adaptado a
                tus necesidades específicas.
              </p>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                No importa el tamaño, forma o edad de tu pileta. Nuestro sistema modular se integra
                sin problemas con cualquier instalación existente.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Análisis Técnico Previo</h4>
                    <p className="text-muted-foreground text-sm">
                      Evaluamos tu instalación actual sin costo
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Diseño Personalizado</h4>
                    <p className="text-muted-foreground text-sm">
                      Configuración específica para tu pileta
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Instalación Profesional</h4>
                    <p className="text-muted-foreground text-sm">
                      Equipo certificado con garantía completa
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Especificaciones Técnicas</h2>
              <p className="text-muted-foreground text-lg">
                Hardware y software de última generación
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {specs.map((spec, index) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center justify-between p-4 bg-muted/50 rounded-lg"
                >
                  <span className="text-muted-foreground font-medium">{spec.label}</span>
                  <span className="font-semibold text-foreground">{spec.value}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-2xl border border-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Garantía y Soporte Completo</h3>
                  <p className="text-muted-foreground mb-4">
                    Todos nuestros kits incluyen 3 años de garantía total en hardware y software,
                    además de soporte técnico 24/7. Actualizaciones de firmware gratuitas de por
                    vida.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>Garantía extendida de 3 años</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>Soporte técnico telefónico y remoto</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>Actualizaciones automáticas sin costo</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>Mantenimiento preventivo anual incluido</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Querés automatizar tu pileta?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Solicitá un presupuesto sin compromiso. Nuestro equipo técnico evaluará tu pileta
                y te presentará una propuesta personalizada en menos de 48 horas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-3 bg-white text-primary rounded-lg hover:bg-muted transition-colors font-medium inline-flex items-center justify-center gap-2"
                >
                  Solicitar Presupuesto Gratis
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/catalog"
                  className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-medium"
                >
                  Ver Piletas Completas
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
