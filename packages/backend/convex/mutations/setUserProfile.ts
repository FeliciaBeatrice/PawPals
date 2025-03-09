import { mutation } from "../_generated/server";
import { v } from "convex/values";
import { getCurrentUserOrThrow } from "../users/userManagement";

export const setOwnerProfile = mutation({
    args: {
        name: v.optional(v.string()),
        displayPicture: v.optional(v.string()),
        location: v.optional(v.string()),
    },
    handler: async (ctx, { name, displayPicture, location }) => {
        const user = await getCurrentUserOrThrow(ctx);
        const userId = user._id;

        await ctx.db.patch(userId, {
            isOnboardingCompleted: true,
            name: name,
            displayPicture: displayPicture,
            location: location
        });
      },
})

export const setSitterProfile = mutation({
    args: {
        name: v.optional(v.string()),
        displayPicture: v.optional(v.string()),
        location: v.optional(v.string()),
        availabilityStart: v.number(),
        availabilityEnd: v.number(),
        experience: v.optional(v.string()),
        skills: v.optional(v.string()),
        notes: v.optional(v.string()),
    },
    handler: async (ctx, { name, displayPicture, location, availabilityStart, availabilityEnd, experience, skills, notes }) => {
        const user = await getCurrentUserOrThrow(ctx);
        const userId = user._id;

        await ctx.db.patch(userId, {
            isOnboardingCompleted: true,
            name: name,
            displayPicture: displayPicture,
            location: location,
            availabilityStart: availabilityStart,
            availabilityEnd: availabilityEnd,
            experience: experience,
            skills: skills,
            notes: notes
        });
      },
})