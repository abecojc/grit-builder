import {Footer, TopNav2} from "../../components/ui";

import {AllProjects} from "./AllProjects";

export const AddProject = () => {

    return (

        <>
            <TopNav2/>
            <div className="flex flex-col items-center justify-center bg-blue-300 ">
                <div className="p-4 mt-12 w-screen">Add New long term Project</div>

                <div className="w-full h-full mb-24 p-4 mx-12">
                    <form className="border-white border-2 rounded-xl">
                        <div className="flex flex-col items-center justify-between">
                            <div className="m-2 w-full items-center flex flex-col">
                                <label htmlFor="name">A name for your Project</label>
                                <input type="text" className="form w-3/4 rounded-xl p-2 m-2" placeholder="What's your project's name"/>
                            </div>
                            <div className="m-2 p-2 w-full items-center flex flex-col">
                                <label htmlFor="subject">Project Details</label>
                                <textarea id="subject" name="subject" className="h-full m-2 rounded-xl p-2 w-full"
                                          placeholder="Write your project here"> </textarea>
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