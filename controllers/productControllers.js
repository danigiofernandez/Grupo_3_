const db = require('../database/models');
//const sequelize = db.sequelize;

//Otra forma de llamar a los modelos

//const Product = db.Product;

const productController = {
   /* 'list': async (req, res) => {

            db.Product.findAll(
            {
                include: 
                [
                    'product'
                ]
            }
        )
            .then(product => {
                return res.json(user)
                res.render('procutList.ejs', { product })
            })
    },
    'detail': (req, res) => {
        db.Product.findByPk(req.params.id, 
        {
            include: 
            [
                'product'
            ]
        }
        )
            .then(product => {
             return   res.json(product)
           
            });
    },
    'new': (req, res) => {
        db.Product.findAll({
            order: [
                ['product_name']
            ],
        })
            .then(product => {
                res.render('newestProduct', { product });
            });
    }, */
   
    //Aqui debemos modificar y completar lo necesario para trabajar con el CRUD

    vertodos: function (req, res) {
        db.Product.findAll()
            .then(function(productos){
                res.render('nuevoindex', {productos: productos});
            })
    },

    guardar: function (req, res) {
        let image;

        if(req.file != undefined){
            image = req.file.filename;
        }else{
            image = 'default-image.png';
        }

        /*let sumaid = db.Product.findOne({
            where: { 
                product_id: Math.max(db.product_id)}
        }).then(a => {a + 1})*/

        db.Product.create({
            product_name: req.body.name,
            product_price: req.body.price,
            product_brand: req.body.brand,
            discount: req.body.discount,
            description: req.body.description,
            image: req.body.image,
           /* product_id: sumaid,*/
           //
        })
        res.redirect('/')
    },
    crear: function (req, res) {
        db.Brand.findAll()
            .then(function (brand) {
                return res.render('newproduct', {brand:brand});
            });

        // Recibo los datos del formulario completado en la petición
        // req.body == { name: valor, alias: valor }
        /* try {
             const productoCreado = await Product.create(req.body)
             return res.send(productoCreado);
         } catch (error) {
             console.log(error);
             return res.send('Hubo un error')
         }*/
    },
    edit: async function (req, res) {

        // 1) Busco los datos del producto
        // 2) Renderizo vista de edición con esos datos

        const productToEdit = await Product.findByPk(req.params.id);

        return res.render('productEdit', { Product: productToEdit })

    },
    update: async function (req, res) {

        const productActualizada = await Product.update(
            req.body,
            {
                where: {
                    id: req.params.id
                }
            }
        );
        return res.send(productActualizada)

    },
    delete: function (req, res) {
        // TODO
    },
    destroy: async function (req, res) {
       
        await Product.destroy({where: {id: req.params.id}})
    }

}

module.exports = productController;
