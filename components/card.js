import Link from "next/link";
import Image from 'next/image'
import styles from '../styles/Card.module.css'

function Card({coffesoreInfo}) {
    return (
        <div className="card w-96 bg-blue-600 cursor-pointer shadow-xl">
            <Link href={`coffee-store/${coffesoreInfo.id}`}>
                <div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{coffesoreInfo.name}</h2>
                        <p>{coffesoreInfo.location}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Card;