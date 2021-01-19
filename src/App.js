import React,{useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import CharacterItem from './components/characters/CharacterItem'



const App = () => {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect (() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);

      setItems(result.data);
      setIsLoading(false);
    }
    fetchItems();
  },[])

  return (
    <div className="container">
      <Header/>
      <CharacterGrid
       isLoading={isLoading}
       items={items}
      />
    </div>
  );
}


  

export default App;
