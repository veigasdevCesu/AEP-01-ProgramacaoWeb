import express from 'express'
import { routes } from './routes'
//importando constante routes
//classe app.ts configura a aplicação da nossa API

class App {
    //criando propriedade chamada express do TIPO express.Application
    //express n pode aceitar nada além de express.Application, podemos usar seus métodos
    public express: express.Application
    
    public constructor() {
        // atribuindo para a propriedade express uma instância de express
        // quem utilizar dessa propriedade terá acesso aos métodos presentes dentro da express()
        this.express = express() //inicia aplicação express

        // estamos forçando quem instanciar essa classe, a automaticamente executar o método
        // middleware
        this.middleware() //funções interpretadoras
        // estamos forçando quem instanciar essa classe, a automaticamente executar o método
        // routes, e assim as rotas serão criadas ao iniciar a aplicação
        this.routes()
    }

    // Criando um método chamado Middleware
    private middleware(): void {
        // estamos utilizando através da propriedade express (que é uma instância de express())
        // estamos utilizando o método use() para dizer ao express que as requisições
        // e respostas serão no formato json (ao invés de raw por exemplo)
        this.express.use(express.json())
    }

    //criando método público chamado routes
    private routes(): void {
        //utilizando o método use de express() para informar ao framework que este será
        //o arquivo principal do sistema de roteamento
        this.express.use(routes) //criação do router
    }
}

//exportando classe App já instanciada e já chamando o atributo express, então quem chamar esta
//classe já poderá utilizar os métodos que pertencem a express()
export default new App().express //export já instanciando a classe app com o express
//export default permite mudar a nomenclatura do import, e permite passar a classe instanciada