import { BookIcon } from "lucide-react"
import { RegisterDialog } from "./dialogs/RegisterDialog"
import { CartDialog } from "./dialogs/CartDialog"
import type { CartItem } from "@/types"

interface HeaderProps {
  showRegister: boolean
  setShowRegister: (show: boolean) => void
  showCart: boolean
  setShowCart: (show: boolean) => void
  cart: CartItem
  addToCart: (bookId: string) => void
  removeFromCart: (bookId: string) => void
  getCartTotal: () => number
  getCartItemCount: () => number
}

export function Header({
  showRegister,
  setShowRegister,
  showCart,
  setShowCart,
  cart,
  addToCart,
  removeFromCart,
  getCartTotal,
  getCartItemCount,
}: HeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo y título */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <BookIcon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 truncate">
              <span className="hidden sm:inline">José Vicente Fernández Polo</span>
              <span className="sm:hidden">J.V. Fernández</span>
            </h1>
          </div>

          {/* Botones del menú */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <RegisterDialog open={showRegister} onOpenChange={setShowRegister} />
            <CartDialog
              open={showCart}
              onOpenChange={setShowCart}
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              getCartTotal={getCartTotal}
              getCartItemCount={getCartItemCount}
            />
          </div>
        </div>
      </div>
    </header>
  )
}
