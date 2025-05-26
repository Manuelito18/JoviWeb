import { categories } from "@/data/books"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4">José Vicente Fernández Polo</h4>
            <p className="text-gray-400">
              Escritor y teólogo dedicado a compartir enseñanzas profundas sobre la fe cristiana.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Categorías</h4>
            <ul className="space-y-2 text-gray-400">
              {categories.map((category) => (
                <li key={category}>{category}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Sobre el Autor</li>
              <li>Catálogo</li>
              <li>Contacto</li>
              <li>Términos y Condiciones</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 José Vicente Fernández Polo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
