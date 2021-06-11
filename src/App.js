import './App.css';
import Header from './components/ui/Header'
import BankGrid from './components/banks/BankGrid'
import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  
  const[items, setItems] = useState([]);
  const[isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(`http://creditcardscanada-api.herokuapp.com/banks`)
      
      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()

  }, [])

 
  return (
    <div className="container">
      <Header />
      <BankGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
