//importando a classe Router de express
import { Router } from 'express' //export
import healthCheckController from './controller/healthCheckController' //export default
import chamarNome from './controller/chamarNomeController'
import productController from './controller_product/productController'

//criando uma constante chamada routes que recebe Router()
const routes = Router() //constante recebe router instanciado, pode utilizar suas funções

//utilizando o método get através da constante routes(que pertence a Router())
//e passando como parâmetro o nome da rota e o que ela deve executar ao ser chamada
routes.get('/health-check', healthCheckController.check) //express já entende req e res

routes.get('/chamar-nome', chamarNome.list)

routes.post('/products', productController.create)

routes.get('/products', productController.list)

routes.get('/products-stock', productController.stck)

routes.get('/products-value', productController.value)

//exportando a constante routes
export { routes } //não instanciado = export (ao invés de export default)


