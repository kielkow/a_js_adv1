class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document)
        this._inputData = $("#data")
        this._inputQuantidade = $("#quantidade")
        this._inputValor = $("#valor")

    }

    adiciona(event) {
        event.preventDefault()

        let helper = new DateHelper()

        let negociacao = new Negociacao(
            helper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        )

        console.log(negociacao)
        console.log(helper.dataParaTexto(negociacao.data))


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

    limpar() {
        let $ = document.querySelector.bind(document)
        $('#data').value = ''
        $('#quantidade').value = ''
        $('#valor').value = ''
        $('#data').focus()
    }
}