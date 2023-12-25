import React from 'react'
import { FaTrashCan } from 'react-icons/fa6'

const ItemsList = ({item,handleChange,handleDelete}) => {
  return (
    <li key={item.id}>
      <input type="checkbox" checked={item.checked} onChange={()=>handleChange(item.id)}/>
      <label onDoubleClick={()=>handleChange(item.id)} style={(item.checked?{textDecoration:'line-through'}:null)}>{item.item}</label>
      <FaTrashCan onClick={()=>handleDelete(item.id)}/> 
      </li>
  )
}

export default ItemsList