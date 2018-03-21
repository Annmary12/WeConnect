module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Reviews', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    context: {
      allowNull: false,
      type: Sequelize.TEXT
    },
    userId: {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      reference: {
        model: 'Users',
        key: 'id',
        as: 'userId',
      },
    },
    buisnessId: {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      reference: {
        model: 'Businesses',
        key: 'id',
        as: 'userId',
      },
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  down: queryInterface => queryInterface.dropTable('Reviews')
};
