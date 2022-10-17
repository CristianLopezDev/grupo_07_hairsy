module.exports = (sequelize, dataTypes) => {
    const alias = 'Rol';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        rol:{ type: dataTypes.STRING},
        
        
    };

    const config = {
        tableName: 'rol',
        timestamps: false
    };
    const Rol = sequelize.define(alias, cols, config);
    
    Rol.associate = () => {
        Rol.belongsTo(models.User_rol, {
            as:'Rol',
            foreignKey: 'userId'
        })
    }

    return Rol;
};