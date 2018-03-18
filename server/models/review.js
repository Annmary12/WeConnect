
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    context: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    buisnessId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
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
