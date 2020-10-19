module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', { //mysql에 users 테이블 생성
    //id는 기본 생성
    content: {
      type: DataTypes.TEXT,
      allownull: false,
    },
    //UserId by 'db.Post.belongsTo(db.User);
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci', //한글 + 이모티콘 저장

  });

  Post.associate = (db) => {
    db.Post.belongsTo(db.User);
    db.Post.hasMany(db.Comment);
    db.Post.hasMany(db.Image);
    db.Post.belongsTo(db.Post, { as: 'Retweet' });
    db.Post.belongsToMany(db.Hashtag, {through: 'PostHashtag'});
    db.User.belongsToMany(db.User, { through: 'Like', as: 'Likers' })
  };
  return Post;
}