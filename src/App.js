import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/ui/Header';
import BankGrid from './components/banks/BankGrid';
import Prefences from './components/ui/Preferences';
import LoginForm from './components/ui/LoginForm';


const App = () => {
  
  const adminUser = {
    email: "test@test.com",
    password: "password"
  }

  const Login = details => {
    if (details.email !== "" && details.password !== "") {
      setUser({
        email: details.email,
      })
    } else {
      alert('All fields must be filled!')
    }
  }

  const Logout = () => {
    setUser({
      email: "", 
      password: ""
    });
  }

  const [user, setUser] = useState({email: "", password: ""})
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
      {(user.email !== "") ? (<><Header Logout={Logout} user={user} />
      <Prefences handleOnChange={(e) => handleOnChange(e)}/>
      <BankGrid isLoading={isLoading} items={items} selection={selection}/></>) : <LoginForm Login={Login} />}
    </div>
  );
}

export default App;
