models.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', { //mysql에 users 테이블 생성
    //id는 기본 생성
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    nickname: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    password: {      
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci', //한글 저장

  });

  User.associate = db = {};
  return User;
}