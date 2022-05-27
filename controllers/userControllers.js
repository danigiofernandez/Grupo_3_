const db = require('../database/models');
const sequelize = db.sequelize;

//Otra forma de llamar a los modelos

const User = db.User;

const userController = {
    'list': async (req, res) => {

            db.User.findAll(
            {
                include: 
                [
                    'user',
                    'product'
                ]
            }
        )
            .then(user => {
                return res.json(user)
                res.render('userList.ejs', { user })
            })
    },
    'detail': (req, res) => {
        db.User.findByPk(req.params.id, 
        {
            include: 
            [
                'product'
            ]
        }
        )
            .then(user => {
             return   res.json(user)
           
            });
    },
    'new': (req, res) => {
        db.User.findAll({
            order: [
                ['user_name']
            ],
        })
            .then(user => {
                res.render('newestUser', { user });
            });
    },
   
    //Aqui debemos modificar y completar lo necesario para trabajar con el CRUD

    add: function (req, res) {
        res.render('userAdd.ejs');
    },
    create: async function (req, res) {

        // Recibo los datos del formulario completado en la petición
        // req.body == { name: valor, alias: valor }

        try {
            const usuarioCreado = await User.create(req.body)
            return res.send(usuarioCreado);
        } catch (error) {
            console.log(error);
            return res.send('Hubo un error')
        }

    },
    edit: async function (req, res) {

        // 1) Busco los datos del usuario
        // 2) Renderizo vista de edición con esos datos

        const userToEdit = await User.findByPk(req.params.id);

        return res.render('userEdit', { User: userToEdit })

    },
    update: async function (req, res) {

        const userActualizada = await User.update(
            req.body,
            {
                where: {
                    id: req.params.id
                }
            }
        );
        return res.send(userActualizada)

    },
    delete: function (req, res) {
        // TODO
    },
    destroy: async function (req, res) {
       
        await User.destroy({where: {id: req.params.id}})
    }

}

module.exports = userController;
