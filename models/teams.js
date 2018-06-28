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
        leagueId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
            validate: {
                len: [1]
            }
        },
    });
    return Teams;
};