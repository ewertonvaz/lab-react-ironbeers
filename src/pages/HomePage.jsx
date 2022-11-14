import { Link } from "react-router-dom";
import HomeCard from "../components/HomeCard";
import beersImg from "../assets/beers.png";
import randomBeerImg from "../assets/random-beer.png"

function HomePage() {
    return ( <div style={{
        display: "flex",
        flexDirection: "column",
        width: "50vw"
    }}>
        <Link to="/beers">
            <HomeCard title="All Beers" img={beersImg} />
        </Link>
        <Link to="/random-beer">
            <HomeCard title="Random Beer" img={randomBeerImg} />
        </Link>
    </div> );
}

export default HomePage;