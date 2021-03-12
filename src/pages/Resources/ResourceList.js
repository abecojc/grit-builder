import {useState} from "react"
import resourceData from "../../data/resourceData"
import { Link } from "react-router-dom"

export const ResourceList = () => {
    const [resources] = useState(resourceData)

    return (
        resources.map(
            (resource, index) =>
                <Link to="/">
                    <div className=" bg-blue-300 rounded-xl shadow-xl border-2 border-black p-4 my-2">

                        <p className=" text-xl ">Description: {resource.info}</p>
                        <hr/>

                    </div>
                </Link>
        )

    )
}