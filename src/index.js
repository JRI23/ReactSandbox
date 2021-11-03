import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import faker from 'faker';
import ApprovalCard from './ApprovalCard';


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
                <ApprovalCard>
                    <CommentDetail author="Jake" timeAgo="Today at 19:25" content="Hello"
                                   avatar={faker.image.avatar()}/>
                </ApprovalCard>

                <ApprovalCard>
                    <CommentDetail author="Hikmet" timeAgo="Yesterday at 18:17" content="Wazzup"
                                   avatar={faker.image.avatar()}/>
                </ApprovalCard>
                <ApprovalCard>
                    <CommentDetail author="Savage" timeAgo="Today at 13:56" content="React is legendary"
                                   avatar={faker.image.avatar()}/>
                </ApprovalCard>
            </div>
            <Switch>
                <Route path="/about" component={About}/>
                <Route path="/" component={Home}/>
            </Switch>
        </Router>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'))