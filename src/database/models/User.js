
module.exports = (sequelize, dataTypes) => {
    const alias = 'User';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fullName:{ type: dataTypes.INTEGER },
        userName: { type: dataTypes.INTEGER },
        email: { type: dataTypes.STRING},
        birthday: { type: dataTypes.DATE},
        password: { type: dataTypes.STRING},
        repassword: { type: dataTypes.STRING},
        avatar: { type: dataTypes.STRING}        

        
    };

    const config = {
        tableName: 'users',
        timestamps: false
    };
    const User = sequelize.define(alias, cols, config);
    
    User.associate = (models) => {
        User.belongsTo(models.User_rol, {
            as: 'users',
            foreignKey: 'userId'
        })
    };
    
    
    return User;

};

// comentario de prueba //