import React from "react";


export default class Seasons extends React.Component {
    constructor(props) {
        super(props);

        // THIS IS THE ONLY TIME we do direct assignment
        // to this.state
        this.state = {lat: null, errorMessage: ''};

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // we called setstate!!!
                this.setState({lat: position.coords.latitude});

                // you don't want to do --> this.state.lat = position.coords.latitude
            },
            (err) => {
                this.setState({errorMessage: err.message})
            }
        );
    }

    // React says we have to define render!!
    render() {
        // if there is an error message and no latitude show the following!
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        // if there is no error message and a latitude show the following!
        if(!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>
        }

        return <div>Loading...</div>;
    }
}