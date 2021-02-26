import {Footer, TopNav} from "../components/ui"

export const Home = () => (
    <>
        <TopNav/>
        <div className=" h-screen bg-blue-200 bg-contain bg-transparent flex flex-col justify-center bg-auto bg-no-repeat" >
            <div className="text-4xl p-2 mt-20 m-6 bg-transparent w-4/5 flex whitespace-nowrap h-44 justify-around rounded-xl border-2 border-black shadow-xl font-serif font-bold ">Grow your Grit<br/>towards achieving <br/>your long term goals</div>
            <div className=" bg-grit bg-contain bg-transparent flex m-2 w-screen flex-auto bg-auto bg-no-repeat" >

            </div>
        </div>
        <Footer/>
<div className="bg-blue-300 h-screen px-12 ">
        <div  className=" pt-44  flex m-2 justify-center justify-between">
                <div className="my-4 p-2">
                    <h2 className="font-bold ">Visitors</h2>
                    <ul>
                        <li>Contact Us</li>
                        <li>FAQs</li>
                        <li>Terms and conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="my-4 p-2">
                    <h2 className=" font-bold">Our vision</h2>
                    <ul>
                        <li>About Us</li>
                        <li>Community</li>
                        <li>Grit value</li>
                        <li>Future</li>
                    </ul>
                </div>
                <div className="my-4 p-2">
                    <h2 className="font-bold ">Members</h2>
                    <ul>
                        <li>Sign In/Register</li>
                        <li>Your projects</li>
                        <li>Testimonials</li>
                        <li>Resources</li>
                    </ul>
                </div>
                <div className="my-4 p-2">
                    <h2 className="font-bold ">Partners</h2>
                    <ul>
                        <li>ULEM</li>
                        <li>YMCA</li>
                        <li>YWCA</li>
                        <li>To-do-ist</li>
                    </ul>
                </div>
        </div>
                <div className="my-4 ">
                    <h2 className=" font-bold">Social Connect</h2>
                    <div className="flex w-screen">
                        <div className="mx-4">Facebook</div>
                        <div className="mx-4">Twitter</div>
                        <div className="mx-4">Instagram</div>
                        <div className="mx-4">Clubhouse</div>
                        <div className="mx-4">Youtube</div>
                        <div className="mx-4">Github</div>
                    </div>
                </div>
    </div>
    </>
)