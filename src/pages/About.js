import {Footer, TopNav} from "../components/ui"

export const  About = () => (
    <>
        <TopNav/>
    <div className="p-4 mb-12 bg-blue-300">
        <div className="mt-16 text-2xl font-bold">About Us</div>
        <div>
            <div className="my-2 flex text-xl border-2 border-black rounded-xl p-2 font-bold"> Vision and Mission</div>
            <p className="border-2 border-black rounded-xl p-2 overflow-auto md:overflow-scroll" >
                Grit is the ability to persevere in the pursue of a long term goal in the mist of adversity and changing circumstances that stop many from achieving the goals they have set for themselves. This app started out as a pathway to help young college students who are grappling with organizing their time and manage their daily activities within the constraints placed on them by the academic requirements. This app is set to bring awareness and support for those who are willing to incorporate a long term goal into their habits as they shape their purpose in life and work towards it in small steps.
            </p>
            <div className="my-2 flex text-xl border-2 border-black rounded-xl p-2 font-bold overflow-auto md:overflow-scroll">Our story</div>
            <p className="border-2 border-black rounded-xl p-2" >
            This website started out as an idea for a capstone toward a certificate in web development offered by the Urban League of Eastern Massachusetts (ULEM) MSIMBO Web Development Academy, a program offer to help increase diversity in tech industry and push for an integration of minority and members of the underrepresented communities as technologies especially the digitallization of traditional economic entities as web presence as become the norm of conducting business around the globe. The challenge intended to be addressed in this venture is to elevate young college students aspirations for long term goal setting and attainment as they practice intentionally to grow their grit in the mist of their busy daily activities and projects.
            </p>
            <div className="my-2 flex border-2 border-black rounded-xl p-2 text-xl font-bold overflow-auto md:overflow-scroll">Team Member Profiles</div>
            <p className="border-2 border-black rounded-xl p-2" >
            Add an emotional element to your About Us page by adding details of the people that are driving the passion at your business. People find it easier to connect with human beings, so allow the personality of your crew to shine through the About Us page.
            </p>
        </div>
    </div>
        <Footer/>
        </>
)