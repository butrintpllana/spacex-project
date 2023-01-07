import { Link } from "react-router-dom"

export default function Error(){
    return(
        <>
            <section className="flex flex-col items-center justify-center text-center h-screen">
                <h1 className="my-5">Error | Content cannot be found!</h1>
                <Link to="/" className="btn">&larr; Back to homepage</Link>
            </section>
        </>
    )
}