// 'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Email already exists'
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
  }, {});
  User.associate = (models) => {
  //  associations can be defined here
    User.hasMany(models.Business, {
      foreignKey: 'userId',
      as: 'business',
    });

    User.hasMany(models.Vote, {
      foreignKey: 'userId',
      as: 'vote',
    });
  };
  return User;
};
