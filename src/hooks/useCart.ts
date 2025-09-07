import { useState, useEffect } from 'react'
import type { Guitar, CartItem } from '../types'

export const useCart = () => {
    
    const initialCart = () : CartItem[] => {
        const localStorageCart = localStorage.getItem('cart')
        return localStorageCart ? JSON.parse(localStorageCart) : []
      }
  
      const [cart, setCart] = useState(initialCart)
    
      const MIN_ITEMS = 1
      const MAX_ITEMS = 5
    
      useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
      }, [cart])
    
      function clearCart() {
        setCart([])
      }

    return {
        cart,
        clearCart
    }
}
