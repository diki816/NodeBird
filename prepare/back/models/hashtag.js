models.exports = (sequelize, DataTypes) => {
  const Hashtag = sequelize.define('User', { //mysql에 users 테이블 생성
    //id는 기본 생성
    name: {
      type: DataTypes.STRING(20),
      allownull: false,
    },
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci', //한글 + 이모티콘 저장

  });

  Hashtag.associate = (db) => {
    db.Hashtag.belongsToMany(db.Post);
  };
  return Hashtag;
}