import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Home from "./containers/Home/Home";
import CommentPage from "./containers/CommentPage/CommentPage";
import Seasons from "./containers/Seasons/Seasons";
import Navbar from "./components/Navbar";



const App = () => {
    return (
        <Router>

            <Navbar />

            <Switch>
                <Route path="/commentpage" component={CommentPage}/>
                <Route path="/seasons" component={Seasons}/>
                <Route path="/" component={Home}/>
            </Switch>
        </Router>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'))