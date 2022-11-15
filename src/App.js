import './App.css';
import { Routes, Route, Outlet} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ListBeersPage from './pages/ListBeersPage';
import RandomBeerPage from './pages/RandomBeerPage';
import BeerDetailsPage from './pages/BeerDetailsPage';
import NavBar from './components/NavBar';

function App() {
  // return (
  //   <div className="App">
  //    <Routes>
  //     <Route path="/" element={ <HomePage /> } />
  //     <Route path="/beers" element={ <ListBeersPage /> } />
  //     <Route path="/random-beer" element={ <RandomBeerPage /> } />

  //     <Route path="/beers/:beerId" element={ <BeerDetailsPage />} />
  //   </Routes>
  //   </div>
  // );

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        {/* NESSE MOMENTO ADICIONO UM ROUTE SEM PATH E DIGO QUE ELE IRÁ RENDERIZAR O ELEMENT E, NESTE CASO O HEADER, PARA TODOS OS ROUTES ABAIXO DELE QUE DEREM MATCH */}
        <Route element={<><NavBar /> {/* O Header sendo renderizado */} <Outlet /> {/* Outlet será substituído pelo element dos route filho */}</>}>
          <Route path="/beers" element={<ListBeersPage />}></Route>
          <Route path="/beers/:beerId" element={<BeerDetailsPage />}></Route>
          <Route path="/random-beer" element={ <RandomBeerPage /> } />
          {/* ...*/}
          {/* Demais Route com Header*/}
        </Route>
        {/*Path Coringa - sem Header*/}
        <Route path="*" element={<h1>ERROR 404</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
