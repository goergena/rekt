module.exports = function (sequelize, DataTypes) {
    var Players = sequelize.define("Players", {
        playerName: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Ali",
            validate: {
                len: [1]
            }
        },
        teamId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
            validate: {
                len: [1]
            }
        },
    });
    return Players;
};