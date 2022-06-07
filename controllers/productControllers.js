const db = require('../database/models');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
const sequelize = db.sequelize;
const path = require('path');
const fs = require('fs');
const { Op, where } = require('sequelize');
const moment = require('moment');
const { product } = require('./mainControllers');

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
                    .then(function (product) {
                        return res.render('nuevoindex', {product:product, toThousand});
        });
    },

    detalle: (req, res) => {
        db.Product.findByPk(req.params.id)
            .then(function (product) {
                res.render('detalle', {product:product, toThousand});
            })
    },

    guardar: function (req, res) {
        
         
        let image;

        if(req.file != undefined){
            image = req.file.filename;
        }else{
            image = 'default-image.jpg';
        }
        db.Product.create({
            product_name: req.body.product_name,
            product_price: req.body.product_price,
            product_brand: req.body.brand,
            discount: req.body.discount,
            description: req.body.description,
            image: image,
           /* product_id: sumaid,*/
             /*let sumaid = db.Product.findOne({
            where: { 
                product_id: Math.max(db.product_id)}
        }).then(a => {a + 1})*/
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
    editar: function (req, res) {

        // 1) Busco los datos del producto
        // 2) Renderizo vista de edición con esos datos
        db.Product.findByPk(req.params.id)
        .then(function (product){
            return res.render('editar', {product:product})
        })
    },
        
    actualizar: function (req, res) {
        // Actualizo productos
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

        db.Product.update({
            product_name: req.body.product_name,
            product_price: req.body.product_price,
            product_brand: req.body.brand,
            discount: req.body.discount,
            description: req.body.description,
            image: req.body.image,
           /* product_id: sumaid,*/
           //
        }, { 
            where: { 
                product_id: req.params.id
            }
        });

        res.redirect('/detalle/' + req.params.id)

    },

    borrar: function (req, res) {
         db.Product.destroy({where: {product_id: req.params.id}})
         res.redirect('/')
    },
    destroy: async function (req, res) {
       
        
    }

}

module.exports = productController;
