import { useParams } from 'react-router-dom';
import NavBar from "../components/NavBar";
import { useState, useEffect} from "react";
import axios from "axios";
import BeerMoreDetails from "../components/BeerMoreDetails";
const endPoint = "https://ironbeer-api.fly.dev/";

function BeerDetailsPage() {
    const { beerId } = useParams();
    const [ beer, setBeer] = useState([]);
    
    async function fetchBeerById(){
        //setLoading(true);
        console.log(endPoint + beerId);
        const response = await axios.get(endPoint + beerId);
        setBeer(response.data);
        //setLoading(false);
    }
    

    useEffect( () => {
        fetchBeerById();
    },
        []
    );

    return ( 
        <>
            <NavBar />
            <BeerMoreDetails beer={beer} />
        </>
     );
}

export default BeerDetailsPage;