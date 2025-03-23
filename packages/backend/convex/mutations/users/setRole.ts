import { v } from "convex/values";
import { mutation } from "../../_generated/server";
import { getCurrentUserOrThrow } from "../../users/userManagement";

export const setRole = mutation({
    args: {
        role: v.string(),   // owner or sitter
    },
    handler: async (ctx, { role }) => {
        const user = await getCurrentUserOrThrow(ctx);
        const userId = user._id;

        await ctx.db.patch(userId, {
            role: role
        });
      },
})
