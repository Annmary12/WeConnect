export default (sequelize, DataTypes) => {
  const Vote = sequelize.define('Vote', {
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
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'User',
        Key: 'id',
        as: 'userId',
    },
  }
    
  });
  Vote.associate = (models) => {
    // associations can be defined here
    Vote.belongsTo(models.Business, {
      foreignKey: 'businessId',
      onDelete: 'CASCADE',
    });
    Vote.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
  return Vote;
};