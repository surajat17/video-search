import axios from 'axios';

const KEY = 'AIzaSyDliVgeb4frSr5iFKX1XkOBysJ9rRRxPFI';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,

    }
});