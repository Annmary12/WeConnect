import users from '../model/user';


class User {
  /**
   * @returns {Object} signup
   * @param {*} req
   * @param {*} res
   */
  static signup(req, res) {
    const user = req.body;
    if (!user.name) {
      return res.status(400).json({
        message: 'Name Field is required',
        error: true
      });
    }

    const newUser = {
      id: users.length + 1,
      name: user.name,
      email: user.email,
      password: user.password
    };
    users.push(newUser);

    return res.status(200).json({
      name: newUser.name,
      email: newUser.email,
      message: 'Sucessfully Registered',
      error: false
    });
  }

  /**
   * @returns {Object} signin
   * @param {*} req
   * @param {*} res
   */
  static singin(req, res) {
    const user = req.body;
    const loggedUser = [];

    for (let i = 0; i < users.length; i += 1) {
      if (users[i].email.toLowerCase() === user.email.toLowerCase() && users[i].password.toLowerCase() === user.password.toLowerCase()) {
        loggedUser.push(users[i]);
      }
    }

    if (loggedUser.length > 0) {
      return res.status(200).json({
        name: loggedUser[0].name,
        email: loggedUser[0].email,
        message: `Hello ${loggedUser[0].name}, Welcome to weConnect`,
        error: false
      });
    }
    return res.status(400).json({
      message: 'You are not a register user',
      error: true
    });
  }
}

export default User;
