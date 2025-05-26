"use client"

import { useState } from "react"
import type { CartItem } from "@/types"
import { books } from "@/data/books"

export function useCart() {
  const [cart, setCart] = useState<CartItem>({})

  const addToCart = (bookId: string) => {
    setCart((prev) => ({
      ...prev,
      [bookId]: (prev[bookId] || 0) + 1,
    }))
  }

  const removeFromCart = (bookId: string) => {
    setCart((prev) => {
      const newCart = { ...prev }
      if (newCart[bookId] > 1) {
        newCart[bookId]--
      } else {
        delete newCart[bookId]
      }
      return newCart
    })
  }

  const getCartTotal = () => {
    return Object.entries(cart).reduce((total, [bookId, quantity]) => {
      const book = books.find((b) => b.id === bookId)
      return total + (book?.price || 0) * quantity
    }, 0)
  }

  const getCartItemCount = () => {
    return Object.values(cart).reduce((total, quantity) => total + quantity, 0)
  }

  return {
    cart,
    addToCart,
    removeFromCart,
    getCartTotal,
    getCartItemCount,
  }
}
