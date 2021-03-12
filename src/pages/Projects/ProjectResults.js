import {useState} from "react"
import projectData from "../../data/projectData"

export const ProjectResults = () => {
    const [Projects] = useState(projectData)

    return (

        Projects.map(
            (project, index) =>
                <div className="flex flex-col flex-wrap bg-blue-300 rounded-xl border-2 p-4 m-2 border-blue-800">
                    <div className="text-2xl border-b-2 border-black w-full">{project.name}</div>
                   <div>
                        <span className="mx-12"> Date added: </span>
                        <span className="text-2xl ">{project.date_added}</span>
                   </div>
                    <p className="text-2xl">{project.description}</p>
                    <p>
                        <span className="mx-12"> Timeline: </span>
                        <span className="text-2xl ">{project.duration}</span>
                    </p>
                    </div>
        )
    )
}