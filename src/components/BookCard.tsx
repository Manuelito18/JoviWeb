"use client"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import type { Book } from "@/types"

interface BookCardProps {
  book: Book
  onAddToCart: (bookId: string) => void
}

export function BookCard({ book, onAddToCart }: BookCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow overflow-hidden">
      <div className="aspect-[2/3] relative bg-gray-100">
        <img
          src={book.image || `/placeholder.svg?height=400&width=300&text=${encodeURIComponent(book.title)}`}
          alt={`Portada de ${book.title}`}
          className="w-full h-full object-cover"
        />
        {book.featured && (
          <Badge className="absolute top-2 right-2 bg-amber-500">
            <Star className="h-3 w-3 mr-1" />
            Nuevo
          </Badge>
        )}
      </div>
      <CardHeader className="p-3 space-y-2">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline" className="text-xs">
            {book.category}
          </Badge>
        </div>
        <CardTitle className="text-base sm:text-lg leading-tight line-clamp-2">{book.title}</CardTitle>
        <CardDescription className="text-sm line-clamp-2 sm:line-clamp-3">{book.description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 px-3 py-2">
        <div className="text-lg sm:text-xl font-bold text-blue-600">${book.price}</div>
        <Button size="sm" className="w-full sm:w-auto text-xs sm:text-sm" onClick={() => onAddToCart(book.id)}>
          Añadir
        </Button>
      </CardFooter>
    </Card>
  )
}
