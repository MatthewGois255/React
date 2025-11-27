import { useContext } from "react"
import { ProdutosContext } from "../contexts/ProdutosContext"

export function Listagem() {
    
    const { produtos } = useContext(ProdutosContext)
    
    return (
        <>
            <div>{produtos}</div>
        </>
    )
}