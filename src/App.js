import AddItem from "./Components/AddItem";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import SearchItem from "./Components/SearchItem";
import React, { useEffect, useState } from 'react'



function App() {
  const [items,setItems] =useState(JSON.parse(localStorage.getItem('todo_list')) || [])
  const [addItem,setAddItem]=useState('') 
  const [search,setSearch]=useState('')
  const [activeNav, setActiveNav] = useState('all');

  const [completedItems, setCompletedItems] = useState([]);
  const [notCompletedItems, setNotCompletedItems] = useState([]);

  useEffect(() => {
    const filteredItems = items.filter(item => item.item.toLowerCase().includes(search.toLowerCase()));

    setCompletedItems(filteredItems.filter(item => item.checked));
    setNotCompletedItems(filteredItems.filter(item => !item.checked));
  }, [items, search]);


      const handleChange=(id)=>{
          const listItems=items.map(item=>item.id===id ? {...item, checked:!item.checked}:item)
          setItems(listItems)

      }

      const handleDelete = (id) =>{
          
            const listItems=items.filter(item=>item.id!==id?item:null);
            setItems(listItems)
            localStorage.setItem('todo_list', JSON.stringify(listItems));
      }
      
    
      const addNewItem = (addItem) => {
      const id =items.length ? items[(items.length)-1].id+1:1;
      const newItem={id,checked:false,item:addItem}
      const newList=[...items,newItem]
      setItems(newList);
      localStorage.setItem('todo_list', JSON.stringify(newList));

    }

      const handleSubmit =(e)=>{
        e.preventDefault();
        if(!addItem)return;
        addNewItem(addItem);
        setAddItem("")
        
    }

    const handleNavChange = navOption => {
      setActiveNav(navOption);
    };
  
    let displayedItems = [];
  
    if (activeNav === 'all') {
      displayedItems = items;
    } else if (activeNav === 'completed') {
      displayedItems = completedItems;
    } else if (activeNav === 'notCompleted') {
      displayedItems = notCompletedItems;
    }

  
  return (
    <div className="App">
    
      <Header title={"TO DO LIST APP"}/>
      <AddItem addItem={addItem}
                setAddItem={setAddItem}
                handleSubmit={handleSubmit}/>
      <Nav items={items}
      activeNav={activeNav}
      handleNavChange={handleNavChange}/>
      <SearchItem search={search}
                  setSearch={setSearch}/>
      <Content items={displayedItems.filter(item=>(item.item).includes(search))}
                handleChange={handleChange}
                handleDelete={handleDelete}
                
                />
      <Footer />
      
    </div>
  );
}

export default App;
