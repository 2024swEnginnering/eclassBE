const Sequelize = require('sequelize');

module.exports = class Student extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      eclassID: {
        type: Sequelize.STRING(40),
        allowNull: true,
        unique: true,
      },
      eclassPW: {
        type: Sequelize.STRING(40),
        allowNull: true,
        unique: true,
      },
      name: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'Student',
      tableName: 'students',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
  }
};
