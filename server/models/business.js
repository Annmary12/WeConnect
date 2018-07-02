export default (sequelize, DataTypes) => {
  const Business = sequelize.define('Business', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Business name already exists'
      },
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
      validate: {
        isUrl: {
          args: true,
          msg: 'website must be a url'
        },
      }
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

    // Business.hasMany(models.Vote, {
    //   foreignKey: 'businessId',
    //   as: 'getvote',
    // });
  };
  return Business;
};
