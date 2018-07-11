module.exports = function (sequelize, DataTypes) {
    var Games = sequelize.define("Games", {
        date: {
            type: DataTypes.DATE,
            // allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
        },
        outcome: {
            type: DataTypes.STRING,
        },
        average: {
            type: DataTypes.INTEGER
        },
        total: {
            type: DataTypes.INTEGER
        }


    });

    Games.associate = function (models) {
        Games.belongsTo(models.Teams, {
            foreignKey: {
                allowNull: false
            }
        });
        Games.hasMany(models.BowlingStats, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Games;
};