//importando os TIPOS Request e Response do express
import { Request, Response } from 'express'

class HealthCheckController {
    //criando um método público e assíncrono chamado check que recebe como parâmetro (inferido)
    //uma req do tipo Request e uma res do tipo Response
    public async check(req: Request, res: Response) { //tipos do express
        //retornando um json escrito hello world para quem chamou esse método
        return res.json('Hello World')
    }
}

//exportando classe já instanciada
export default new HealthCheckController()