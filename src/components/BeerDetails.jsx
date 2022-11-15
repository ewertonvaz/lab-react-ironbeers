import styles from './BeerDetails.module.css';

function BeerDetails({beer}) {
    return (
        <div className={styles.wrapper}>
            <div>
              <img src={beer.image ? beer.image : beer.image_url} alt="beer"/>              
            </div>

            <div>
                <h1>{beer.name}</h1>
                <h2>{beer.tagline}</h2>
                <h3><strong>Created by: </strong>{beer.contributed_by}</h3>
            </div>
        </div>
      );
}

export default BeerDetails;