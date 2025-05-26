"use client"

import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

interface PromotionalCarouselProps {
  currentSlide: number
  setCurrentSlide: (slide: number) => void
}

export function PromotionalCarousel({ currentSlide, setCurrentSlide }: PromotionalCarouselProps) {

  return (
    <section className="py-8 sm:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Promociones Especiales</h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Descubre nuestras ofertas especiales y colecciones destacadas
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto" opts={{ loop: true }}>
          <CarouselContent>
            <CarouselItem>
              <div className="relative h-48 sm:h-64 md:h-80 bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg overflow-hidden">
                <img
                  src="/images/carusel_1.jpg"
                  alt="Colección Sermones para la vida"
                  className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 flex items-center justify-center text-white text-center p-4 sm:p-8">
                  <div>
                    <h4 className="text-xl sm:text-2xl md:text-4xl font-bold mb-2 sm:mb-4">
                      Colección &apos;Sermones para la vida&apos;
                    </h4>
                    <p className="text-sm sm:text-lg md:text-xl mb-4 sm:mb-6">
                      5 libros que transformarán tu perspectiva espiritual
                    </p>
                    <Badge className="bg-yellow-500 text-black text-sm sm:text-lg px-3 sm:px-4 py-1 sm:py-2">
                      20% de descuento en la colección completa
                    </Badge>
                  </div>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className="relative h-48 sm:h-64 md:h-80 bg-gradient-to-r from-green-600 to-teal-700 rounded-lg overflow-hidden">
                <img
                  src="/images/carusel_2.png"
                  alt="Nuevo libro Boceto de Teología Cristiana"
                  className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 flex items-center justify-center text-white text-center p-4 sm:p-8">
                  <div>
                    <h4 className="text-xl sm:text-2xl md:text-4xl font-bold mb-2 sm:mb-4">¡Nuevo Lanzamiento!</h4>
                    <p className="text-sm sm:text-lg md:text-xl mb-4 sm:mb-6">
                      &apos;Boceto de Teología Cristiana&apos; - La obra más completa del autor
                    </p>
                    <Badge className="bg-red-500 text-white text-sm sm:text-lg px-3 sm:px-4 py-1 sm:py-2">
                      Disponible ahora
                    </Badge>
                  </div>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className="relative h-48 sm:h-64 md:h-80 bg-gradient-to-r from-orange-600 to-red-700 rounded-lg overflow-hidden">
                <img
                  src="/images/carusel_3.jpg"
                  alt="Libros para líderes"
                  className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 flex items-center justify-center text-white text-center p-4 sm:p-8">
                  <div>
                    <h4 className="text-xl sm:text-2xl md:text-4xl font-bold mb-2 sm:mb-4">Para Líderes y Maestros</h4>
                    <p className="text-sm sm:text-lg md:text-xl mb-4 sm:mb-6">
                      Herramientas prácticas para el liderazgo cristiano efectivo
                    </p>
                    <Badge className="bg-blue-500 text-white text-sm sm:text-lg px-3 sm:px-4 py-1 sm:py-2">
                      Guías especializadas
                    </Badge>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />

          {/* Indicadores de puntos para móviles */}
          <div className="flex justify-center mt-4 space-x-2 sm:hidden">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-blue-600 scale-110" : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  )
}
