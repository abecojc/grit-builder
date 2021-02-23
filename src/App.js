import {TopNav} from "./components/ui/TopNav"
import Footer from "./components/ui/Footer"

function App() {
  return (
      <>
        <TopNav/>
        <div className="flex flex-col text-center justify-between items-center bg-blue-500 h-96">
          <div className="p-5 border-blue-50 border-b-2 w-screen">Grit builder</div>
          <div className="p-5 ">Welcome</div>
          <div className="p-3 border-blue-50 border-t-2 w-screen">Feed</div>
        </div>
        <Footer/>
      </>
  );
}

export default App;
