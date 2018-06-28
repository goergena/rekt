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
    return Towns;
};