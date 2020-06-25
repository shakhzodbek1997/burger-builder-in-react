import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://my-burger-builder-server.firebaseio.com/'
});

export default instance;