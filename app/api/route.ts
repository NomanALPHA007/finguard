// /pages/api/chatbot.ts
import type { NextApiRequest, NextApiResponse } from "next";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { userMessage } = req.body;

    if (!userMessage) {
      return res.status(400).json({ message: "Message is required." });
    }

    try {
      // Make a request to OpenAI API
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo", // or whichever model you want to use
            messages: [{ role: "user", content: userMessage }],
          }),
        }
      );

      const data = await response.json();

      // Return the bot's response
      if (data?.choices && data.choices.length > 0) {
        return res
          .status(200)
          .json({ message: data.choices[0].message.content });
      } else {
        return res
          .status(500)
          .json({ message: "Failed to get a valid response." });
      }
    } catch (error) {
      console.error("Error fetching from OpenAI:", error);
      return res.status(500).json({ message: "Error fetching response." });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
