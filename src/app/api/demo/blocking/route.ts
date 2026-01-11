import { generateText } from 'ai'
import {  createGoogleGenerativeAI } from '@ai-sdk/google'

const google = createGoogleGenerativeAI({
    apiKey: process.env.GOOGLE_API_KEY!,
})


export async function POST() {
    const response = await generateText({
        model: google('gemini-2.5-flash'),
        prompt: 'Write a short poem about the sea.',
    })


    return Response.json({ text: response.text })
}