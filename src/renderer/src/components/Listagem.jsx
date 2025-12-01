import { useProdutosContext } from "../contexts/ProdutosContext"
import Produtos from "../../../Models/Produtos"

export function Listagem() {

    const { produtos } = useProdutosContext()

    const prod = new Produtos()
    prod.listarTodosProdutos()

    //console.log(produtos)

    return (
            <ul>
                {produtos.map(produto => 
                    <>
                        <li key={produto.id}>
                            <ul>
                                <li>{produto.nome}</li>
                                <li>{produto.valor}</li>
                                <li>{produto.loja}</li>
                            </ul>
                        </li>
                        <br></br>
                    </>
                    
                )}
            </ul>
    )
}