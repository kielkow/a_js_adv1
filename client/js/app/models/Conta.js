class Conta{

    constructor(saldo){
        this._saldo = saldo
    }

    get saldo(){
        return this._saldo;
    }

    atualiza(){
        throw new Error("Você deve sobrescrever o método")
    }
}