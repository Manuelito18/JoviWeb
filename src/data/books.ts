import type { Book } from "@/types"

export const books: Book[] = [
  // Colección Sermones para la vida (5 libros)
  {
    id: "1",
    title: "Bienaventuranza",
    category: "Sermones para la vida",
    price: 15.99,
    description: "Reflexiones profundas sobre las bienaventuranzas y su aplicación en la vida cristiana.",
    image: "/images/coleccion_libro1_por.png",
  },
  {
    id: "2",
    title: "Cristo",
    category: "Sermones para la vida",
    price: 15.99,
    description: "Enseñanzas centradas en la persona y obra de Jesucristo.",
    image: "/images/coleccion_libro2_por.png",
  },
  {
    id: "3",
    title: "Dios",
    category: "Sermones para la vida",
    price: 15.99,
    description: "Reflexiones profundas sobre la naturaleza divina y nuestra relación con Dios.",
    image: "/images/coleccion_libro3_por.png",
  },
  {
    id: "4",
    title: "Mayordomía",
    category: "Sermones para la vida",
    price: 15.99,
    description: "Enseñanzas sobre la responsabilidad cristiana y el manejo de los recursos.",
    image: "/images/coleccion_libro4_por.png",
  },
  {
    id: "5",
    title: "Evangelio",
    category: "Sermones para la vida",
    price: 15.99,
    description: "Explorando las buenas nuevas del evangelio y su impacto transformador.",
    image: "/images/coleccion_libro5_por.png",
  },

  // Otros libros
  {
    id: "6",
    title: "Los artículos esquematizados de fe",
    category: "Teología",
    price: 22.99,
    description: "Análisis sistemático de los fundamentos de la fe cristiana.",
    image: "/images/articulos_de_fe_por.png",
  },
  {
    id: "7",
    title: "El creyente fiel",
    category: "Estudios Bíblicos",
    price: 18.99,
    description: "Bosquejos de un estudio aplicado de la primera y segunda de las epístolas de Juan.",
    image: "/images/el_creyente_fiel_por.png",
  },
  {
    id: "8",
    title: "Sobredosis en la Santidad",
    category: "Novela",
    price: 19.99,
    description: "Una novela que explora temas profundas de espiritualidad y fe.",
    image: "/images/sobredosis_de_santidad_por.png",
  },
  {
    id: "9",
    title: "Competencias Grupales",
    category: "Liderazgo",
    price: 24.99,
    description: "Un plan de trabajo para la juventud - Guía práctica para maestros y líderes.",
    image: "/images/ayudas_homiliticas_por.png",
  },
  {
    id: "10",
    title: "Boceto de Teología Cristiana",
    category: "Teología",
    price: 29.99,
    description: "Su obra más reciente - Una introducción completa a los principios teológicos cristianos.",
    featured: true,
    image: "/images/teologia_cristiana_por.png",
  },
]

export const categories = [...new Set(books.map((book) => book.category))]
