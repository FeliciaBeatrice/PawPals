import { httpRouter } from "convex/server";
import { onClerkWebhookEventReceived } from "./webhooks";
const http = httpRouter();

http.route({
  path: "/webhooks/clerk",
  method: "POST",
  handler: onClerkWebhookEventReceived,
});

export default http;