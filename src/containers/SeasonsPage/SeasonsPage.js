import React from "react";
import SeasonDisplay from '../../components/SeasonDisplay';
import Spinner from '../../components/Spinner';

export default class SeasonsPage extends React.Component {
    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            // we called setstate!!!
            (position) => this.setState({ lat: position.coords.latitude }),

            // you don't want to do --> this.state.lat = position.coords.latitude
            (err) => this.setState({ errorMessage: err.message })
        );
    }

    renderContent() {
        // if there is an error message and no latitude show the following!
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        // if there is no error message and a latitude show the following!
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <Spinner message="Please accept location request" />;
    }

    // React says we have to define render!!
    render() {
        return (
            <div className="border-red">
                {this.renderContent()}
            </div>
        )
    }
};