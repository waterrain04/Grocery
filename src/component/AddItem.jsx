import React from 'react'
import {FaPlus} from 'react-icons/fa'
import {useRef} from 'react'
const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  const inputRef = useRef();
  return (
    <form action="" className='flex justify-center p-4 items-center font-bold' onSubmit={handleSubmit}>
      <label htmlFor="addItem"></label>
      <input 
        className='border-2 border-black p-4 flex-1'
        autoFocus
        ref={inputRef}
        id="addItem"
        type="text"
        placeholder='Add Item'
        required
        value = {newItem}
        onChange = {(e) =>  {
          e.preventDefault();
          setNewItem(e.target.value)} }
      />
      <button
        type='submit'
        aria-label='Add Item' 
        onClick={()=> inputRef.current.focus()}
        className=' text-3xl border-2 border-black ml-4 p-3 hover:bg-green-900 hover:text-white'>
          <FaPlus/>
        </button>
    </form>
  )
}

export default AddItem
