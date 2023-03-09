import { useState,useEffect} from "react";
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
function App() {

  const [items ,setItems] =  useState(JSON.parse(localStorage.getItem('shoppingList')))
    const[ newItem, setNewItem] = useState("");
    const [search, setSearch] = useState("");

    const handleSubmit = (e) =>{
      e.preventDefault();
      if(!newItem) return 
      addItem(newItem)
      setNewItem("")
    }
  
    const addItem = (item) =>{
      const id = items.length ? items[items.length-1].id+1 : 1
      const myNewItem = { id, checked:false, item}
      const listItems = [...items, myNewItem]
      setItems(listItems)
      localStorage.setItem("shoppingList", JSON.stringify(listItems))
    }
  
    const handleCheck = (id) =>{
      const listItems = items.map(item => item.id === id ? {...item, checked:!item.checked}: item )
      setItems(listItems)
      localStorage.setItem("shoppingList", JSON.stringify(listItems))
    }
  
    const handleDelete = (id) => {
      const listItems = items.filter ( item => item.id !==id )
      setItems(listItems)
      localStorage.setItem("shoppingList", JSON.stringify(listItems))
    }
  
  return (
    <div className="App">
      <div className="max-w-[1024px] w-[90%] mx-auto border-2 border-blue h-screen flex flex-col justify-between" >
      <Header />
      <AddItem newItem={newItem} setNewItem ={setNewItem} handleSubmit={handleSubmit} />
      <SearchItem search={search} setSearch={setSearch}/>
      <Content items={
        items.filter(item=>
        ((item.item).toLowerCase()).includes(search.toLocaleLowerCase()))} 
        
        setItems={setItems} handleCheck={handleCheck} handleDelete={handleDelete} />
      <Footer items={items} />
      </div>
    </div>
  );
}

export default App;
