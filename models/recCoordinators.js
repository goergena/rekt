module.exports = function (sequelize, DataTypes) {
    var recCoordinators = sequelize.define("recCoordinators", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "jim@blakewood.gov",
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
//     recCoordinators.associate = function(models) {
//     recCoordinators.belongsTo(models.Towns, {
//         foreignKey: {
//             allowNull: false
//         }
//     });
// }
    return recCoordinators;
};