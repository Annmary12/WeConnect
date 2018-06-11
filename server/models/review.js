
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    context: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'User',
        Key: 'id',
        as: 'userId',
      },
    },
    businessId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Business',
        Key: 'id',
        as: 'businessId',
      },
    },
  }, {});
  Review.associate = (models) => {
    // associations can be defined here
    Review.belongsTo(models.Business, {
      foreignKey: 'businessId',
      onDelete: 'CASCADE',
    });

    Review.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'reviewer'
    });
  };

  return Review;
};
