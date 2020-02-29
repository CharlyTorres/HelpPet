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
  },

  createAdoption: async (pet) => {
    return await service.post('/give', pet);
  },

  showingCats: async () => {
    return await service.get('/cats')
  },

  showingDogs: async () => {
    return await service.get('/dogs')
  },

  showingOthers: async () => {
    return await service.get('/others')
  },

  uploadPhoto: async photo => {
    return await service.post('/upload', photo)
  }
};

export default MY_SERVICE;
