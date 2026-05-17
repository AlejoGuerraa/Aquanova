import { motion } from "motion/react";
import { Tag } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  thumbnailImage: string;
  shortDescription: string;
  tags: string[];
  onClick: () => void;
}

export function ProductCard({
  name,
  category,
  thumbnailImage,
  shortDescription,
  tags,
  onClick
}: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="bg-card rounded-xl shadow-md hover:shadow-xl overflow-hidden cursor-pointer border border-border"
      onClick={onClick}
    >
      <div className="relative h-56 overflow-hidden bg-muted">
        <img
          src={thumbnailImage}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
          {category}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-card-foreground mb-2">{name}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{shortDescription}</p>

        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-2.5 py-1 bg-muted text-muted-foreground text-xs rounded-md"
            >
              <Tag size={12} />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
