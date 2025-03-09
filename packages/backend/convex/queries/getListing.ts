import { query } from "../_generated/server";

export const getAllListings = query({
    args: {},
    handler: async (ctx) => {
        const listings = await ctx.db
            .query("listings")
            .collect();

        return listings;
    },
});