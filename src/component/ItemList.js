import React from 'react'
import {useState} from 'react'
import {FaTrashAlt} from 'react-icons/fa'
const ItemList = ({items,setItems, handleCheck, handleDelete}) => {
  return (
          <ul className='p4'>
              {items.map(item => (
                <li className='flex text-3xl p-4 bg-[#d3d2d2] mb-4' key={item.id}>
                  <input 
                      type="checkbox"
                      className='w-[40px]'
                      onChange={()=> {handleCheck(item.id)}}
                      checked={item.checked}
                  />
                  <label 
                    style ={item.checked?{textDecoration:"line-through"}: null}
                    onDoubleClick={()=>handleCheck(item.id)}
                    className=' cursor-pointer flex-1 pl-4 flex items-center'>
                    {item.item}
                  </label>
                  <button onClick={() => handleDelete(item.id)}><FaTrashAlt className='hover:text-red-600  cursor-pointer'  size={40}/></button>
                </li>
              ))}
            </ul>
  )
}

export default ItemList
