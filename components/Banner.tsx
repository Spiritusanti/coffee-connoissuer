import { FC } from "react";
import styles from "../styles/banner.module.css";

interface BannerProps {
    buttonText: string;
    handleOnClick: () => void;
}


const Banner: FC<BannerProps> = (props) => {

    return (
        <section className={styles.container}>
            <h1 className={styles.title}>
                <span className={styles.title1}>Coffee</span>
                <span className={styles.title2}>Connoissuer</span>
            </h1>
            <p className={styles.subTitle}>Discover your local coffee shops</p>
            <div className={styles.buttonWrapper}>
                <button className={styles.button} onClick={props.handleOnClick}>{props.buttonText}</button>
            </div>
        </section>
    )
}

export default Banner;