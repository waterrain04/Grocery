import React from 'react'

import ItemList from './ItemList'

const Content = ({items,setItems, handleCheck, handleDelete}) => {


  return (

      <main className='flex-1 flex flex-col items-left justify-start p-4'>
        {items.length ? 
          (
            <ItemList
              items={items}
              setItems={setItems}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
            />
          ) : <h1 className="text-center text-4xl font-bold flex-1 flex justify-center items-center">EMPTY LIST</h1>}
      </main>
  )
}

export default Content
