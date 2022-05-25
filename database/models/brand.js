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

    return Marca;
}