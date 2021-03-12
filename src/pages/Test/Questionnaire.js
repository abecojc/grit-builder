import {TopNav, Footer} from '../../components/ui'
import MultiChoice from "./MultiChoice"
export const Questionnaire = () => (
    <>
    <TopNav/>
      <div className="bg-blue-300 text-2xl p-24 ">
          Grit Scale
      </div>
        <div>
         <MultiChoice/>
        </div>
    <Footer/>
    </>
)