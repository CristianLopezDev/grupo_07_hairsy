
module.exports = (sequelize, dataTypes) => {
    const alias = 'Product';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{ type: dataTypes.STRING },
        description: { type: dataTypes.STRING },
        price:{ type: dataTypes.INTEGER},
        category_id: { type: dataTypes.INTEGER},
        image:{ type: dataTypes.STRING}        
    };

    const config = {
        tableName: 'products',
        timestamps: false
    };
    const Product = sequelize.define(alias, cols, config);
    
    Product.associate = (models) => {
        Product.hasMany(models.Category, {
            as:'category',
            foreignKey:'category_id'
        }) 
    }

    return Product;
};