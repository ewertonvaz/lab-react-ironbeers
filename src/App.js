import './App.css';
import { Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ListBeersPage from './pages/ListBeersPage';
import RandomBeerPage from './pages/RandomBeerPage';
import BeerDetailsPage from './pages/BeerDetailsPage';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={ <HomePage /> } />
      <Route path="/beers" element={ <ListBeersPage /> } />
      <Route path="/random-beer" element={ <RandomBeerPage /> } />

      <Route path="/beers/:beerId" element={ <BeerDetailsPage />} />
    </Routes>
    </div>
  );
}

export default App;
