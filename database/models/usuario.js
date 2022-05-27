module.exports = (sequelize, dataTypes) => {
   
    //defino las variables alias y cols para armar los datos que lleva la tabla users   
    
    let alias = 'Usuarios';
        let cols = {
            user_id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrements: true,
            },
            user_name: {type: dataTypes.STRING

            },
            user_name_alias: {
                type: data.Types.STRING
            },
            user_mail: {
                type: dataTypes.STRING
            },
        };

        let config = {
            tableNames: 'users',
            timestamps: false
        };


    const Usuario = sequelize.define(alias, cols, config);
    

    return Usuario;
}