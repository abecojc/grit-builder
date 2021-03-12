import {Footer, TopNav2} from "../../components/ui";
import {AllResources} from "../Resources";
import {Link} from "react-router-dom";

export const ResultBox = () => {

 const LinkResources = (e)=>{
         e.preventDefault();
       window.alert("Thanks for submitting your Grit Scale")
 }

    return (

        <>
            <TopNav2/>
            <div className="flex flex-col items-center justify-center bg-blue-300 ">
                <div className="p-16 mt-12 w-screen">
                    <a target=" " href="https://angeladuckworth.com/grit-scale/" >Input your Grit Scale result </a>
                </div>

                <div className="w-full h-full mb-24 p-4 mx-12">
                    <form className="border-white border-2 rounded-xl" onSubmit={LinkResources}>
                        <div className="flex flex-col items-center justify-between">
                            <div className="m-2 w-full items-center flex flex-col">
                                <label htmlFor="name">Enter Grit Scale here</label>
                                <input type="text" className="form w-3/4 rounded-xl p-2 m-2 text-center " placeholder="Your percent grit Scale"/>
                            </div>
                            <button className="m-4 bg-blue-800 w-2/5 text-white rounded-xl p-2 shadow-2xl" type="submit">Submit</button>
                        </div>
                    </form>
                </div>

            </div>
            <Footer/>
        </>
    )
}