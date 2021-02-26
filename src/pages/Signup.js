import {Footer, TopNav} from "../components/ui"

export const  Signup = () => (
    <>
        <TopNav/>
    <div>
        <p>Sign Up</p>

        <div className="w-96 border-2 bg-blue-300 border-black rounded-xl mt-24 mb-24 mx-12">
            <form className="border-white border-2 rounded-xl">
                <div className="flex flex-col justify-between">

                    <div className="m-2 flex flex-col ">
                        <label htmlFor="email">Email Address</label>
                        <input type="text" id="email" className="emailAddress rounded-xl m-2 p-2 px-12" placeholder="Your email address.."/>
                    </div>
                    <div className="m-2 flex flex-col">
                        <label htmlFor="name">Password</label>
                        <input type="text" className="form rounded-xl p-2 m-2" placeholder="Your password"/>
                    </div>
                    <div className="m-2 flex flex-col">
                        <label htmlFor="name">Verify Password</label>
                        <input type="text" className="form rounded-xl p-2 m-2" placeholder="Reenter Your password"/>
                    </div>
                    <button className="m-4 bg-blue-800  rounded-xl p-2 shadow-2xl" type="submit">Submit</button>
                </div>
            </form>
        </div>
    </div>
        <Footer/>
    </>
)