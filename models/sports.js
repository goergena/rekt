module.exports = function (sequelize, DataTypes) {
    var Sports = sequelize.define("Sports", {
        sport: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
    });

    // Sports.associate = function(models) {
    //     Sports.belongsToMany(models.Towns, {
    //       through: models.TownSports,
    //       foreignKey: 'sportId',
    //       otherKey: 'townId',
    //       constraints: false
    //       });
    //   }; 

    return Sports;
};