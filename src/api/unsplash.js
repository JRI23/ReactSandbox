import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID nqGKSuehbI2yyVR74mvx2nzDozJf0zQtOYH-QyIZ9JE'
    }
});