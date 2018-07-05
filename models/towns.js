module.exports = function (sequelize, DataTypes) {
    var Towns = sequelize.define("Towns", {
        town: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Blakewood",
            validate: {
                len: [1]
            }
        },
    });

    Towns.associate = function (models) {
        Towns.belongsToMany(models.Sports, {
            through: models.TownSports,
            foreignKey: 'townId',
            otherKey: 'sportId',
            constraints: false
        });

        Towns.hasMany(models.recCoordinators, {
            foreignKey: {
                allowNull: false
            }
        });

        Towns.hasMany(models.Statisticians, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Towns;
};