import React, {useState,useEffect} from 'react';
import './App.css';
import Header from './components/Header'
import Headerone from './components/Headerone'
import Headertwo  from './components/Headertwo'
import axios from 'axios'
import Characters from'./components/Characters'



function App() {
const [items, setItems] = useState([])




useEffect(() => {
  const fetchItems = async () => {
    
    const result = await axios(
      `http://hp-api.herokuapp.com/api/characters`
    )

   //  console.log(result.data)

    setItems(result.data)
    
  }

  fetchItems()
}, [])

  return (
    <div className='container'>
 
 <Header/>
<Characters items={items} />
<Headerone/>
<Headertwo/>
    </div>
  );
}

export default App;
