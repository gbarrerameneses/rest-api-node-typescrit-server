import { Request, Response } from 'express'
import Product from '../models/Product.model.js'

export const createProduct = async (req: Request, res: Response) =>{ // traemos la función de router

    // # se puede hacer con new o con create, ambas son buenas forma de hacerlo
    const product = await Product.create(req.body) // utilizamos el modelo y creamos la instancia en la base de datos en un solo paso
    res.json({data: product})

    // const product = new Product(req.body)
    // const saveProduct = await product.save() // como almacenamos el prodcto obtenemos el id y podemos retornar el producto guardado en la base de datos
    // res.json({data: saveProduct}) // retornamos un objeto data y retornar el producto que se ingresó a la base de datos
}