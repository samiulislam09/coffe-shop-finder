import {useRouter} from 'next/router'
function Coffestore() {
    const router = useRouter()
    return (
        <div>
            Enter{ router.query.id }
        </div>
    );
}

export default Coffestore;

