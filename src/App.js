import './App.css';
import MovieList from './components/MovieList.js';
import data from './components/data.js';
import Navbar from './components/Navbar.js';
import React,{useState} from 'react';
import { Routes , Route} from 'react-router-dom'
import Description from './pages/Description';
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
      <Routes>
      <Route path='/' element={<MovieList film={SearchT} movie={Data} rating={SearchR}/>}/>
       <Route path='/description/:movId' element={<Description movie={data}/>}/>
      </Routes>
    </div>
  );
}

export default App;
