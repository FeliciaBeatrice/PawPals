import { query } from "../_generated/server";
import { getCurrentUserOrThrow } from "../users/userManagement";

export const getSitterProfile = query({
    args: {},
    handler: async (ctx) => {
        const user = await getCurrentUserOrThrow(ctx);
        const userId = user._id;
        if (!userId) return null;

        const sitterProfile = await ctx.db
            .query("users")
            .filter((q) => q.eq(q.field("_id"), userId))
            .collect();

        return sitterProfile;
    },
})