import db from '../Database/db.js'

class Produtos {
    listarTodosProdutos() {
        const stmt = db.prepare('SELECT * FROM produtos');
        console.log(stmt.all());
    }
}

export default Produtos