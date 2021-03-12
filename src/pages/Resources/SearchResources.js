import {Footer, TopNav} from "../../components/ui";
import {SearchHead} from "./SearchHead";
import {ResourceResults} from "./ResourceResults";

export const SearchResources = () => (
    <>
        <TopNav/>
            <div className=" h-screen p-16 text-center">

                <p className="m-2 text-3xl">Resources Search</p>
                <hr/>

                <SearchHead initialQuery="Resources"/>
                <ResourceResults/>
            </div>
        <Footer/>
    </>
)