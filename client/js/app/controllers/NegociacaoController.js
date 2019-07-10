class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document)

        this._inputData = $("#data")
        this._inputQuantidade = $("#quantidade")
        this._inputValor = $("#valor")

        this._listaNegociacoes = new ListaNegociacoes()
        this._negociacaoView = new NegociacaoView($('#negociacaoView'))
        this._negociacaoView._update(this._listaNegociacoes)

        this._mensagem = new Mensagem()
        this._mensagemView = new MensagemView($('#mensagemView'))
        this._mensagemView._update(this._mensagem)

    }

    adiciona(event) {
        event.preventDefault()

        this._listaNegociacoes.adiciona(this._criaNegociacao())
        console.log(this._listaNegociacoes.negociacoes)
        this._negociacaoView._update(this._listaNegociacoes)

        this._mensagem._texto = 'Negociação adicionada com sucesso!'
        this._mensagemView._update(this._mensagem)

        this._limpar()
    }

    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value)
    }

    apaga(){
        this._listaNegociacoes.esvazia();
        this._negociacaoView._update(this._listaNegociacoes);
    
        this._mensagem.texto = 'Negociações apagadas com sucesso';
        this._mensagemView._update(this._mensagem);
    }

    _limpar() {
        this._inputData.value = ''
        this._inputQuantidade.value = 1
        this._inputValor.value = 0.0
        this._inputData.focus()
    }

    /* EXERCICIO1 --> retornar dobro dos números impares do vetor
  -- Minha versão --
  let numeros = [3, 2, 11, 20, 8, 7]
  let num = numeros.map((item) => {
      if (item % 2 === 0) {
          return item
      }
      return item * 2
  })
  console.log(num)
  console.log(numeros)

  -- versão do instrutor --
  let numeros = [3, 2, 11, 20, 8, 7];
  let novosNumeros = numeros.map(item => item % 2 ? item * 2 : item);
  console.log(novosNumeros)
  */


    /* EXERCICIO2 --> retorna soma de dois números no vetor
     function soma(num1, num2){
         return num1 + num2
     }
 
     let num = [10, 30]
 
     console.log(soma(...num))
     */


    /*EXERCICIO3 --> código funcional e enxuto
    var aprovados = avaliacoes.filter(prova => prova.nota >= 7).map(prova => prova.aluno.nome)
    console.log(aprovados)
    */

    /*EXERCICIO4 --> retornar duas listas em uma

        let lista1 = ['a', 'b', 'c']
        let lista2 = ['d', 'e', 'f']

        juntar(lista1,lista2){
            return this.lista3 = [...lista1, ...lista2]
        }
        mostrar(lista){
            lista.forEach(element => {
                console.log(element)
            });
        }

        this.mostrar(this.juntar(lista1, lista2))

        Resolução do instrutor:
        let lista1 = ['a', 'b', 'c']
        let lista2 = ['d', 'e', 'f']
        console.log([].concat(lista1, lista2))
    */



}