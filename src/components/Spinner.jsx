import styles from "./Spinner.module.css";

function Spinner({width, height}) {
    if (!width) { width = "30px"};
    if (!height) { height = "30px"};

    return ( 
        <div className={styles["sk-fading-circle"]} style={{width: width, height: height}}>
            <div className={`${styles["sk-circle2"]} ${styles["sk-circle"]}`}></div>
            <div className={`${styles["sk-circle3"]} ${styles["sk-circle"]}`}></div>
            <div className={`${styles["sk-circle1"]} ${styles["sk-circle"]}`}></div>
            <div className={`${styles["sk-circle4"]} ${styles["sk-circle"]}`}></div>
            <div className={`${styles["sk-circle5"]} ${styles["sk-circle"]}`}></div>
            <div className={`${styles["sk-circle6"]} ${styles["sk-circle"]}`}></div>
            <div className={`${styles["sk-circle7"]} ${styles["sk-circle"]}`}></div>
            <div className={`${styles["sk-circle8"]} ${styles["sk-circle"]}`}></div>
            <div className={`${styles["sk-circle9"]} ${styles["sk-circle"]}`}></div>
            <div className={`${styles["sk-circle10"]} ${styles["sk-circle"]}`}></div>
            <div className={`${styles["sk-circle11"]} ${styles["sk-circle"]}`}></div>
            <div className={`${styles["sk-circle12"]} ${styles["sk-circle"]}`}></div>
      </div>
     );
}

export default Spinner;