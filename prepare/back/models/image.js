module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', { //mysql에 users 테이블 생성
    //id는 기본 생성
    src: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci', //한글
  });

  Image.associate = (db) => {
    db.Image.belongsTo(db.Post);
  };
  return Image;
}