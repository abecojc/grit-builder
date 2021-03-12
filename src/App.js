import {Route, Switch} from "react-router-dom"
import {About, Home, SignIn, Signup, GritTest, Resource, Project, Contact} from "./pages"
import {AddProject, AllProjects, SearchProject, UpdateProject} from "./pages"
import {AllResources, SearchResources, SavedResources, ResourceDetail} from "./pages"
import {Questionnaire, ResultBox} from "./pages"

function App() {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/About" component={About}/>
            <Route exact path="/Project" component={Project}/>
            <Route exact path="/AddProject" component={AddProject}/>
            <Route exact path="/SearchProject" component={SearchProject}/>
            <Route exact path="/AllProjects" component={AllProjects}/>
            <Route exact path="/UpdateProject" component={UpdateProject}/>
            <Route exact path="/Resource" component={Resource}/>
            <Route exact path="/AllResources" component={AllResources}/>
            <Route exact path="/SearchResources" component={SearchResources}/>
            <Route exact path="/SavedResources" component={SavedResources}/>
            <Route exact path="/ResourceDetail" component={ResourceDetail}/>
            <Route exact path="/Contact" component={Contact}/>
            <Route exact path="/SignIn" component={SignIn}/>
            <Route exact path="/Signup" component={Signup}/>
            <Route exact path="/GritTest" component={GritTest} />
            <Route exaxt path="/Questionnaire" component={Questionnaire}/>
            <Route exact path="/Score" component={ResultBox}/>
        </Switch>
    );
}

export default App;