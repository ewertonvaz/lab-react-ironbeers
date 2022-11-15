import styles from './BeerMoreDetails.module.css';

function BeerMoreDetails({beer}) {
    return (     
        <div className={styles.wrapper}>
            <img src={beer.image ? beer.image : beer.image_url} alt="beer"/>
            <div>
                <div>
                    <h1>{beer.name}</h1>
                    <p>{beer.attenuation_level}</p>
                </div>
                <div>
                    <h2>{beer.tagline}</h2>
                    <p>{beer.first_brewed}</p>
                </div>
                <p>{beer.description}</p>
                <h3>{beer.contributed_by}</h3>
            </div>
        </div> );
}

export default BeerMoreDetails;