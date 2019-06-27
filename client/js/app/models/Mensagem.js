class Mensagem{

    constructor(texto = ''){
        this._texto = texto
    }

    get _texto(){
        return this._texto
    }

    set _texto(texto){
        this._texto = texto
    }
}