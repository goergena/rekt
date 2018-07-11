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

    Leagues.associate = function (models) {
        Leagues.belongsTo(models.TownSports, {
            foreignKey: {
                allowNull: false
            }
        });
        Leagues.hasMany(models.Teams, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Leagues;
};