import React, { useRef } from 'react'
import { FaPlus } from "react-icons/fa6";

const AddItem = ({addItem,setAddItem,handleSubmit}) => {
  const inputRef=useRef();
  return (
    <form className='AddItem' onSubmit={handleSubmit}>
    <label htmlFor="addItem">Add New Item</label>
    <input type="text"
            autoFocus
            ref={inputRef}
            id='addItem'
            placeholder='Add New Item'
            value={addItem}
            onChange={(e)=>setAddItem(e.target.value)} />
    <button type='submit' onClick={()=>inputRef.current.focus()}> <FaPlus/> </button>
    </form>
  )
}

export default AddItem