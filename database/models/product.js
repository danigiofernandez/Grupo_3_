module.exports = (sequelize, dataTypes) => {
   
    //defino las variables alias y cols para armar los datos que lleva la tabla product   
    
    let alias = 'Product';
        let cols = {
            product_id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrements: true,
            },
            product_name:{
                type: dataTypes.STRING
            },
            product_price: {type: dataTypes.DECIMAL(10,2),

            },
            product_brand: {
                type: dataTypes.STRING,
            },
            discount: {
                type: dataTypes.DECIMAL(10,2),
            },
            description: {
                type: dataTypes.TEXT
            },
            image: {
                type: dataTypes.STRING
            },

        };

        let config = {
            tableNames: 'product',
            timestamps: false,
            freezeTableName: true
        };


    const Product = sequelize.define(alias, cols, config);

    // Relaciones de SQL == Asociaciones en sequelize



        Product.associate = function(models) {
        this.belongsTo(
            models.Brand, 
            {
                //through: 'product_brand_id',
                foreignKey: 'product_brand',
                as: 'brand',
                freezeTableName: true
            });

    }

    return Product;
}