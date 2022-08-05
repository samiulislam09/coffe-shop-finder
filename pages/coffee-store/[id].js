import { useRouter } from 'next/router'
import Link from 'next/link'
import coffeDtoresData from '../stores.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faLocationArrow, faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons'

function Coffestore({coffestores}) {
    const router = useRouter()
    console.log("props", coffestores)
    if (router.isFallback) {
        return <div>loading</div>
    }
    return (
        <div>
            <Link href="/"><a>Back to home</a></Link>
            <div className="hero min-h-screen bg-[url('/static/background.png')]">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={coffestores.image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{ coffestores.name }</h1>
                        <p className="py-6"><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>{ coffestores.location }</p>
                        <p className="py-6"><FontAwesomeIcon icon={faStar}></FontAwesomeIcon>1</p>
                        <button className="btn btn-primary">Upvote</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Coffestore;

export function getStaticProps({params}) {
    return {
        props: {
            coffestores: coffeDtoresData.find(coffeStore => {
                return coffeStore.id === params.id;
            })
        }
    }
}
export function getStaticPaths() {
    const paths = coffeDtoresData.map(coffeStore => {
        return {
            params: {
                id: coffeStore.id,
            }
        }
    })
    return {
        paths,
        fallback: true
    }
}