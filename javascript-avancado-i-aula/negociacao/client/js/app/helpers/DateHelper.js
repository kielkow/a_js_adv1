class DateHelper {

    constructor(){
        throw new Error('DateHelper não pode ser instanciada')
    }

    static dataParaTexto(data) {
        return data.getDate() + '/'
            + (data.getMonth() + 1) + '/'
            + data.getFullYear()
    }


    static textoParaData(texto) {

        /*  Minha versão
        let teste = this._inputData.value.split('-')
        let dataTeste = new Date(parseInt(teste[0]), parseInt(teste[1] - 1), parseInt(teste[2]))
        console.log(dataTeste)
        */

        return new Date(...texto.split('-').map((item, indice) => item - indice % 2))
    }

}