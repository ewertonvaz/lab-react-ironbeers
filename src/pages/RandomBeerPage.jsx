// import NavBar from "../components/NavBar";
import { useState, useEffect} from "react";
import axios from "axios";
import BeerMoreDetails from "../components/BeerMoreDetails";
import Spinner from "../components/Spinner";
const endPoint = "https://ironbeer-api.fly.dev/random";
//const endPoint = "https://ih-beers-api2.herokuapp.com/beers/random";

function RandomBeerPage() {
    const [ beer, setBeer] = useState([]);
    const [ loading, setLoading ] = useState(false);  

    useEffect( () => {
        async function fetchBeerById(){
            setLoading(true);
            const response = await axios.get(endPoint);
            setBeer(response.data);
            setLoading(false);
        }

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

export default RandomBeerPage;