import React from 'react'

const SearchItem = ({search,setSearch}) => {
  return (
    <form className="SearchItem" onSubmit={(e)=>e.preventDefault()}>
    <label htmlFor="search">Search</label>
    <input 
          type="text"
          required
          autoFocus
          id='search'
          placeholder='Search Item'
          value={search}
          onChange={(e)=>setSearch(e.target.value)} />
    </form>
  )
}

export default SearchItem