import React from 'react'
import { useFilters } from '../../hooks/useFilters'
import { Product } from './Product'

export const ListProduct = ({ products }) => {
    const { filterProducts } = useFilters()

    const filteredProducts = filterProducts(products)

    if(filteredProducts.length >= 1){
      return (
        <ul className='text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 h-screen'>
            {filteredProducts.map(product=>{
                return (
                <Product key={product.id} product={product} />
                )
            })}
        </ul>
      )
    }else{
      return (
        <div>
          <p>No existe un producto con esas caracteristicas!.</p>
        </div>
      )
    }
}
