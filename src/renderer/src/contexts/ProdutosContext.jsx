import { createContext, useContext, useState } from "react"
import { getBurguers } from "../services/api"

const ProdutosContext = createContext()

    const products = getBurguers()

    export const useProdutosContext = () => useContext(ProdutosContext)

    export const ProdutosProvider = ({ children }) => {
        const [produtos, setProdutos] = useState([])

    // outra função a ser compartilhada

    const listarProdutos = (tipo) => {
        setProdutos([])
        products.map((product) => {
            product.tipo == tipo && setProdutos(prev => [...prev, product])
        })
    }

    return (
        <ProdutosContext.Provider value={{ produtos, listarProdutos }}>
            {children}
        </ProdutosContext.Provider>
    )
}