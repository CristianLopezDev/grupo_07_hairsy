
module.exports = (sequelize, dataTypes) => {
    const alias = 'Product';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{ type: dataTypes.INTEGER },
        description: { type: dataTypes.INTEGER },
        price:{ type: dataTypes.INTEGER},
        category_id: { type: dataTypes.INTEGER},
        image:{ type: dataTypes.STRING}        
    };

    const config = {
        tableName: 'product',
        timestamps: false
    };
    const Product = sequelize.define(alias, cols, config);
    
    Product.associate = (models) => {
        Product.hasMany(models.Category, {
            as:'categories',
            foreignKey:'category_id'
        }) 
    }

    return Product;
};