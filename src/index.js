import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./assets/index.css";
import HomePage from "./containers/HomePage/HomePage";
import CommentPage from "./containers/CommentPage/CommentPage";
import AccordionPage from './containers/AccordionPage/AccordionPage';
import SeasonsPage from "./containers/SeasonsPage/SeasonsPage";
import PicsPage from "./containers/PicsPage/PicsPage";
import VideosPage from './containers/VideosPage/VideosPage';
import Navbar from "./components/Navbar";



class App extends React.Component {

    render() {
        return (
            <Router>

                <Navbar />

                <Switch>
                    <Route path="/comments" component={CommentPage} />
                    <Route path="/accordion" component={AccordionPage} />
                    <Route path="/seasons" component={SeasonsPage} />
                    <Route path="/pics" component={PicsPage} />
                    <Route path="/videos" component={VideosPage} />
                    <Route path="/" component={HomePage} />
                </Switch>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))