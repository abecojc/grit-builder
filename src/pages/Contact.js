import {Footer, TopNav} from "../components/ui"

export const Contact= () => (
    <>
        <TopNav/>
    <div className="flex flex-col justify-center bg-blue-300 ">
        <div className="p-4 mt-12 w-screen">Contact Us</div>
       {/*// <hr className="w-screen bg-white"/>*/}
        <div className="w-96  mb-24 mx-12">
            <form className="border-white border-2 rounded-xl">
                <div className="flex flex-col justify-between">
                    <div className="m-2 flex flex-col">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" className="form rounded-xl p-2 m-2" placeholder="Your name.."/>
                    </div>
                    <div className="m-2 flex flex-col ">
                        <label htmlFor="email">Email Address</label>
                        <input type="text" id="email" className="emailAddress rounded-xl m-2 p-2 px-12" placeholder="Your email address.."/>
                    </div>
                    <div className="m-2 flex flex-col">
                        <label htmlFor="subject">Comment</label>
                        <textarea id="subject" name="subject" className="h-24  m-2 rounded-xl p-2 w-9/10" placeholder="Write here"> </textarea>
                     </div>

                    <button className="m-4 bg-blue-800  rounded-xl p-2 shadow-2xl" type="submit">Submit</button>
                </div>
            </form>
        </div>

    </div>
        <Footer/>
        </>
)
