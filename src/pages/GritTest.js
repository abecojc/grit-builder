import {Footer, TopNav} from "../components/ui"
import {Link} from "react-router-dom";

export const  GritTest = () => (
    <>
        <TopNav/>
        <div className="h-screen p-16 bg-blue-300">
            <p className="text-2xl flex justify-center border-b-2 border-white w-2/5  p-4">Grit Test</p>
            <div className="flex flex-wrap justify-center pt-36">
                <Link to="/Questionnaire">
                    <div className="text-2xl sm:text-center border-4 bg-white rounded-xl border-black shadow-2xl hover:bg-blue-600 m-4 p-4">
                        Questionnaire
                    </div>
                </Link>
                <Link to="/Score">
                    <div className="text-2xl sm:text-center border-4 bg-white rounded-xl border-black shadow-2xl hover:bg-blue-600 m-4 p-4">
                        Score
                    </div>
                </Link>
            </div>
        </div>
        <Footer/>
    </>
)
