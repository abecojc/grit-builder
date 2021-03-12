import {useState} from "react"
import projectData from "../../data/projectData"

export const ProjectResults = () => {
    const [Projects] = useState(projectData)

    return (

        Projects.map(
            (project, index) =>
                <div className="flex bg-blue-300 rounded-xl border-2 p-4 m-2 border-blue-800">
                    <span className="text-2xl">{project.name}</span>
                    <span className="mx-12"> added on </span>
                    <span className="text-2xl ">{project.date_added}</span>

                </div>
        )
    )
}