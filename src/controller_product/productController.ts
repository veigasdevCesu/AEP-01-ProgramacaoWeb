import { Request, Response } from 'express'
import productService from '../Service/productService'

class ProductController {

    async create(req: Request, res: Response) {

        await productService.createProductList(req.body)

        return res.status(201).send()

    }

    async list(req: Request, res: Response) {

        const productList = await productService.listProducts()

        return res.status(200).send(productList) //send retorna a Response
        //sem status o Imsomnia fica aguardando pra sempre
    }

    async stck(req: Request, res: Response) {
        const productStock = await productService.getStock()

        return res.status(200).send(productStock)
    }

}

export default new ProductController()