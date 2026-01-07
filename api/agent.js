export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed. Use POST."
    });
  }

  const { prompt } = req.body || {};

  if (!prompt) {
    return res.status(400).json({
      error: "Missing prompt"
    });
  }

  res.status(200).json({
    ok: true,
    received: prompt,
    answer: "Agente ativo. Serverless funcionando."
  });
}
