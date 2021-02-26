import {Route, Switch} from "react-router-dom"
import Project,{About, Home,  SignIn, Signup, Test, Contact} from "./pages"

function App() {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/About" component={About} />
            <Route exact path="/Project" component={Project} />
            {/*<Route exact path="/index" component={index}/>*/}
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/SignIn" component={SignIn} />
            <Route exact path="/Signup" component={Signup} />
            <Route exact path="/Test" component={Test} />
        </Switch>
    );
}

export default App;