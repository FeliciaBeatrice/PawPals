import { query } from "../_generated/server";
import { getCurrentUserOrThrow } from "../users/userManagement";

export const getConversationsOfSitter = query({
    args: {},
    handler: async (ctx) => {
        const user = await getCurrentUserOrThrow(ctx);
        const userId = user._id;
        if (!userId) return null;
        
        console.log("Fetching conversations for userId:", userId); // Debugging log

        const conversations = await ctx.db
            .query("conversations")
            .withIndex("by_sitter_id", (q) => q.eq("sitterId", userId))
            .collect();

        console.log("Conversations found:", conversations); // Debugging log

        const conversationsWithDetails = await Promise.all(conversations.map(async (conversation) => {
            const otherUserId = conversation.ownerId === userId ? conversation.sitterId : conversation.ownerId;
            const otherUser = await ctx.db.get(otherUserId);
            return {
                ...conversation,
                otherUserName: otherUser?.name,
                otherUserDisplayPicture: otherUser?.displayPicture,
            };
        }));

        // return [];
        return conversationsWithDetails;
    },
})