import ListItems from './ListItems'

const Content = ({items,handleChange,handleDelete}) => {

  return (
    <div className='Content'>
    {items.length ?(
    <ListItems items={items}
                handleChange={handleChange}
                handleDelete={handleDelete}/>
    ):<p style={{fontSize:'22px', marginTop:'50px',}}><b>Your List Is Empty. Please Check Total Items Count or <br></br>Add New Item</b></p>}
    </div>
  )
}

export default Content