import { query } from "../../_generated/server";
import { getCurrentUserOrThrow } from "../../users/userManagement";

export const getRole = query({
    args: {},
    handler: async (ctx) => {
        const user = await getCurrentUserOrThrow(ctx);
        const userId = user._id;
        if (!userId) return null;

        return user.role;
    },
})