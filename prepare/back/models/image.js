const { sequelize } = require(".");

models.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('User', { //mysql에 users 테이블 생성
    //id는 기본 생성
    src: {},
  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci', //한글
  });

  Image.associate = (db) => {
    db.Image.belongsTo(db.Post);
  };
  return Image;
}