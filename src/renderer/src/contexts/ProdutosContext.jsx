import  { createContext, useState } from "react"

export const ProdutosContext = createContext()

export const ProdutosProvider = ({ children }) => {
    const [produtos, setProdutos] = useState("Nenhum produto")

    // outra função a ser compartilhada

    function enviarProdutos(products) {
        setProdutos("Novos produtos enviados")
    }

    return (
        <ProdutosContext.Provider value={{ produtos, enviarProdutos }}>
            {children}
        </ProdutosContext.Provider>
    )
}