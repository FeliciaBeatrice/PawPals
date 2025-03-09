import { v } from "convex/values";
import { mutation } from "../_generated/server";
import { getCurrentUserOrThrow } from "../users/userManagement";

export const createConversationMutation = mutation({
    args: {
        userId: v.id("users"),
    },
    handler: async (ctx, args) => {
        const user = await getCurrentUserOrThrow(ctx);
        const userId = user._id;
        if (!userId) return null;

        const existingConversation = await ctx.db.query("conversations")
            .filter((q) => q.and(
                q.eq(q.field("ownerId"), args.userId),
                q.eq(q.field("sitterId"), userId)
            ))
            .first();
        if (existingConversation) {
            await ctx.db.insert("messages", {
                conversationId: existingConversation._id,
                senderId: userId,
                message: `Hello, I am interested in looking after your pet.`,
            });
            return existingConversation._id;
        }

        const conversation = await ctx.db.insert("conversations", {
            ownerId: args.userId,
            sitterId: userId,
        });

        await ctx.db.insert("messages", {
            conversationId: conversation,
            senderId: userId,
            message: `Hello, I am interested in looking after your pet.`,
        });

        return conversation;
    }
})