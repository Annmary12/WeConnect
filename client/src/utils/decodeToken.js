import jwt from 'jsonwebtoken';

/**
 * @description decodes token
 * @function decodeToken
 * @returns { boolean } - it returns boolean
 */
const decodeToken = () => {
  // gets token from local storage
  const token = localStorage.getItem('jwtToken');
  if (token) {
    // verifies token
    return jwt.verify(token, 'iwillnotlosecton', ((error) => {
      if (!error) {
        return true;
      }
      return false;
    }));
  }
};
export default decodeToken;
