import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function DeletarUsuario(nome, sobrenome) {
    // Abrir conexão com o banco de dados
    const db = await open({
        filename: './banco.db',
        driver: sqlite3.Database,
    });

    // Executar a deleção do usuário
    const result = await db.run('DELETE FROM usuario WHERE nome = ? AND sobrenome = ?', [nome, sobrenome]);

    // Verificar se algum usuário foi deletado
    if (result.changes > 0) {
        console.log(`Usuário ${nome} ${sobrenome} deletado com sucesso!`);
    } else {
        console.log(`Usuário ${nome} ${sobrenome} não encontrado.`);
    }

    // Fechar a conexão com o banco
     db.close();
}

// Testar a função deletando um usuário
DeletarUsuario('João', 'Silva');