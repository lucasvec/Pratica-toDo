import style from "../AlertaEstoqueBaixo/AlertaEstoqueBaixo.module.css";

function AlertaEstoqueBaixo({lista}) {
    return (
        <div className={style.alerta}>
            <h2 className={style.h2}>Alerta de Estoque Baixo</h2>
            <p>Produto: Carne Moída - Quantidade: 0</p>
        </div>
    );
}

export default AlertaEstoqueBaixo;
