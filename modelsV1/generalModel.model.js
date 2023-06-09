'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PublicationTypes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PublicationTypes.hasMany(models.Publications, { as:'publications', foreignKey: 'publication_type_id' })
    }
  }
  PublicationTypes.init({
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PublicationTypes',
    tableName: 'publication_types',
    underscored: true,
    timestamps: true
  });
  return PublicationTypes;
};