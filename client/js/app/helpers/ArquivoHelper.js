class ArquivoHelper{

    static cria(arquivo){
        return new Arquivo(...arquivo.split('/').map((item) => item.toUpperCase()))
    }
}