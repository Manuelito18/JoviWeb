"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ShoppingCart, Plus, Minus } from "lucide-react"
import type { CartItem } from "@/types"
import { books } from "@/data/books"

interface CartDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  cart: CartItem
  addToCart: (bookId: string) => void
  removeFromCart: (bookId: string) => void
  getCartTotal: () => number
  getCartItemCount: () => number
}

export function CartDialog({
  open,
  onOpenChange,
  cart,
  addToCart,
  removeFromCart,
  getCartTotal,
  getCartItemCount,
}: CartDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center space-x-1 sm:space-x-2 relative">
          <ShoppingCart className="h-4 w-4" />
          <span className="hidden xs:inline sm:inline">Carrito</span>
          {getCartItemCount() > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
              {getCartItemCount()}
            </Badge>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md mx-4">
        <DialogHeader>
          <DialogTitle>Carrito de Compras</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {Object.entries(cart).length === 0 ? (
            <p className="text-center text-gray-500">Tu carrito está vacío</p>
          ) : (
            <>
              {Object.entries(cart).map(([bookId, quantity]) => {
                const book = books.find((b) => b.id === bookId)
                if (!book) return null
                return (
                  <div key={bookId} className="flex items-center justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm truncate">{book.title}</h4>
                      <p className="text-sm text-gray-500">${book.price}</p>
                    </div>
                    <div className="flex items-center space-x-1 flex-shrink-0">
                      <Button size="sm" variant="outline" onClick={() => removeFromCart(bookId)}>
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center text-sm">{quantity}</span>
                      <Button size="sm" variant="outline" onClick={() => addToCart(bookId)}>
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                )
              })}
              <div className="border-t pt-4">
                <div className="flex justify-between font-bold">
                  <span>Total: ${getCartTotal().toFixed(2)}</span>
                </div>
                <Button className="w-full mt-4">Proceder al Pago</Button>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
