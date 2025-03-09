import { query } from "../_generated/server";
import { getCurrentUserOrThrow } from "../users/userManagement";

export const getConversations = query({
    args: {},
    handler: async (ctx) => {
        const user = await getCurrentUserOrThrow(ctx);
        const userId = user._id;
        if (!userId) return null;

        const conversations = await ctx.db
            .query("conversations")
            .filter((q) => q.or(
                q.eq(q.field("ownerId"), userId),
                q.eq(q.field("sitterId"), userId)
            ))
            .collect();

        const conversationsWithDetails = await Promise.all(conversations.map(async (conversation) => {
            const otherUserId = conversation.ownerId === userId ? conversation.sitterId : conversation.ownerId;
            const otherUser = await ctx.db.get(otherUserId);
            return {
                ...conversation,
                otherUserName: otherUser?.name,
                otherUserDisplayPicture: otherUser?.displayPicture,
            };
        }));

        return conversationsWithDetails;
    },
})