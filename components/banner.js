import Image from "next/image";
import bannerImg from '../public/static/banner1.png'
import styles from '../styles/Banner.module.css'

function Banner(props) {
    const handleBannerBtnClick = () => {
        console.log("button clicked")
    }
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <h1>Find Coffee Shop</h1>
                <p>discover your local coffee shops</p>
                <button className={styles.findbtn} onClick={props.handleOnBannerClick}>{ props.buttonText }</button>
            </div>
            <Image src={bannerImg}></Image>
        </div>
    );
}

export default Banner;