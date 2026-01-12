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













import { firecrawl } from "@/lib/firecrawl";
import { inngest } from "./client";
import { google } from "@ai-sdk/google";
import { generateText } from "ai";


const URL_REGEX =
  /(https?:\/\/[\w.-]+\.[a-z]{2,}(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?)/gi;


export const demoGenerate = inngest.createFunction(
  { id: "demo-generate" },
  { event: "demo/generate" },
  async ({ event, step }) => {

    const { prompt }  = event.data as { prompt: string };

    const urls = await step.run("extract-urls", async () => {
        return prompt.match(URL_REGEX) || [];
    })as string[];


    const scrapedContent = await step.run("scrape-urls", async ()=>{
        const results = await Promise.all(
            urls.map(async(url)=>{
                const result  = await firecrawl.scrape(
                  url, 
                  { formats: ["markdown"]}
                );

                return result.markdown ?? null;
            })
        )

        return results.filter(Boolean).join("\n\n");
    })

    const finalPrompt = scrapedContent ? `Context:\n${scrapedContent}\n\nQuestion: ${prompt}`
    : prompt;

    const result = await step.run(
      "generate-text",
      async () => {
        return generateText({
          model: google("gemini-2.5-flash"),
          prompt: finalPrompt,
        });
      },
    
    );



    return {
      answer: (result as any)._output,
    };
  }
);

