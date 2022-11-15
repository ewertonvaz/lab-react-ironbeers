import { Link } from "react-router-dom";
import HomeCard from "../components/HomeCard";
import beersImg from "../assets/beers.png";
import randomBeerImg from "../assets/random-beer.png"
import newBeerImg from "../assets/new-beer.png"

function HomePage() {
    return ( <div style={{
        display: "flex",
        flexDirection: "column"
    }}>
        <Link to="/beers">
            <HomeCard title="All Beers" img={beersImg} />
        </Link>
        <Link to="/random-beer">
            <HomeCard title="Random Beer" img={randomBeerImg} />
        </Link>
        <Link to="/new-beer">
            <HomeCard title="New Beer" img={newBeerImg} />
        </Link>
    </div> );
}

export default HomePage;