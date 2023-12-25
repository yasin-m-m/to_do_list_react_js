import React from 'react'
import ItemsList from './ItemsList'

const ListItems = ({items,handleChange,handleDelete}) => {
  return (
    <ul className='list'>
    {items.map(item=>(
      <ItemsList item={item}
                 key={item.id}
                 handleChange={handleChange}
                 handleDelete={handleDelete}/>
    ))}
    
    </ul>
  )
}

export default ListItems