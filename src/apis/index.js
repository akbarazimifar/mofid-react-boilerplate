import axios from 'axios';

// Add some default config to this option object
const options = {};
const axiosInstance = axios.create(options);

axiosInstance.interceptors.request.use(
  (config) =>
    // Manipulate config, such as adding a token to the header
    config,
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
