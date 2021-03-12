import {Footer, TopNav} from "../components/ui"
import { Link } from "react-router-dom"
import Iframe from 'react-iframe'
import Iframes from "./Iframes"

export const Home = () => (
    <>
        <TopNav/>
        <div className=" h-screen bg-blue-200 bg-contain bg-transparent flex flex-col justify-center bg-auto bg-no-repeat" >
            <div className="text-3xl pt-6 bg-blue-200 mt-20 ml-2 mr-12 bg-transparent w-full flex whitespace-nowrap h-44 justify-around rounded-xl border-2 border-black shadow-xl font-serif font-bold ">Grow your Grit<br/>towards achieving <br/>your long term goals</div>
            <div className=" bg-grit bg-contain bg-transparent flex m-2 w-screen flex-auto bg-auto bg-no-repeat" >

            </div>
        </div>
        <Footer/>
   <div className="h-screen pt-96 bg-grit2 bg-contain w-full bg-transparent m-2 rounded-xl bg-auto bg-no-repeat">


        <div  className="bg-blue-300 mt-56 flex m-2 justify-center justify-around">

            <div className="my-4 p-2">
                <h2 className="font-bold ">Visitors</h2>
                <ul>
                   <Link to="/Contact"> <li>Contact Us</li></Link>
                    <li>FAQs</li>
                    <li>Terms and conditions</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="my-4 p-2">
                <h2 className=" font-bold">Our vision</h2>
                <ul>
                    <Link to="/Contact">  <li>About Us</li></Link>
                    <li>Community</li>
                    <li>Grit value</li>
                    <li>Future</li>
                </ul>
            </div>
            <div className="my-4 p-2">
                <h2 className="font-bold ">Members</h2>
                <ul>
                    <Link to="/Contact"> <li>Sign In/Register</li></Link>
                        <Link to="/Contact"> <li>Your projects</li></Link>
                    <li>Testimonials</li>
                            <Link to="/Contact"> <li>Resources</li></Link>
                </ul>
            </div>
            <div className="my-4 p-2">
                <h2 className="font-bold ">Partners</h2>
                <ul>
                    <a target="_blank" href="https://www.ulem.org/">ULEM</a>
                    <li>YMCA</li>
                    <li>YWCA</li>
                        <Link to="/Contact">  <li>To-do-ist</li></Link>
                </ul>
            </div>
        </div>

        <div className="my-4 bg-blue-300 m-2 ">
            <h2 className=" m-4 font-bold">Social Connect</h2>
            <div className="flex w-screen">
                <div className="mx-2">Facebook</div>
                <div className="mx-2">Twitter</div>
                <div className="mx-2">Instagram</div>
                <div className="mx-2">Clubhouse</div>
                <div className="mx-2">Youtube</div>
                <div className="mx-2">Github</div>
            </div>
        </div>
   </div>


    </>
)