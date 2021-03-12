import {Footer, TopNav} from "../../components/ui";
import {ResourceList} from "./ResourceList";

export const AllResources = () => (
    <>
        <TopNav/>
        <div className=" h-screen p-16 text-3xl text-center">
            <p className="m-2 "> Resource Results</p>
            <hr/>
            <ResourceList/>
        </div>
        <Footer/>
    </>
)