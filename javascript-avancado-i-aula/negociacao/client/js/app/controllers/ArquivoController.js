class ArquivoController {

    constructor() {
        this._inputDados = document.querySelector('.dados-arquivo');
    }

    envia() {
        /*minha versao
        let arquivo = new Arquivo(...this._inputDados.value.split('/').map((item) => item.toUpperCase()))
        this._limpaFormulario();
        console.log(arquivo)
        */

        /*versao instrutor
        let dados = this._inputDados.value.toUpperCase().split('/');
        let arquivo2 = new Arquivo(...dados); // usando spread operador
        console.log(`Dados do arquivo: ${arquivo2.nome}, ${arquivo2.tamanho}, ${arquivo2.tipo}`);
        this._limpaFormulario();
        */

        //versao com helper
        let arquivo3 = ArquivoHelper.cria(this._inputDados.value)
        console.log(`Dados do arquivo: ${arquivo3.nome}, ${arquivo3.tamanho}, ${arquivo3.tipo}`);
        this._limpaFormulario()
    }

    _limpaFormulario() {
        this._inputDados.value = '';
        this._inputDados.focus();
    }
}