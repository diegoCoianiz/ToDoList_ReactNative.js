import mysql from "mysql2/promise"
import { config } from "./config";

                    /* conección y consultas SQL

const connect = async () => {
const conn = await mysql.createConnection(config)
//const result = await conn.query("SELECT 1 + 1")
//console.log(result)
const [rows] = await conn.query("SELECT 1 + 1")
console.log(rows)
}*/

export const connect = async () => {
    return await mysql.createConnection(config)
}