export default (sequelize, DataTypes) => {
  const Business = sequelize.define('Business', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Business name already exists'
      },
      len: {
        args: [5],
        msg: 'Business name should not be less than 3 letters and more than 20 letters'
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    website: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: 'Website Url already exist'
      },
      validate: {
        isUrl: {
          args: true,
          msg: 'website must be a url'
        }
      },
    },
  });
  Business.associate = (models) => {
    // associations can be defined here
    Business.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });

    Business.hasMany(models.Review, {
      foreignKey: 'businessId',
      as: 'review',
    });

    Business.hasMany(models.Vote, {
      foreignKey: 'businessId',
      as: 'getvote',
    });
  };
  return Business;
};
