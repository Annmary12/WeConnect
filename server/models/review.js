
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    context: DataTypes.TEXT
  }, {});
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