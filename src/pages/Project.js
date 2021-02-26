
import {Footer, TopNav} from "../components/ui"

export const  Project = () => (
    <>
        <TopNav/>
            <div className="h-screen bg-blue-300">
                <p className="text-2xl flex justify-center m-12 p-6">Projects Area</p>
                <div className="text-2xl m-6 p-6">Add your Project</div>
                <div className="text-2xl m-6 p-6">Search for a project</div>
                <div className="text-2xl m-6 p-6">Update a project</div>
                <div className="text-2xl m-6 p-6">All projects</div>

            </div>
        <Footer/>
    </>
)
export default Project;