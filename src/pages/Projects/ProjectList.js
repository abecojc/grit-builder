import {useState} from "react"
import projectData from "../../data/projectData"
import { Link } from "react-router-dom"


export const ProjectList = () => {
    const [projects] = useState(projectData)

    return (
        projects.map(
            (project, index) =>
                <Link to="/ProjectDetail">
                <div className=" bg-blue-300 rounded-xl shadow-xl border-2 border-black p-4 my-2">
                    <p className="">
                        <span className="text-2xl">{project.name}</span>
                    </p>
                        <span className="mr-12 "> created on </span>
                        <span className=" text-xl">{project.date_added}</span>

                    <hr/>
                    <p className=" text-xl ">Description: {project.description}</p>
                </div>
            </Link>
        )

    )
}
