// packages/backend/convex/queries/getAllUsers.ts
import { query } from "../_generated/server";

export const getOwnerProfiles = query({
    args: {},
    handler: async (ctx) => {
        const ownerUsers = await ctx.db
            .query("users")
            .filter((q) => q.eq(q.field("role"), "owner"))
            .collect();

        return ownerUsers;
    },
});