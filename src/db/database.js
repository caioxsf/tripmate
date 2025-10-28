// src/db/mobileDb.js
import * as SQLite from 'expo-sqlite';

let db;

export async function getMobileDb() {
    if (db) return db;

    db = await SQLite.openDatabaseAsync('viagens.db');

    await db.execAsync(`
    CREATE TABLE IF NOT EXISTS viagem (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome_viagem TEXT,
        destino TEXT,
        data_ida TEXT,
        data_volta TEXT,
        notas TEXT
    );

`);

    return db;
}

export async function criarViagem({ nome_viagem, destino, data_ida, data_volta, notas }) {
    const db = await getMobileDb();
    const result = await db.runAsync(
        'INSERT INTO viagem (nome_viagem, destino, data_ida, data_volta, notas) VALUES (?, ?, ?, ?, ?)',
        [nome_viagem, destino, data_ida, data_volta, notas]
    );
    return result.lastInsertRowId;
}

export async function listarViagens() {
    const db = await getMobileDb();
    const rows = await db.getAllAsync('SELECT * FROM viagem ORDER BY id DESC;');
    if (rows.length > 0)
        return rows;
    return [];
}