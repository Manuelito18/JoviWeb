"use client"

import { useState, useEffect } from "react"
import { useCart } from "@/hooks/useCart"
import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { PromotionalCarousel } from "@/components/PromotionalCarousel"
import { FeaturedBook } from "@/components/FeaturedBook"
import { BooksSection } from "@/components/BooksSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"


export default function AuthorWebsite() {
  const { cart, addToCart, removeFromCart, getCartTotal, getCartItemCount } = useCart()
  const [showRegister, setShowRegister] = useState(false)
  const [showAllBooks, setShowAllBooks] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header
        showRegister={showRegister}
        setShowRegister={setShowRegister}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        getCartTotal={getCartTotal}
        getCartItemCount={getCartItemCount} showCart={false} setShowCart={() => {}}
      />

      <HeroSection />

      <PromotionalCarousel currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />

      <FeaturedBook onAddToCart={addToCart} />

      <BooksSection showAllBooks={showAllBooks} setShowAllBooks={setShowAllBooks} onAddToCart={addToCart} />

      <ContactSection />

      <Footer />
    </div>
  )
}
