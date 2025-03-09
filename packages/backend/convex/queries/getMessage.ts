import { v } from "convex/values";
import { query } from "../_generated/server";
import { getCurrentUserOrThrow } from "../users/userManagement";

export const getMessages = query({
    args: { conversationId: v.id("conversations") },
    handler: async (ctx, { conversationId }) => {
        const user = await getCurrentUserOrThrow(ctx);
        const userId = user._id;
        if (!userId) return null;

        const messages = await ctx.db
            .query("messages")
            .filter(q => q.eq(q.field("conversationId"), conversationId))
            .collect();

        const messagesWithSenderNames = await Promise.all(messages.map(async (message) => {
            const sender = await ctx.db.get(message.senderId);
            return {
                ...message,
                senderName: sender?.name,
            };
        }));

        return messagesWithSenderNames;
    },
});