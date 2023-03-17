import app from './app'
// importando a classe App já instanciada de app.ts

/*() => {
}  função anônima*/

//função main irá executar os métodos de app e iniciar nossa aplicação
//essa função é a primeira a ser executada em nossa aplicação
function main() {
    try {
        //passando como parâmetro a porta 3000, no domínio localhost e uma função assíncrona e
        //anônima que irá printar uma mensagem ao ser executado
        app.listen(3000, 'localhost', async() => { //listen() cria servidor, 3000 porta padrão de servidor node
            console.log('Starting Server at port 3000')
        })
    } catch(err) {
        console.error("Starting server error", err)
    }
}

main()
//executando função main