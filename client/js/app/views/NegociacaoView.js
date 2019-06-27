class NegociacaoView extends View{

    constructor(elemento){
        super(elemento)
    }

    template(model) {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                
                <tbody>
                    ${model.negociacoes.map(n =>
                        `
                            <tr>
                                <td>${DateHelper.dataParaTexto(n.data)}</td>
                                <td>${n.quantidade}</td>
                                <td>${n.valor}</td>
                                <td>${n.volume}</td>
                            </tr>
                        `
        ).join('')}

                </tbody>
                
                <tfoot>
                    <td colspan="3"></td>
                    <td>
                        ${model.negociacoes.reduce((total, n) => total + n.volume, 0.0)}
                    </td>
                </tfoot>
            </table>
        `
    }



    //exercicio arrow function]

    //numeros.reduce((total, num) => total * num, 1);
    //let dobro = numeros.map((num) => num * 2);
    //let metade = numeros.map((num) => num/2);
    //let raiz = numeros.map((num) => Math.sqrt(num));

}