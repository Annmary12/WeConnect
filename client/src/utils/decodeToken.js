import jwt from 'jsonwebtoken';

const decodeToken = () => {
    const token = localStorage.getItem('jwtToken');
    if(token) {
        return jwt.verify(token, 'iwillnotlosecton', ((error) => {
            if(!error) {
                return true;
            }
            return false;
        }))
    }
};
export default decodeToken;