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

        let teste = '2016-08-10'
        let testando = teste.split('-')

        let dataTeste = new Date(parseInt(testando[0], 10), parseInt(testando[1], 10),parseInt(testando[2], 10))
        console.log(dataTeste)
        console.log(testando)
    }
}