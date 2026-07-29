import { gerarPlanoComGemini } from "../services/geminiService.js";
import { salvarPlano } from "../models/studyPlanModel.js";

export async function criarPlanoDeEstudo(req, res) {
  try {
    const { linguagem, observacoes } = req.body;

    if (!linguagem || !observacoes) {
      return res.status(400).json({
        erro: "Envie linguagem e observacoes no corpo da requisicao."
      });
    }

    const plano = await gerarPlanoComGemini(linguagem, observacoes);
    const planoSalvo = await salvarPlano(linguagem, observacoes, plano);

    return res.status(201).json({
      mensagem: "Plano de estudo criado e salvo com sucesso.",
      dados: planoSalvo
    });
  } catch (erro) {
    console.error(erro);

    return res.status(500).json({
      erro: "Erro ao criar o plano de estudo."
    });
  }
}
