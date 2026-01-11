import "dotenv/config";
import { google } from "@ai-sdk/google";
import { generateText } from "ai";

async function testGemini() {
  const result = await generateText({
    model: google("gemini-2.5-flash"),
    prompt: "What is the capital of India?",
  });

  console.log("Gemini response:", result.text);
}

testGemini().catch(console.error);
