import { useState, useEffect, useMemo } from "react";
import { Search, Filter, ChevronLeft, ChevronRight } from "lucide-react";
import { ProductCard } from "../components/ProductCard";
import { ProductModal } from "../components/ProductModal";
import { motion } from "motion/react";

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

const ITEMS_PER_PAGE = 6;

export function PoolCatalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedTag, setSelectedTag] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const productIds = [
      "rectangular-classic",
      "freeform-luxury",
      "infinity-pool",
      "spa-pool",
      "sport-pool",
      "compact-pool",
    ];

    Promise.all(
      productIds.map((id) =>
        fetch(`/products/${id}/product.json`)
          .then((res) => res.json())
          .catch(() => null)
      )
    ).then((results) => {
      const validProducts = results.filter((p) => p !== null);
      setProducts(validProducts);
    });
  }, []);

  const categories = useMemo(() => {
    const cats = new Set(products.map((p) => p.category));
    return ["all", ...Array.from(cats)];
  }, [products]);

  const allTags = useMemo(() => {
    const tags = new Set(products.flatMap((p) => p.tags));
    return ["all", ...Array.from(tags)];
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        searchQuery === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;

      const matchesTag =
        selectedTag === "all" || product.tags.includes(selectedTag);

      return matchesSearch && matchesCategory && matchesTag;
    });
  }, [products, searchQuery, selectedCategory, selectedTag]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, selectedTag]);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <section className="py-12 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Catálogo de Piletas</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explorá nuestra colección completa de piletas domotizadas. Cada diseño es
              personalizable según tus necesidades.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="bg-card rounded-xl shadow-md p-6 mb-8 border border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                size={20}
              />
              <input
                type="text"
                placeholder="Buscar piletas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <div className="relative">
              <Filter
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                size={20}
              />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring appearance-none cursor-pointer"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === "all" ? "Todas las Categorías" : cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="relative">
              <Filter
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                size={20}
              />
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring appearance-none cursor-pointer"
              >
                {allTags.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag === "all" ? "Todas las Etiquetas" : tag}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
            <span>
              Mostrando {paginatedProducts.length} de {filteredProducts.length} piletas
            </span>
            {(searchQuery || selectedCategory !== "all" || selectedTag !== "all") && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                  setSelectedTag("all");
                }}
                className="text-primary hover:text-accent transition-colors font-medium"
              >
                Limpiar filtros
              </button>
            )}
          </div>
        </div>

        {paginatedProducts.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="text-muted-foreground" size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2">No se encontraron resultados</h3>
            <p className="text-muted-foreground mb-4">
              Intentá con otros términos de búsqueda o filtros
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setSelectedTag("all");
              }}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-colors font-medium"
            >
              Ver todas las piletas
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {paginatedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProductCard {...product} onClick={() => handleProductClick(product)} />
                </motion.div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-border hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Página anterior"
                >
                  <ChevronLeft size={20} />
                </button>

                <div className="flex gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        currentPage === page
                          ? "bg-primary text-primary-foreground"
                          : "border border-border hover:bg-muted"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-border hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Página siguiente"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </>
        )}
      </div>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
