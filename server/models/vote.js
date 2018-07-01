export default (sequelize, DataTypes) => {
  const Vote = sequelize.define('Vote', {
    businessId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
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