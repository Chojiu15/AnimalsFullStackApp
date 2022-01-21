import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react'

function App() {

  const [animals, setAnimals] = useState([])
  const [animalName, setAnimalName] = useState('') 

  useEffect(() => {
    fetchAnimalsApi()
  }, [])

  const fetchAnimalsApi = async () => {
    await axios.get('http://localhost:3002/api/animals')
    .then(res => setAnimals(res.data))
  }


const addAnimals =async (e) => {
  e.preventDefault()
  await axios.post('http://localhost:3002/api/animals', {name : animalName}, {
    headers: {
      // Overwrite Axios's automatically set Content-Type
      'Content-Type': 'application/json'
    }
  })
  .then(response => console.log(response))
  fetchAnimalsApi()
}

console.log(animalName)




  return (
    <div className="App">
          {animals.map(animal => {
            return(
              <>
                <h1>{animal.name}</h1>
                <p>{animal.category}</p>
              </>
            )
          })}

          <form onSubmit={addAnimals}>
            {/* <input value={newAnimals.category} onChange={(e) => setNewAnimals({...newAnimals, category : e.target.value})} /> */}
            <input value={animalName} onChange={(e) => setAnimalName(e.target.value)} />
            <button type='submit' >
              Add animals
            </button>
          </form>
    </div>
  );
}

export default App;
