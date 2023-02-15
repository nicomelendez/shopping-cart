import React from 'react'
import { useCart } from '../../hooks/useCart.jsx'
import { AddToCartIcon, RemoveFromCartIcon } from '../Icons.jsx'


export const Product = ({product}) => {
    const { addToCart, removeFromCart, cart } = useCart()

    const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
        }

    const isProductInCart = checkProductInCart(product)
  return (
    <li className='bg-black/40 w-xl max-h-80 py-5 rounded-lg flex flex-col items-center justify-start' key={product.id}>
              <img className='aspect-video rounded-lg w-11/12 h-3/5'
                src={product.thumbnail}
                alt={product.title}
              />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button
                  style={{ backgroundColor: isProductInCart ? 'red' : '#09f' }} onClick={() => {
                    isProductInCart
                      ? removeFromCart(product)
                      : addToCart(product)
                  }}
                >
                  {
                    isProductInCart
                      ? <RemoveFromCartIcon />
                      : <AddToCartIcon />
                  }
                </button>
              </div>
            </li>
  )
}
