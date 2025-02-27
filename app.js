import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function CriarEPopularTabelaUsuario(nome, sobrenome) {
    // Abrir conexão com o banco SQLite
    const db = await open({
        filename: './banco.db',  // Nome do arquivo do banco de dados
        driver: sqlite3.Database,
    });

    // Criar a tabela se não existir
    await db.run('CREATE TABLE IF NOT EXISTS usuario (id INTEGER PRIMARY KEY, nome TEXT, sobrenome TEXT)');

    // Inserir um usuário na tabela
    db.run('INSERT INTO usuario (nome, sobrenome) VALUES (?, ?)', [nome, sobrenome]);

    
}

// Chamar a função para criar a tabela e inserir o usuário
CriarEPopularTabelaUsuario('João', 'Silva');