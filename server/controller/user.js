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
}

export default User;
