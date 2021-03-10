import {Route, Switch} from "react-router-dom"
import {About, Home, SignIn, Signup, Test, Project, Contact} from "./pages"
import {AddProject, AllProjects, SearchProject, UpdateProject} from "./pages"

function App() {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/About" component={About} />
            <Route exact path="/Project" component={Project} />
            <Route exact path="/AddProject" component={AddProject}/>
            <Route exact path="/SearchProject" component={SearchProject}/>
            <Route exact path="/AllProjects" component={AllProjects}/>
            <Route exact path="/UpdateProject" component={UpdateProject}/>
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/SignIn" component={SignIn} />
            <Route exact path="/Signup" component={Signup} />
            <Route exact path="/Test" component={Test} />
        </Switch>
    );
}

export default App;