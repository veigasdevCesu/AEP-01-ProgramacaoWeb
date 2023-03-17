const nums = [2, 4, 6, 8]

const dobro = numero => numero * 2

//console.log(nums.map(dobro))

//console.log(nums.map(numero => numero * 3))

const nomes = ['Ana', 'Bia', 'Lia', 'Rafa']

const letras = nomes.map(text => text[0])

//console.log(letras)

//para executar um arquivo, "node .\arquivo.js"

//estrutura de objeto:
//{ chave: "valor", ...}

const carrinho = [
    { nome: 'Caneta',
      quantidade: 10,
      preco: 7.99
    },
  
    { nome: 'Impressora',
      quantidade: 0,
      preco: 649.50
    },
  
    { nome: 'Caderno',
      quantidade: 4,
      preco: 27.10
    },
  
    { nome: 'Caneta',
      quantidade: 3,
      preco: 5.82
    },
  
    { nome: 'Tesoura',
      quantidade: 1,
      preco: 19.20
    }
  ]

  const nomesCarrinho = carrinho.map(item => item.nome)
  console.log(nomesCarrinho)

  const valorEstoque = carrinho.map(item => {
    let per_product = {
        nome: item.nome,
        valorTotalEstoque: item.quantidade * item.preco
    }

    return per_product
  })

  console.log(valorEstoque)

  const getProdutosEmEstoque = carrinho.filter(item => item.quantidade > 0)
  //console.log(getProdutosEmEstoque)

  //node .\01-map.js