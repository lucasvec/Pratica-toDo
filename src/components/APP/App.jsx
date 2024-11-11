import style from "../APP/App.module.css";
import FormularioProduto from "../FormularioProduto/FormularioProduto"
import ListaEstoque from "../ListaEstoque/ListaEstoque"
import AlertaEstoqueBaixo from "../AlertaEstoqueBaixo/AlertaEstoqueBaixo";


function App({caixa="1000"}) {
    return (
        <div className={style.aplicativo}>
            <div className={style.caixa}>
                <h2>Gerenciador de Estoque</h2>
                <h3>Caixa: R${caixa}</h3>
                <FormularioProduto></FormularioProduto>
                <ListaEstoque></ListaEstoque>
                <AlertaEstoqueBaixo></AlertaEstoqueBaixo>
            </div>
        </div>
    );
}

export default App;
