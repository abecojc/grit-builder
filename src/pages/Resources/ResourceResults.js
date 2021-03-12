import {useState} from "react"
import resourceData from "../../data/resourceData"

export const ResourceResults = () => {
    const [Resources] = useState(resourceData)

    return (

        Resources.map(
            (resource, index) =>
                <div className="flex bg-blue-300 rounded-xl border-2 p-4 m-2 border-blue-800">
                    <span className="text-2xl">{resource.info}</span>
                </div>
        )
    )
}