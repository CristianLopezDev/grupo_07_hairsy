
module.exports = (sequelize, dataTypes) => {
    const alias = 'User';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fullname:{ type: dataTypes.STRING},
        username: { type: dataTypes.STRING },
        email: { type: dataTypes.STRING},
        birthday: { type: dataTypes.DATE},
        password: { type: dataTypes.STRING},
        repassword: { type: dataTypes.STRING},
        avatar: { type: dataTypes.STRING},        
        rol_id: { type: dataTypes.INTEGER}
        
    };

    const config = {
        tableName: 'users',
        timestamps: false
    };
    const User = sequelize.define(alias, cols, config);
    
/*     User.associate = (models) => {
        User.belongsTo(models.Rol, {
            as: 'users',
            foreignKey: 'rol_id'
        })
    }; */
    
    
    return User;

};

// comentario de prueba //