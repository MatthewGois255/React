import { Categorias } from './components/Categorias'
import { Listagem } from './components/Listagem'
import { getBurguers } from './services/api'

function App() {

    const burguers = getBurguers()

    // Um useState que esteja disponível pra ambos components por meio de um context
    return (
        <>
            <Categorias />
            <Listagem />
        </>
    )
}

export default App