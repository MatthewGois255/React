import { useContext } from 'react'
import { ProdutosContext } from "../contexts/ProdutosContext.jsx"

export function Categorias() {
    const { enviarProdutos } = useContext(ProdutosContext)
    
    return (
        <>
            <button onClick={enviarProdutos}>Opção 1</button>
            <button onClick={enviarProdutos}>Opção 2</button>
        </>
    )
}