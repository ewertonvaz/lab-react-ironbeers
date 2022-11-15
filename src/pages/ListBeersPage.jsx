// import NavBar from "../components/NavBar";
import { useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BeerDetails from "../components/BeerDetails";
import Spinner from "../components/Spinner";
const endPoint = "https://ironbeer-api.fly.dev/";
//const endPoint = "https://ih-beers-api2.herokuapp.com/beers";


function ListBeersPage() {
    const [ allBeers, setBeers] = useState([]);
    const [ loading, setLoading ] = useState(false);
    //const [ reload, setReload ] = useState(false);
    
    async function fetchAllBeers(){
        setLoading(true);
        const response = await axios.get(endPoint);
        setBeers(response.data);
        setLoading(false);
    }

    useEffect( () => {
        fetchAllBeers();
    },
        []
    );

    return ( 
        <>
            {/* <NavBar /> */}
            { loading ? <Spinner /> : ""}
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