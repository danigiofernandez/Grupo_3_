module.exports = (sequelize, dataTypes) => {
   
    //defino las variables alias y cols para armar los datos que lleva la tabla brand   
    
    let alias = 'Marcas';
        let cols = {
            brand_id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrements: true,
            },
            brand_name: {type: dataTypes.STRING,

            },
            
        };

        let config = {
            tableNames: 'brand',
            timestamps: false
        };


    const Marca = sequelize.define(alias, cols, config);

    // Relaciones de SQL == Asociaciones en sequelize

    Marcas.associate = function(models) {

        Marcas.belongsTo(
            models.brand, 
            {
                foreignKey: 'brand_id',
                as: 'brand'
            }
        );

        // movie.genre() == datos del genero que tiene esa movie

        Movie.belongsToMany(
            models.producto, 
            {
                through: 'product_brand_id',
                foreignKey: 'product_id',
                as: 'product',
                timestamps: false
            }
        );

    return Marca;
        }
    }