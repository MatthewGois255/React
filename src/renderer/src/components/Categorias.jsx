import { useProdutosContext } from "../contexts/ProdutosContext.jsx"

export function Categorias() {
    const { listarProdutos } = useProdutosContext()
    
    function onOption(e) {
        const tipo = e.target.dataset.tipo
        listarProdutos(tipo)
    }

    return (
        <>
            <button onClick={onOption} data-tipo="1">Opção 1</button>
            <button onClick={onOption} data-tipo="2">Opção 2</button>
        </>
    )
}