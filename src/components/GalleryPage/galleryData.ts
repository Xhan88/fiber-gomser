import type { LucideIcon } from "lucide-react";
import {
  Factory,
  Layers3,
  RadioTower,
  Settings,
  Warehouse,
} from "lucide-react";

export type GalleryCategory =
  | "Procesos"
  | "Productos"
  | "Maquinaria"
  | "Instalaciones"
  | "Capitonados";

export interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: GalleryCategory;
  icon: LucideIcon;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Procesos de producción",
    description: "Tecnología y precisión en cada etapa.",
    image: "/images/gallery-page/proceso-produccion.jpg",
    category: "Procesos",
    icon: Settings,
  },
  {
    id: 2,
    title: "Productos terminados",
    description: "Calidad y acabados que marcan la diferencia.",
    image: "/images/gallery-page/productos-terminados.jpg",
    category: "Productos",
    icon: Layers3,
  },
  {
    id: 3,
    title: "Tecnología ultrasónica",
    description: "Uniones fuertes, limpias y eficientes.",
    image: "/images/gallery-page/tecnologia-ultrasonica.jpg",
    category: "Procesos",
    icon: RadioTower,
  },
  {
    id: 4,
    title: "Nuestra maquinaria",
    description: "Equipos de última generación.",
    image: "/images/gallery-page/maquinaria.jpg",
    category: "Maquinaria",
    icon: Factory,
  },
  {
    id: 5,
    title: "Capitonados",
    description: "Diseños de alta precisión para diversas aplicaciones.",
    image: "/images/gallery-page/capitonados.jpg",
    category: "Capitonados",
    icon: Layers3,
  },
  {
    id: 6,
    title: "Instalaciones",
    description: "Espacios diseñados para la productividad.",
    image: "/images/gallery-page/instalaciones.jpg",
    category: "Instalaciones",
    icon: Warehouse,
  },
];