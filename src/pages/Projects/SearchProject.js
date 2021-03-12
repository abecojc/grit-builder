import {Footer, TopNav2} from "../../components/ui";
import { ProjectResults } from "./ProjectResults"
import { SearchTop } from "./SearchTop"

export const SearchProject = () => (
        <>
            <TopNav2/>
            <div className=" h-screen p-16 text-center">
                <p className="m-2 text-3xl">Projects Search</p>
                <hr/>
                <SearchTop initialQuery="Projects"/>
                {/*<ProjectResults/>*/}
            </div>
            <Footer/>
        </>
)
