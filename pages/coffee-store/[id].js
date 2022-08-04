import { useRouter } from 'next/router'
import Link from 'next/link'
function Coffestore() {
    const router = useRouter()
    return (
        <div>
            <Link href="/"><a>Back to home</a></Link>
            Enter{ router.query.id }
        </div>
    );
}

export default Coffestore;

