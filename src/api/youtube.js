import axios from 'axios';
// Fetch youtube api with custom settings

const KEY = 'AIzaSyBJyqG7ArSdc1EvAH6wWQ9UKA0Z7IFtq_A';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
});
