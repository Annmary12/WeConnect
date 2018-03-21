

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Businesses', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
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
    name: {
      allowNull: false,
      type: Sequelize.STRING
    },
    description: {
      allowNull: false,
      type: Sequelize.TEXT
    },
    phone_number: {
      type: Sequelize.INTEGER
    },
    address: {
      type: Sequelize.STRING
    },
    location: {
      allowNull: false,
      type: Sequelize.STRING
    },
    category: {
      allowNull: false,
      type: Sequelize.STRING
    },
    image: {
      type: Sequelize.STRING
    },
    website: {
      type: Sequelize.STRING
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
  down: queryInterface => queryInterface.dropTable('Businesses')
};
