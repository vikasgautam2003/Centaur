import { Inngest } from "inngest"
import "dotenv/config";
import { sentryMiddleware } from "@inngest/middleware-sentry"


export const inngest = new Inngest({
     id: "centaur",
     middleware: [sentryMiddleware()],
    
    })