import axios from 'axios';

const baseURL = 'http://localhost:3000'

const service = axios.create({
  baseURL,
  withCredentials: true
})

const MY_SERVICE = {
  test: async () => {
    return await service.get('/');
  },
  signup: async (user) => {
    return await service.post('/signup', user);
  },
  login: async (user) => {
    return await service.post('/login', user);
  },
  logOut: async () => {
    return await service.get('/logout');
  }
};

export default MY_SERVICE;
