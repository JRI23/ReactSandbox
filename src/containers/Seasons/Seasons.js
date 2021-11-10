import React from "react";
import SeasonDisplay from '../../components/SeasonDisplay';

export default class Seasons extends React.Component {
    state = { lat: null, errorMessage: ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            // we called setstate!!!
            (position) => this.setState({lat: position.coords.latitude}),

            // you don't want to do --> this.state.lat = position.coords.latitude
            (err) => this.setState({errorMessage: err.message})
        );
    }



    // React says we have to define render!!
    render() {
        // if there is an error message and no latitude show the following!
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        // if there is no error message and a latitude show the following!
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <div>Loading...</div>;
    }
}