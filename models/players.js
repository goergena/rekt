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

    Players.associate = function(models) {
        Players.belongsTo(models.Teams, {
          foreignKey: {
            allowNull: false
        }
    });
};

    return Players;
};