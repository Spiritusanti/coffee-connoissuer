import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import cls from "classnames";
import styles from "./Card.module.css";

interface CardProps {
    name: string;
    imgUrl: string;
    link: string;
    className: string;
}


const Card: FC<CardProps> = (props) => {
    return (
        <Link href={props.link || "/"} passHref>
            <a className={styles.cardLink}>
                <div className={cls(styles.container, "glass", props.className)}>
                    <div className={styles.cardHeaderWrapper}>
                        <h2 className={styles.cardHeader}>{props.name}</h2>
                    </div>
                    <div className={styles.cardImageWrapper}>
                        <Image className={styles.cardImage} src={props.imgUrl || "/../public/static/background.png"} alt="coffee shop image" width={260} height={160} />
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default Card;