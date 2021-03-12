import {Footer, TopNav} from "../../components/ui";
import {Link} from "react-router-dom";

export const SavedResources = () => (
    <>
        <TopNav/>
        <div className="bg-blue-300 h-screen p-20 text-3xl text-center">
            Saved Resources
            <hr/>
            <div className="m-4 p-2">
            <a target="confidence" href="https://characterlab.org/tips-of-the-week/cultivating-confidence/">Cultivating confidence</a>
            </div>
            <div className="m-4 p-2">
            <a target="confidence" href="https://characterlab.org/tips-of-the-week/can-i-or-cant-i/">Hesitation</a>
           </div>
        </div>
        <Footer/>
    </>
)