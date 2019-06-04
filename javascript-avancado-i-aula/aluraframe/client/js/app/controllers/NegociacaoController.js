class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document)
        this._inputData = $("#data")
        this._inputQuantidade = $("#quantidade")
        this._inputValor = $("#valor")

    }

    adiciona(event) {
        event.preventDefault()

        let data = new Date(this._inputData.value.replace(/-/g, ','))
        console.log(data)

        let teste = ('2016-08-10').split('-')

        let dataTeste = new Date(parseInt(teste[0], 10), parseInt(teste[1], 10),parseInt(teste[2], 10))
        console.log(dataTeste)
        console.log(teste)
    }
}