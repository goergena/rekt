module.exports = function (sequelize, DataTypes) {
    var Statisticians = sequelize.define("Statisticians", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "jill@blakewood.gov",
            validate: {
                len: [1]
            }
        },
        pwd: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 1,
            validate: {
                len: [1]
            }
        },

    });
    // Statisticians.associate = function (models) {
    //     Statisticians.belongsTo(models.Towns, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };
    return Statisticians;
};