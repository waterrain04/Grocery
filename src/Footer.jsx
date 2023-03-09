import React from 'react'

const Footer = ({items}) => {
  return (
    <footer className='text-3xl bg-blue-900 p-4 text-center text-white'>
      {items.length? `${items.length} ON THE LIST`: `NO ITEM` }
    </footer>
  )
}

export default Footer
