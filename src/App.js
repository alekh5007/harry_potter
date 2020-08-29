import React, {useState,useEffect} from 'react';
import './App.css';
import Header from './components/Header'
import Headerone from './components/Headerone'
import Headertwo  from './components/Headertwo'
import axios from 'axios'
import Characters from'./components/Characters'



function App() {
const [items, setItems] = useState([])

const callallapidata = () => {

  axios.get('http://hp-api.herokuapp.com/api/characters').then(
      (response) => {
        console.log("app")
          console.log(response)

          setItems(response.data)
      },

      (error) => {
          console.log(error)
          //toast.warning("something went wrong");
      }
  )
}



useEffect(() => {
  callallapidata();
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
