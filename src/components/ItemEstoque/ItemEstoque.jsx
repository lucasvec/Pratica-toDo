import style from "../ItemEstoque/ItemEstoque.module.css";
import { useState } from 'react';

function CardTarefa({nome, estoque, valor, id}) {
    const [texto, setTexto] = useState(text);
    
    const editarNome = () => {
        if (nome !== null) {
            setTexto(nome);
        }
    };

    return (
        <div id={style.principal}>
            <p className={style.nomeProduto}>{texto}</p>
            <p className={style.quantidadeProduto}>{estoque}</p>
            <p className={style.valorProduto}>{valor}</p>
            <div className={style.botoesAcoes}>
                <p className={style.botaoComprar}>+</p>
                <p className={style.botaoVender}>-</p>
            </div>
        </div>
    );
}

export default CardTarefa;
