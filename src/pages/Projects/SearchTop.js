import {useState} from "react"
import {ProjectResults} from "./ProjectResults";

export const SearchTop = ({initialQuery}) => {
    const [query, setQuery] = useState(initialQuery)

    const watchInput = (event) => {
        setQuery(event.target.value)
    }

    return (
        <>
            <div className="m-2 ">
                Search by Project Name:
                <span className="text-blue-800 text-2xl font-bold mx-6" >{query}</span>
            </div>
            <form onSubmit={ProjectResults}>
                <input type="text" className="border-black p-2 shadow-2xl border-2 w-full" onChange={watchInput}/>
                <submit type="submit" className="bg-green-300 hover:shadow-2xl w-24 h-12 p-6 border-2 border-black"/>
                <div className="text-2xl m-6 text-center border-b-4 border-blue-800 ">Search results:</div>
            </form>
        </>
            )
}