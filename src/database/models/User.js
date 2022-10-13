
module.exports = (sequelize, dataTypes) => {
    const alias = 'Users';

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
    const Users = sequelize.define(alias, cols, config);
    return Users;
};