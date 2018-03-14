

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstname: {
      type: DataTypes.STRING,
      alllowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      alllowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      alllowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      alllowNull: false,
    },
    profilepic: {
      type: DataTypes.STRING
    },
  });
  User.associate = (models) => {
    // associations can be defined here
    User.hasMany(models.Business, {
      foreignKey: 'businessId',
      as: 'businesses',
    });
  };
  return User;
};
