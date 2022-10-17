
module.exports = (sequelize, dataTypes) => {
    const alias = 'User_rol';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: { type: dataTypes.INTEGER },
        rolId: { type: dataTypes.INTEGER }

    };

    const config = {
        tableName: 'users_rol',
        timestamps: false
    };
    const User_rol = sequelize.define(alias, cols, config);
    User_rol.associate = (models) => {
        User_rol.belongsTo(models.rol, models.user, {
            as: 'User_rol',
            foreignKey: 'userId'

        })

    }

    return User_rol;



};