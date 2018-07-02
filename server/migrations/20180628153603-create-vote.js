'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Votes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      businessId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        reference: {
          model: 'Businesses',
          key: 'id',
          as: 'userId',
        },
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }),
 
  down: queryInterface =>  queryInterface.dropTable('Votes')
  
};