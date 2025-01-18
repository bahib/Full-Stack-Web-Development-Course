module.exports = function(sequelize, DataTypes) {
    const Comments = sequelize.define('Comments', {
        commentText: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // username: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
    })
    
    
    return Comments;
}