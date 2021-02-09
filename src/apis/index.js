import axios from 'axios';

// Add some default config to this option object
const options = {};
const axiosInstance = axios.create(options);

axiosInstance.interceptors.request.use(
  (config) => {
    const authToken = localStorage.getItem('token');
    if (authToken !== null) {
      // Add authToken to request header
      // This `Bearer` sometimes (depending on server auth system) must be included in Auth field!
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // let statusCode;
    // if (error.response) statusCode = error.response.status;
    // if (error.request) statusCode = error.request.status;

    if (error.response) {
      // Here you may wanna do some error handling, show a message to user etc.
    } else if (error.request) {
      // Here you may wanna do something when the request hasn't sent
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
