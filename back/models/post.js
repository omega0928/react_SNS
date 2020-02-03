module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        content: {
            type: DataTypes.TEXT, // 매우 긴글
            allowNull: false,
        },
    }, {
        charset: 'utf8mb4', // 한글 + 이모티콘
        collate: 'utf8mb4_general_ci',
    });
    Post.associate = (db) => {
        db.Post.belongsTo(db.User);
        db.Post.hasmany(db.Comment);
        db.Post.belongsTo(db.Image);
        db.Post.belongsTo(db.Post, { as: 'Retweet' });
    };
    return Post;
};