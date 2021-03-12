import {TopNav2, Footer} from '../../components/ui'


export const Questionnaire = () => (
    <>
    <TopNav2/>
      <div className="bg-blue-300 h-screen  text-2xl p-24 ">

          <div className=" m-6 p-2 border-b-2 border-black w-1/3 text-3xl">
              Grit Scale
          </div>
        <div>
            <p className="">
                The Grit Scale is made of multiple statements applicable to individuals in a manner particular to each persons experience. There is no right or wrong answer. Try your best to answer as honestly as you can and your Grit scale will be determined from your selections. Have fun!
            </p>
            <div className="bg-green-300 rounded-xl shadow-2xl p-4 m-4 w-1/3">
               <a target=" " href="https://angeladuckworth.com/grit-scale/" >Take a Grit test</a>
            </div>
        </div>
      </div>
    <Footer/>
    </>
)