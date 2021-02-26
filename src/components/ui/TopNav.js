import {Link} from "react-router-dom"

export const TopNav = ()=>(
    <div className=" fixed top-0 w-screen flex justify-between h-12">
        <div className="p-2 w-1/5 bg-black">

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
                <Link to="/SignIn">Sign in</Link>
            </li>
            <li className="ml-2">
                <Link to="/Signup">Sign up</Link>
            </li>
        </ul>
    </div>
)