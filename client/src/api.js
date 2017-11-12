import axios from 'axios';

export default {
  libraries: {
    getLibraries: () => axios.get('/api/libraries').then(res => res.data)
  }
};
