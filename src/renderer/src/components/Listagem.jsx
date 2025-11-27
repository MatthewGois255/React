import { useProdutosContext } from "../contexts/ProdutosContext"

export function Listagem() {

    const { produtos } = useProdutosContext()

    console.log(produtos)

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