
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

// // MODELO USER

// const fs = require('fs');
// const fileName =  './src/data/user.json'
// const User = { 
//     getData : function() {
//         return JSON.parse(fs.readFileSync(fileName, 'utf-8'));  
//     },
    
//     findAll : function() {
//         return this.getData();
//     },
    
//         findByPk : function (id) {
//             let allUsers = this.findAll();
//             let userFound = allUsers.find(oneUser => oneUser.id === id);
//             return userFound;
//         },
        
        
//         findByField : function (field, text) {
//             let allUsers = this.findAll();
//             let userFound = allUsers.find(oneUser => oneUser[field] === text);
//             return userFound;
//         },
        
//         create: function(userData) {
//             let allUsers = this.findAll();
//             let newUser = {
//                 id : this.generateId(),
//                 ...userData
//             } 
//             allUsers.push(newUser);
//             fs.writeFileSync(fileName, JSON.stringify(allUsers, null, ' '));
//             return newUser;
            
//         },
        
//         generateId : function() {
//             let allUsers = this.findAll();
//             let lastUser = allUsers.pop();
//             if (lastUser) {
//                 return lastUser.id + 1; 
//             }
//             return 1;
//         },
        
//         delete : function(id) {
//         let allUsers = this.findAll();
//         let finalUsers = allUsers.filter (oneUser => oneUser.id !== id);
//         fs.writeFileSync(fileName, JSON.stringify(finalUsers, null, ' '));
//         return true;
//     }
// };

// //console.log (User.create({fullname: 'Joaquin Perez', email: 'joaquo@hotmail.com'}));

// module.exports = User;