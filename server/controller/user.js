import users from '../model/user';


class User {
  static signup(req, res) {
    const user = req.body;
    users.push({
      id: users.length + 1,
      name: user.name,
      email: user.email,
      password: user.password
    });

    return res.json({
      users,
      message: 'Sucessfully Registered',
      error: false
    });
  }

  static singin(req, res) {
    const user = req.body;
    const loggedUser = [];

    for (let i = 0; i < users.length; i += 1) {
      if (users[i].email === user.email && users[i].password === user.password) {
        loggedUser.push(users[i]);
      }
    }

    if (loggedUser.length > 0) {
      return res.json({
        loggedUser,
        message: `Hello ${loggedUser[0].name}, Welcome to weConnect`,
        error: false
      });
    }
    return res.status(404).json({
      message: 'You are not a register user',
      error: true
    });
  }
}

export default User;
