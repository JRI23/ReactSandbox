import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";


const App = () => {
    return (
        <Router>

            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>

            <div className="ui container comments">
                <CommentDetail />
                <CommentDetail />
                <CommentDetail />
            </div>

            <Switch>

                <Route path="/about" component={About} />
                <Route path="/" component={Home} />

            </Switch>
        </Router>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))