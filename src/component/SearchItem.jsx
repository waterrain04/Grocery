import React from 'react'

const SearchItem = ({search,setSearch}) => {
  return (
    <form action="" className='p-4' onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search"></label>
      <input 
      className='border-2 border-black w-full h-[3rem] p-6 font-bold '
        type="text"
        id="search"
        role="searchbox"
        placeholder='Search Item'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  )
}

export default SearchItem
