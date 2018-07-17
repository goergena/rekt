module.exports = function (sequelize, DataTypes) {
    var Teams = sequelize.define("Teams", {
        teamName: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Team Eleven",
            validate: {
                len: [1]
            }
        },
        wins: {
            type: DataTypes.INTEGER,
        },
        losses: {
            type: DataTypes.INTEGER,
        },
        totalGames: {
            type: DataTypes.INTEGER,
        },
        // leagueId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     defaultValue: 1,
        //     validate: {
        //         len: [1]
        //     }
        // },
    });

    Teams.associate = function (models) {
        Teams.belongsTo(models.Leagues, {
            foreignKey: {
                allowNull: false
            }
        });
        Teams.hasMany(models.Players, {
            foreignKey: {
                allowNull: false
            }
        });
        // Teams.hasMany(models.Games, {
        //     foreignKey: {
        //         allowNull: false
        //     }
        // });
    };
    return Teams;
};