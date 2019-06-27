class View{

    constructor(elemento){
        this.elemento = elemento
    }

    template(){
        throw new Error('Template deve ser implementado')
    }

    _update(model){
        this.elemento.innerHTML = this.template(model)
    }
}