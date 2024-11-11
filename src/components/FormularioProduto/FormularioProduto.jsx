import style from "../FormularioProduto/FormularioProduto.module.css";

function FormularioProduto() {
    return (
        <div className={style.formulario}>
            
            <label className={style.label} for="nome">Nome do Produto:</label>
            <input className={style.input} type="text" id="nome"></input>

            <label className={style.label} for="estoque">Quantidade em Estoque:</label>
            <input className={style.input} type="text" id="estoque"></input>
                            
            <label className={style.label} for="valorCompra">Valor de Compra:</label>
            <input className={style.input} type="text" id="valorCompra"></input>

            <label className={style.label} for="valorVenda">Valor de Venda:</label>
            <input className={style.input} type="text" id="valorVenda"></input>

            <p className={style.botao}>Adicionar Produto</p>
        </div>
    );
}

export default FormularioProduto;
