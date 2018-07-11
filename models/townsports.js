module.exports = function (sequelize, DataTypes) {
    var TownSports = sequelize.define("TownSports", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        status: DataTypes.STRING

    });

    TownSports.associate = function (models) {
        TownSports.hasMany(models.Leagues, {
            onDelete: "cascade"
        });
    };

    return TownSports;
};