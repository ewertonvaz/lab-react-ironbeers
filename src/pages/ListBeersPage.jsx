// import NavBar from "../components/NavBar";
import { useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BeerDetails from "../components/BeerDetails";
import Spinner from "../components/Spinner";
const endPoint = "https://ironbeer-api.fly.dev/";
//const endPoint = "https://ih-beers-api2.herokuapp.com/beers/search?q={query}


function ListBeersPage() {
    const [ allBeers, setBeers] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [search, setSearch] = useState("");
    //const [ reload, setReload ] = useState(false);

    async function handleSearch(e){
        e.preventDefault();
        setSearch(e.target.value);
        setLoading(true);
        const response = await axios.get(endPoint + `search?q=${e.target.value}`);
        setBeers(response.data);
        setLoading(false);
    }

    useEffect( () => {
        async function fetchAllBeers(){
            setLoading(true);
            const response = await axios.get(endPoint);
            setBeers(response.data);
            setLoading(false);
        }

        fetchAllBeers();
    },
        []
    );

    return ( 
        <>
            { loading ? <Spinner /> : ""}
            <input className="search-bar" type="text" placeholder="Digite um valor para pesquisar" value={search} onChange={handleSearch} />
            {
                allBeers.map( beer => {
                    return (
                        <Link key={beer._id} to={`/beers/${beer._id}`}>
                            <BeerDetails beer={beer} />
                        </Link>
                    );
                }
                )
            }
        </>
    );
}

export default ListBeersPage;