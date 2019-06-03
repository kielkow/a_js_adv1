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

        let data2 = new Date(2016,10,11)
        console.log(data2)
        console.log(typeof(data2))
    }
}