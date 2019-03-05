'use strict';
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    image: DataTypes.STRING,
    text: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {});
  Note.associate = function (models) {
    // associations can be defined here
    Note.belongsTo(models.User);
  };
  return Note;
};