import React from 'react'
import { Filters } from '../filter/Filters'

export const Header = () => {
  return (
    <header >
        <h1 className='text-4xl font-extrabold'>React Shop 🛒</h1>
        <Filters />
    </header>
  )
}
