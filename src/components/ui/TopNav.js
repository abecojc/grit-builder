import {Link} from "react-router-dom"

export const TopNav = ()=>(
    <div className=" fixed top-0 w-full flex justify-between h-16 bg-blue-300">
        <div className="p-4 m-2 rounded-xl text-white font-bold font-serif bg-black">
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
                <Link to="/Resources">Resources</Link>
            </li>
            <li className="ml-2">
                <Link to="/Project">Project</Link>
            </li>
            <li className="ml-2">
                <Link to="/Test">Test</Link>
            </li>
            <li className="ml-2">
                <Link to="/SignIn">Member</Link>
            </li>
            <li className="ml-2">
                <Link to="/Signup">Register</Link>
            </li>

        </ul>
    </div>
)