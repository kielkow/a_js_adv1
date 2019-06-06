class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document)
        this._inputData = $("#data")
        this._inputQuantidade = $("#quantidade")
        this._inputValor = $("#valor")

    }

    adiciona(event) {
        event.preventDefault()

        let data = new Date(...this._inputData.value.split('-').map((item, indice) => item - indice % 2))

        /*  Minha versão
        let teste = this._inputData.value.split('-')
        let dataTeste = new Date(parseInt(teste[0]), parseInt(teste[1] - 1), parseInt(teste[2]))
        console.log(dataTeste)
        */

        let negocicao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        )

        console.log(negocicao)
        
        this.limpar()

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
    }

    limpar(){
        let $ = document.querySelector.bind(document)
        $('#data').value = ''
        $('#quantidade').value = ''
        $('#valor').value = ''
        $('#data').focus()
    }
}