export interface Book {
  id: string
  title: string
  category: string
  price: number
  description: string
  featured?: boolean
  image?: string
}

export interface CartItem {
  [key: string]: number
}
