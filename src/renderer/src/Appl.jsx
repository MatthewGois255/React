import { Hamburguer1 } from './pages/Hamburguer1'
import { Hamburguer2 } from './pages/Hamburguer2'

import { Routes, Route } from 'react-router-dom'

function Appl() {
    return (
        <>
            <p>Escolha uma opção</p>
            <a href="/Mc"><p>Mc</p></a>
            <a href="/Bk"><p>BK</p></a>
            <Routes>
                <Route path='/Mc' element={<Hamburguer1 />}></Route>
                <Route path='/Bk' element={<Hamburguer2 />}></Route>
            </Routes>
            <Routes>
                <Route path='/Bk' element={<p>2 Hambúrguers disponíveis</p>}></Route>
            </Routes>

        </>
    )
}

export default Appl