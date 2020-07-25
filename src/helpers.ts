import axios from 'axios';

export const requestForComments = () => {
  return axios.get('/endpoint/does-not-exist')
};
