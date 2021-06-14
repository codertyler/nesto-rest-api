import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/ui/Header';
import BankGrid from './components/banks/BankGrid';
import Prefences from './components/ui/Preferences';


const App = () => {
  
  const[items, setItems] = useState([]);
  const[isLoading, setIsLoading] = useState(true);
  const [selection, setSelection] = useState("showAll");

  const handleOnChange = (e) => {
    const currentSelection = e.target.value;
    setSelection(currentSelection);
    return currentSelection;
}

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(`http://creditcardscanada-api.herokuapp.com/banks`);
      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()

  }, [])

 
  return (
    <div className="container">
      <Header />
      <Prefences handleOnChange={(e) => handleOnChange(e)}/>
      <BankGrid isLoading={isLoading} items={items} selection={selection}/>
    </div>
  );
}

export default App;
