


// 4. Editar info usuario
// 5. Eliminar un usuario de la BD

// CRUD

/*const fs = require('fs');
const { stringify } = require('querystring');
const User = {
    fileName : './data/user.json',
    
    getData : () => {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));  
    },

    generateId : () => {
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if (lastUser) {
            return lastUser.id + 1; 
        }
        return 1;
         
    },

    findAll : () => {
        return this.getData();
    },

    findByPk : (id) => {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;
    },

    findByField : (field, text) => {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.field === text);
        return userFound;
    },
    
    create: (userData) => {
        let allUsers = this.findAll();
        newUser = {
            id : this.generateId(),
            ...userData
        }
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
        return true;

    },

    delete : (id) => {
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter (oneUser => oneUser.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '));
        return true;
    }
};

console.log (User.findByPk(2));

module.exports = User;*/