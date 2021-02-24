import {Link} from "react-router-dom"

export const  Projects = () => (
    <div>
        <p>Projects</p>
        <ul>
            <li>
                <Link to="/AddProject">Add Project</Link>
            </li>
            <li>
                <Link to="/SearchProject">Search Project</Link>
            </li>
            <li>
                <Link to="/UpdateProject">Update Project</Link>
            </li>
            <li>
                <Link to="/AllProjects">All Projects</Link>
            </li>
        </ul>

    </div>
)

export class AllProjects {
}

export class UpdateProject {
}

export class SearchProject {
}

export class AddProject {
}