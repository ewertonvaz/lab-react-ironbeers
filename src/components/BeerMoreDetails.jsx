function BeerMoreDetails({beer}) {
    return (     
        <div style={{
            border: "1px solid gray",
            display: "flex",
            flexDirection: "column"
        }}>
            <img src={beer.image} alt="beer" width="15%" />
            <div style={{display: "flex", flexDirection:"column"}}>
                <h1>{beer.name}</h1>
                <h2>{beer.tagline}</h2>
                <h3>{beer.contributed_by}</h3>
                <p>{beer.attenuation_level}</p>
                <p>{beer.first_brewed}</p>
                <p>{beer.description}</p>
            </div>
        </div> );
}

export default BeerMoreDetails;