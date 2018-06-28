module.exports = function (sequelize, DataTypes) {
    var Sports = sequelize.define("Sports", {
        sport: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
    });
    return Sports;
};