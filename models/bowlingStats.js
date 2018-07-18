module.exports = function (sequelize, DataTypes) {
    var BowlingStats = sequelize.define("BowlingStats", {
        average: {
            type: DataTypes.INTEGER,
            // allowNull: false,
        },
        total: {
            type: DataTypes.INTEGER,
        },
        handicap: {
            type: DataTypes.INTEGER,
        }
    });

    // BowlingStats.associate = function (models) {
    //     BowlingStats.belongsTo(models.Players, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    //     BowlingStats.belongsTo(models.Games, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };

    return BowlingStats;
};