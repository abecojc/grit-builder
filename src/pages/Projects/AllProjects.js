import {Footer, TopNav2} from "../../components/ui";
import {ProjectList} from "./ProjectList";

export const AllProjects = () => {
    return (
        <>
            <TopNav2/>
                <div className="h-screen p-16">
                    <div className="border-b-2 border-black w-3/5 text-4xl p-4 ">
                        All your long term projects
                    </div>
                   <ProjectList/>
                </div>

            <Footer/>
       </>
    )
}
