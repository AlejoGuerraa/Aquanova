# Sistema de Productos - Aquanova

## Cómo funciona el sistema

El catálogo de piletas se genera dinámicamente desde la carpeta `public/products/`. Cada producto es una carpeta con un nombre único (ID) que contiene:

1. **product.json** - Metadatos del producto
2. **description.md** - Descripción detallada en formato Markdown
3. **Imágenes** - URLs de imágenes (pueden ser locales o externas)

## Estructura de carpetas

```
public/products/
├── rectangular-classic/
│   ├── product.json
│   └── description.md
├── freeform-luxury/
│   ├── product.json
│   └── description.md
├── infinity-pool/
│   ├── product.json
│   └── description.md
└── [nombre-del-producto]/
    ├── product.json
    └── description.md
```

## Formato del archivo product.json

```json
{
  "id": "nombre-del-producto",
  "name": "Nombre Visible del Producto",
  "category": "Categoría (Residencial, Luxury, Deportiva)",
  "tags": ["tag1", "tag2", "tag3"],
  "dimensions": "8m x 4m x 1.5m",
  "capacity": "48,000 litros",
  "thumbnailImage": "URL de la imagen principal",
  "images": [
    "URL imagen 1",
    "URL imagen 2"
  ],
  "shortDescription": "Descripción corta para la card",
  "features": [
    "Característica 1",
    "Característica 2",
    "Característica 3"
  ]
}
```

### Campos obligatorios:
- **id**: Identificador único (debe coincidir con el nombre de la carpeta)
- **name**: Nombre del producto
- **category**: Categoría del producto
- **tags**: Array de etiquetas para filtrado y búsqueda
- **dimensions**: Dimensiones de la pileta
- **capacity**: Capacidad en litros
- **thumbnailImage**: URL de la imagen principal
- **images**: Array de URLs de imágenes adicionales
- **shortDescription**: Descripción breve
- **features**: Array de características incluidas

## Formato del archivo description.md

El archivo `description.md` contiene la descripción detallada del producto en formato Markdown. Este contenido se muestra en el modal cuando el usuario hace clic en una card.

Estructura recomendada:

```markdown
# Nombre del Producto

## Descripción General
Texto descriptivo general...

## Características Destacadas
- Característica 1
- Característica 2

## Especificaciones Técnicas
- Especificación 1
- Especificación 2

## Sistemas Incluidos
- Sistema 1
- Sistema 2

## Personalización
Información sobre opciones de personalización...
```

## Cómo agregar un nuevo producto

1. **Crear carpeta**: Crea una nueva carpeta en `public/products/` con el ID del producto
   ```
   public/products/mi-nueva-pileta/
   ```

2. **Crear product.json**: Copia el formato de ejemplo y completa con los datos de tu producto

3. **Crear description.md**: Escribe la descripción detallada en Markdown

4. **Imágenes**: 
   - Puedes usar URLs externas (Unsplash, etc.)
   - O añadir imágenes locales en la carpeta del producto y referenciarlas

5. **El producto aparecerá automáticamente** en el catálogo sin necesidad de modificar código

## Modelos 3D

Los modelos 3D se generan automáticamente según el `id` del producto. El componente `Pool3DModel.tsx` contiene las dimensiones para cada tipo de pileta.

Para personalizar un modelo 3D, edita el componente `src/app/components/Pool3DModel.tsx` y añade un nuevo case en la función `getPoolDimensions()`:

```typescript
case "mi-nueva-pileta":
  return { width: 10, depth: 2, length: 5 };
```

## Búsqueda y Filtros

El sistema permite buscar productos por:
- Nombre del producto
- Descripción corta
- Tags
- Categoría

Los filtros funcionan de forma acumulativa, permitiendo combinar:
- Búsqueda por texto
- Filtro por categoría
- Filtro por tag

## Paginación

El catálogo muestra 6 productos por página. La paginación se ajusta automáticamente según los filtros aplicados.

## Categorías disponibles

Las categorías se generan dinámicamente desde los productos existentes. Las categorías actuales son:
- Residencial
- Luxury
- Deportiva

Puedes agregar nuevas categorías simplemente usando un nombre diferente en el campo `category` de cualquier producto.

## Tags recomendados

Los tags ayudan a la búsqueda y filtrado. Algunos ejemplos:
- rectangular, forma libre, infinity
- clásica, moderna, luxury
- natación, spa, deportiva
- compacta, grande, olímpica
- familiar, profesional, urbana

## Imágenes

Para las imágenes puedes usar:

1. **Unsplash** (recomendado para demo):
   ```
   https://images.unsplash.com/photo-XXXXXXX?w=1200&q=80
   ```

2. **Imágenes locales**:
   - Coloca las imágenes en `public/products/[id-producto]/`
   - Referencia como: `/products/[id-producto]/imagen.jpg`

## Notas importantes

- El ID del producto debe ser único y sin espacios (usa guiones)
- Las URLs de imágenes deben ser válidas y accesibles
- El archivo description.md soporta todo el formato Markdown estándar
- Los productos se cargan de forma asíncrona al abrir la página del catálogo
- Si un producto falla al cargar, simplemente no aparecerá (no rompe la página)
