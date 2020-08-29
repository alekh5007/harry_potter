import React, {useState,useEffect} from 'react'
import axios from 'axios'
import Characters from'../components/Characters'
function Headerone() {
    const [items, setItems] = useState([])

    const callallapidata = () => {

      axios.get('http://hp-api.herokuapp.com/api/characters/students').then(
          (response) => {
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


// useEffect(() => {
//   const fetchItemm = async () => {
    
//     const result = await axios(
//       `http://hp-api.herokuapp.com/api/characters/students`
//     )

//    // console.log(result.data)

//     setItems(result.data)
    
//   }

//   fetchItemm()
// }, [])
    return (
        <div>
        <header className="center">
        <h1>Hogwarts students</h1>

      </header>
      <Characters items={items} />
      </div>
    )
}

export default Headerone
