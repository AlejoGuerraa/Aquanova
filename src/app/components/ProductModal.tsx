import { X, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Pool3DModel } from "./Pool3DModel";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

interface Product {
  id: string;
  name: string;
  category: string;
  tags: string[];
  dimensions: string;
  capacity: string;
  thumbnailImage: string;
  images: string[];
  shortDescription: string;
  features: string[];
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    if (product) {
      fetch(`/products/${product.id}/description.md`)
        .then((res) => res.text())
        .then((text) => setDescription(text))
        .catch(() => setDescription("No hay descripción disponible."));
    }
  }, [product]);

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 bg-card rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-border bg-gradient-to-r from-primary/10 to-accent/10">
              <div>
                <h2 className="text-2xl font-bold text-card-foreground">{product.name}</h2>
                <p className="text-muted-foreground text-sm mt-1">{product.category}</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
                aria-label="Cerrar"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="mb-6">
                    <img
                      src={product.thumbnailImage}
                      alt={product.name}
                      className="w-full h-64 object-cover rounded-lg shadow-md"
                    />
                  </div>

                  <div className="bg-muted/50 rounded-lg p-5">
                    <h3 className="font-semibold text-lg mb-3">Especificaciones</h3>
                    <dl className="grid grid-cols-2 gap-3 text-sm">
                      <dt className="text-muted-foreground">Dimensiones:</dt>
                      <dd className="font-medium">{product.dimensions}</dd>
                      <dt className="text-muted-foreground">Capacidad:</dt>
                      <dd className="font-medium">{product.capacity}</dd>
                      <dt className="text-muted-foreground">Categoría:</dt>
                      <dd className="font-medium">{product.category}</dd>
                    </dl>
                  </div>

                  <div className="mt-6">
                    <h3 className="font-semibold text-lg mb-3">Características Incluidas</h3>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <Check size={18} className="text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-4">Modelo 3D Interactivo</h3>
                  <Pool3DModel poolType={product.id} />

                  <div className="mt-6 prose prose-sm max-w-none">
                    <ReactMarkdown>{description}</ReactMarkdown>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6 border border-primary/20">
                <h3 className="font-semibold text-lg mb-2">¿Interesado en este modelo?</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Contáctanos para recibir un presupuesto personalizado. Cada pileta se adapta
                  específicamente a tus necesidades y espacio disponible.
                </p>
                <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-colors font-medium">
                  Solicitar Presupuesto
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
