import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

export async function gerarPlanoComGemini(linguagem, observacoes) {
  const prompt = `
Crie um plano de ensino simples para um aluno que esta estudando programacao.

Linguagem de programacao: ${linguagem}
Observacoes do aluno: ${observacoes}

O plano deve ter:
- objetivo geral
- conteudos para estudar
- atividades praticas
- uma rotina de estudos de 5 dias
- dicas finais

Escreva em portugues e em texto simples.
`;

  const resposta = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    contents: prompt
  });

  return resposta.text;
}
