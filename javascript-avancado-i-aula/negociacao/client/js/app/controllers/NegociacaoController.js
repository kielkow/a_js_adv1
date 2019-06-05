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
    }
}