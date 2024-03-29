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
    
    Rol.associate = (models) => {
        Rol.belongsTo(models.User, {
            as:'Rol',
            foreignKey: 'rol_id'
        })
    }

    return Rol;
};