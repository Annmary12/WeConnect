import axios from 'axios';

const setAuthorizationToken = (token) => {
  if (token) {
    axios.defaults.headers.common.Authorization = token;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

// reauth
// 1. verify token
// 2. if expires 
// 3. check for password and email in the local storage
// 4. signin again(direct call to axios)
// 5. save token in the local storage
// 6. call setauthorization function
export default setAuthorizationToken;
