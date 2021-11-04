import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import Home from "./containers/Home/Home";
import CommentPage from "./containers/CommentPage/CommentPage";
import Seasons from "./containers/Seasons/Seasons";



const App = () => {
    return (
        <Router>

            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/commentpage">Comment Page</Link>
                    </li>
                    <li>
                        <Link to="/seasons">Seasons</Link>
                    </li>
                </ul>
            </nav>


            <Switch>
                <Route path="/commentpage" component={CommentPage}/>
                <Route path="/seasons" component={Seasons}/>
                <Route path="/" component={Home}/>
            </Switch>
        </Router>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'))