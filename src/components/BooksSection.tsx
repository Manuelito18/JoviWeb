"use client"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookCard } from "./BookCard"
import { books, categories } from "@/data/books"

interface BooksSectionProps {
  showAllBooks: boolean
  setShowAllBooks: (show: boolean) => void
  onAddToCart: (bookId: string) => void
}

export function BooksSection({ showAllBooks, setShowAllBooks, onAddToCart }: BooksSectionProps) {
  const getDisplayedBooks = () => {
    if (showAllBooks) return books
    return books.filter(
      (book) =>
        book.id === "1" || // Bienaventuranza (Sermones para la vida)
        book.id === "6" || // Los artículos esquematizados de fe (Teología)
        book.id === "7" || // El creyente fiel (Estudios Bíblicos)
        book.id === "8" || // Sobredosis en la Santidad (Novela)
        book.id === "9", // Competencias Grupales (Liderazgo)
    )
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Catálogo Completo</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explora toda la colección de libros organizados por categorías temáticas.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="mb-8 overflow-x-auto">
            <TabsList className="inline-flex h-10 items-center justify-start rounded-md bg-muted p-1 text-muted-foreground min-w-max">
              <TabsTrigger value="all" className="whitespace-nowrap">
                Todos
              </TabsTrigger>
              {categories.slice(0, 5).map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="whitespace-nowrap text-xs sm:text-sm px-2 sm:px-3"
                >
                  <span className="hidden sm:inline">{category}</span>
                  <span className="sm:hidden">
                    {category === "Sermones para la vida"
                      ? "Sermones"
                      : category === "Estudios Bíblicos"
                        ? "Estudios"
                        : category === "Teología"
                          ? "Teología"
                          : category === "Liderazgo"
                            ? "Liderazgo"
                            : category === "Novela"
                              ? "Novela"
                              : category}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="all">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-6">
              {getDisplayedBooks().map((book) => (
                <BookCard key={book.id} book={book} onAddToCart={onAddToCart} />
              ))}
            </div>

            {!showAllBooks && (
              <div className="text-center mt-8">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setShowAllBooks(true)}
                  className="bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200"
                >
                  Ver todos los libros ({books.length})
                </Button>
              </div>
            )}

            {showAllBooks && (
              <div className="text-center mt-8">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setShowAllBooks(false)}
                  className="bg-gray-50 hover:bg-gray-100 text-gray-700 border-gray-200"
                >
                  Mostrar menos
                </Button>
              </div>
            )}
          </TabsContent>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-6">
                {books
                  .filter((book) => book.category === category)
                  .map((book) => (
                    <BookCard key={book.id} book={book} onAddToCart={onAddToCart} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
