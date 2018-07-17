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
        average: {
            type: DataTypes.INTEGER,
        },
        handicap: {
            type: DataTypes.INTEGER,
        },
        bestScore: {
            type: DataTypes.INTEGER,
        },
        totalStrikes: {
            type: DataTypes.INTEGER,
        },

    });

    Players.associate = function (models) {
        Players.belongsTo(models.Teams, {
            foreignKey: {
                allowNull: false
            },
        });
        // Players.hasMany(models.BowlingStats, {
        //     foreignKey: {
        //         allowNull: false
        //     }
        // });
    };

    return Players;
};