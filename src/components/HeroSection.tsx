import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookIcon, Heart, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-6">José Vicente Fernández Polo</h2>
          <p className="text-xl mb-8 opacity-90">
            Escritor, teólogo y líder espiritual dedicado a compartir enseñanzas profundas sobre la fe cristiana, el
            liderazgo y la vida espiritual.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <BookIcon className="h-4 w-4 mr-2" />9 Libros Publicados
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <Heart className="h-4 w-4 mr-2" />
              Teología Cristiana
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <Users className="h-4 w-4 mr-2" />
              Liderazgo Espiritual
            </Badge>
          </div>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Explorar Libros
          </Button>
        </div>
      </div>
    </section>
  )
}
