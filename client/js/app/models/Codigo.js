class Codigo {

    constructor(codigo) {
        if(!this._validar(codigo)) throw new Error('Código inválido')
        this._codigo = codigo
    }

    _validar(codigo) {
        return /\D{3}-\D{2}-\d{2}/.test(codigo)
    }

    get codigo(){
        return this._codigo
    }
}