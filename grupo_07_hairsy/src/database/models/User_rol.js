
module.exports = (sequelize, dataTypes) => {
    const alias = 'Users_rol';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId:{ type: dataTypes.INTEGER },
        rolId: { type: dataTypes.INTEGER }
        
    };

    const config = {
        tableName: 'users_rol',
        timestamps: false
    };
    const Users_rol = sequelize.define(alias, cols, config);
    return Users_rol;
};