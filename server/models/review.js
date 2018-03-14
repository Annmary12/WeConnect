

module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
  Review.associate = (models) => {
    // associations can be defined here

    Review.belongsTo(models.User, {
      foreignKey: 'userId',
    });

    Review.belongsTo(models.Business, {
      foreignKey: 'businessId',
      onDelete: 'CASCADE',
    });
  };
  return Review;
};
