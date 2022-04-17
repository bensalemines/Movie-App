import './App.css';
import MovieList from './components/MovieList.js';
import data from './components/data.js';
import Navbar from './components/Navbar.js';
import React,{useState} from 'react';


function App() {
  const [SearchT, setSearchT] = useState("");
  const filterT = (e) => setSearchT(() => e.target.value);
  const [Data,setData]= useState(data);
  const addNewFilm = (el) => setData([...Data, el]);
  
  return (
    <div className="App">
    <Navbar SearchT={filterT} addFilm={addNewFilm}/>
    <MovieList film={SearchT}/>
    </div>
  );
}

export default App;
