// import { inngest } from "./client";
// import { google } from "@ai-sdk/google";
// import { generateText } from "ai";

// export const demoGenerate = inngest.createFunction(
//   { id: "demo-generate" },
//   { event: "demo/generate" },
//   async ({ step }) => {
//     const result = await step.run("generate-text", async () => {
//       return generateText({
//         model: google("gemini-2.5-flash"),
//         prompt: "what is the capital of delhi",
//       });
//     });

   
//   }
// );













import { inngest } from "./client";
import { google } from "@ai-sdk/google";
import { generateText } from "ai";

export const demoGenerate = inngest.createFunction(
  { id: "demo-generate" },
  { event: "demo/generate" },
  async ({ step }) => {
    const result = await step.run(
      "generate-text",
      async () => {
        return generateText({
          model: google("gemini-2.5-flash"),
          prompt: "Write a poem on the sea",
        });
      },
    
    );



    return {
      answer: (result as any)._output,
    };
  }
);

