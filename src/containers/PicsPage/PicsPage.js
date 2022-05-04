import React from "react";
import unsplash from '../../api/unsplash';
import SearchBar from "../../components/SearchBar";
import ImageList from '../../components/ImageList';

class Pics extends React.Component {
    state = { images: [] };

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term },
        });

        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container mt-3">
                <SearchBar label="Search Pictures" onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default Pics;