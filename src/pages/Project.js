import {Link} from "react-router-dom"
import {Footer, TopNav} from "../components/ui"

export const  Project = () => (
    <>
        <TopNav/>
          <div className="h-screen p-16 bg-blue-300">
                <p className="text-2xl flex justify-center border-b-2 border-white w-1/5  p-4">Projects Area</p>
            <div className="flex justify-center pt-44">
                <div className="text-2xl sm:overflow-auto w-1/5 border-2 bg-white rounded-xl border-black shadow-2xl hover:bg-blue-600 m-4 p-4">
                    <Link to="/AddProject">Add a Project</Link>
                </div>
                <div className="text-2xl w-1/5 border-2 bg-white rounded-xl border-black shadow-2xl hover:bg-blue-600 m-4 p-4">
                    <Link to="/SearchProject">Find a project</Link>
                </div>
                <div className="text-2xl w-1/5 border-2 bg-white rounded-xl border-black shadow-2xl hover:bg-blue-600 m-4 p-4">
                    <Link to="/UpdateProject">Edit a project</Link>
                </div>
                <div className="text-2xl w-1/5 border-2 bg-white rounded-xl border-black shadow-2xl hover:bg-blue-600 m-4 p-4">
                    <Link to="/AllProjects">All projects</Link>
                </div>
            </div>
          </div>
        <Footer/>
    </>
)
export default Project;