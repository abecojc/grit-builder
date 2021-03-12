import {Link} from "react-router-dom"

export const TopNav2 = ()=>(
    <div className=" fixed top-0 w-full flex justify-between border-b-4 border-white h-16 bg-blue-300">
        <div className="pt-3 px-2 m-1 rounded-xl text-white font-mono text-2xl font-sans bg-black">
            Grit
        </div>
        <ul className="p-2 flex justify-between">
            <li className="ml-2">
                <Link to="/">Home</Link>
            </li>
            <li className="ml-2">
                <Link to="/About">About</Link>
            </li>
            <li className="ml-2">
                <Link to="/Contact">Contact</Link>
            </li>
            <li className="ml-2">
                <Link to="/Resource">Resource</Link>
            </li>
            <li className="ml-2">
                <Link to="/Project">Project</Link>
            </li>
            <li className="ml-2">
                <Link to="/GritTest">Test</Link>
            </li>
            <li className="ml-2">
                <Link to="/">Logout</Link>
            </li>

        </ul>
    </div>
)