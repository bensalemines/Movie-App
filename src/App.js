import './App.css';
import MovieList from './components/MovieList.js';
import data from './components/data.js';
import Navbar from './components/Navbar.js';
import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [SearchT, setSearchT] = useState("");
  const [SearchR , setSearchR] = useState(0)
  const filterT = (e) => setSearchT(() => e.target.value);
  const [Data,setData]= useState(data);
  const addNewFilm = (el) => setData([...Data, el]);
  const filterR = (numberofstars) => setSearchR(numberofstars)
  return (
    <div className="App">
      <Navbar SearchT={filterT} addFilm={addNewFilm} SearchR={filterR}/>
      <MovieList film={SearchT} movie={Data} rating={SearchR}/>
    </div>
  );
}

export default App;
