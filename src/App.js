import './App.css';
import Header from './components/ui/Header';
import BankGrid from './components/banks/BankGrid';
import CardItem from './components/banks/CardItem';
import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  
  const[items, setItems] = useState([]);
  const[isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(`http://creditcardscanada-api.herokuapp.com/banks`)
      console.log(result.data.map((bank) => bank.creditCards))
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
