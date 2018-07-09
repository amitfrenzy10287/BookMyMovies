import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://bookmymovies-db.firebaseio.com/'
});

export default instance;