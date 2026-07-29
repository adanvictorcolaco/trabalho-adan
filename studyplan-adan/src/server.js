import express from "express";
import dotenv from "dotenv";
import studyPlanRoutes from "./routes/studyPlanRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    mensagem: "API de plano de estudos do Adan Victor Colaco"
  });
});

app.use("/studyplan", studyPlanRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
