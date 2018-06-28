module.exports = function (sequelize, DataTypes) {
    var Leagues = sequelize.define("Leagues", {
        leagueName: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Mondays",
            validate: {
                len: [1]
            }
        },
        townsportId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
            validate: {
                len: [1]
            }
        },
    });
    return Leagues;
};