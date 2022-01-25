import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

const CoffeeStore: NextPage = () => {
    const router = useRouter();
    const pid: string | string[] | undefined = router.query.id;
    return (
        <article>
            <p>This is a coffee store page {pid}</p>
            <Link href="/">Back to Home</Link>
        </article>
    )
}

export default CoffeeStore;