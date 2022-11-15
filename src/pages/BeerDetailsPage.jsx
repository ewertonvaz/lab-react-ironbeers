import { useParams } from 'react-router-dom';
// import NavBar from "../components/NavBar";
import { useState, useEffect} from "react";
import axios from "axios";
import BeerMoreDetails from "../components/BeerMoreDetails";
import Spinner from '../components/Spinner';
const endPoint = "https://ironbeer-api.fly.dev/";
//const endPoint = "https://ih-beers-api2.herokuapp.com/beers/";

function BeerDetailsPage() {
    const { beerId } = useParams();
    const [ beer, setBeer] = useState([]);
    const [ loading, setLoading ] = useState(false);
    
    async function fetchBeerById(){
        setLoading(true);
        console.log(endPoint + beerId);
        const response = await axios.get(endPoint + beerId);
        setBeer(response.data);
        setLoading(false);
    }

    useEffect( () => {
        fetchBeerById();
    },
        []
    );

    return ( 
        <>
            {/* <NavBar /> */}
            { loading ? <Spinner /> : ""}
            <BeerMoreDetails beer={beer} />
        </>
     );
}

export default BeerDetailsPage;