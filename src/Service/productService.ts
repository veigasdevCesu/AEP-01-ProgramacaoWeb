import { writeFile, readFile } from "fs/promises"

class ProductService {

    async createProductList(data) {
        try {
            await writeFile('products.json', JSON.stringify(data, null, 2))

        } catch (error) {
            throw new Error(error)
        }

    }

    async listProducts() {
        const productList = await readFile('products.json', 'utf-8') 

        return JSON.parse(productList) //transforma buffer em string JSON (parse)
    }

    async getStock() {
        const productList = await this.listProducts()

        const stockProducts = productList.map(item => {
            let stock = {
                nome: item.nome,
                qtde: item.qtde,
                preco: item.preco,
                valor_stock: item.qtde * item.preco
            }

            return stock
        })

        return stockProducts
    }

    async getTotalValue() {
        const productList = await this.listProducts()

        const totalValue = productList.reduce((acc, item) => {
            return acc += (item.preco *= item.qtde)
        }, 0)

        return totalValue.toFixed(2)

    }

}

export default new ProductService()