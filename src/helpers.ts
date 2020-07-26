import axios from 'axios';

/**
 * Makes a request for comments.
 */
export const requestForComments = async () => {
  return await axios.get("/endpoint/does-not-exist");
};
