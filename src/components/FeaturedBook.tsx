"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import { books } from "@/data/books"

interface FeaturedBookProps {
  onAddToCart: (bookId: string) => void
}

export function FeaturedBook({ onAddToCart }: FeaturedBookProps) {
  const featuredBook = books.find((book) => book.featured)

  if (!featuredBook) return null

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Último Libro</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre la obra más reciente del autor, una guía completa sobre los fundamentos de la teología cristiana.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200 overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img
                src={
                  featuredBook.image ||
                  `/placeholder.svg?height=500&width=350&text=${encodeURIComponent(featuredBook.title)}`
                }
                alt={`Portada de ${featuredBook.title}`}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <CardHeader className="text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-4">
                  <Badge className="bg-amber-500 text-white">
                    <Star className="h-3 w-3 mr-1" />
                    Nuevo
                  </Badge>
                </div>
                <CardTitle className="text-3xl text-amber-800">{featuredBook.title}</CardTitle>
                <CardDescription className="text-lg text-amber-700">{featuredBook.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-center md:text-left">
                <div className="text-4xl font-bold text-amber-800 mb-4">${featuredBook.price}</div>
                <Button
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700"
                  onClick={() => onAddToCart(featuredBook.id)}
                >
                  Añadir al Carrito
                </Button>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
