import {Link} from "react-router-dom"
import {Footer, TopNav} from "../components/ui"

export const Resource = () => (
    <>
    <TopNav/>
    <div className="h-screen p-16 bg-blue-300">
        <p className="text-2xl flex justify-center border-b-2 border-white w-2/5  p-4">Resources Area</p>
        <div className="flex flex-wrap justify-center pt-36">
            <Link to="/SavedResources">
                <div className="text-2xl sm:text-center border-4 bg-white rounded-xl border-black shadow-2xl hover:bg-blue-600 m-4 p-4">
                    Saved Resources
                </div>
            </Link>
            <Link to="/SearchResources">
                <div className="text-2xl sm:text-center border-4 bg-white rounded-xl border-black shadow-2xl hover:bg-blue-600 m-4 p-4">
                    Find Resources
                </div>
            </Link>
            <Link to="/ResourceDetail">
                <div className="text-2xl sm:text-center border-4 bg-white rounded-xl border-black shadow-2xl hover:bg-blue-600 m-4 p-4">
                    Resource Detail
                </div>
            </Link>
            <Link to="/AllResources">
                <div className="text-2xl sm:text-center border-4 bg-white rounded-xl border-black shadow-2xl hover:bg-blue-600 m-4 p-4">
                    Resources Result
                </div>
            </Link>
        </div>
    </div>
    <Footer/>
    </>
)
// export default Resource;
