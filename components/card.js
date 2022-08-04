import Link from "next/link";
import Image from 'next/image'
import styles from '../styles/Card.module.css'

function Card({coffesoreInfo}) {
    return (
        <div className={styles.card}>
            <Link href={`coffee-store/${coffesoreInfo.id}`}>
                <a className={styles.a}>
                    <h2 className={styles.h2}>{coffesoreInfo.name}</h2>
                    <Image src={coffesoreInfo.image} width={280} height={180} alt={coffesoreInfo.alt} />
                </a>
            </Link>
        </div>
    );
}

export default Card;