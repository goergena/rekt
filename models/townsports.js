module.exports = function (sequelize, DataTypes) {
    var TownSports = sequelize.define("Townsports", {
        townId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
            validate: {
                len: [1]
            }
        },
        sportId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
            validate: {
                len: [1]
            }
        },
    });
    return Townsports;
};