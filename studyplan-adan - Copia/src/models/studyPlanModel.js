import pool from "../config/database.js";

export async function salvarPlano(linguagem, observacoes, plano) {
  const resultado = await pool.query(
    `INSERT INTO study_plans (linguagem, observacoes, plano)
     VALUES ($1, $2, $3)
     RETURNING *`,
    [linguagem, observacoes, plano]
  );

  return resultado.rows[0];
}
