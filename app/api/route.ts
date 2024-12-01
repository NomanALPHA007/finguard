// /app/api/chatbot/route.ts
import { NextResponse } from "next/server";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Make sure the API key is set correctly in your .env file
});

export async function POST(request: Request) {
  const { userMessage } = await request.json();

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant for law, legal, and finance topics.",
        },
        { role: "user", content: userMessage },
      ],
    });

    return NextResponse.json({
      message: response.choices[0]?.message?.content,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
