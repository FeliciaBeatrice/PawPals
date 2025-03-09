import { internalAction, internalMutation, internalQuery } from "./_generated/server";
import { internal } from "./_generated/api";
import { ConvexError, v } from "convex/values";

export const createDbUserMutation = internalMutation({
    args: {
        clerkUserId: v.string(),
        email: v.string(),
        firstName: v.optional(v.string()),
        lastName: v.optional(v.string()),
        avatarUrl: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
        const user = await ctx.db.query('users').withIndex('by_external_id', q => q.eq('externalId', args.clerkUserId)).first();
        if (user) return user._id;
        const userId = await ctx.db.insert("users", {
            externalId: args.clerkUserId,
            isOnboardingCompleted: false,
        });
        return userId;
    }
});

export const deleteDbUserMutation = internalMutation({
    args: { userId: v.id('users') },
    handler: async (ctx, args) => {
        await ctx.db.delete(args.userId);
    }
});

export const findDbUserByClerkUserIdQuery = internalQuery({
    args: { clerkUserId: v.string() },
    handler: async (ctx, args) => {
        const user = await ctx.db.query('users').withIndex('by_external_id', q => q.eq('externalId', args.clerkUserId)).unique();
        return user;
    }
});

export const createUserAction = internalAction({
    args: { clerkUserId: v.string(), email: v.string(), firstName: v.string(), lastName: v.string(), avatarUrl: v.string() },
    handler: async (ctx, args) => {
        await ctx.runMutation(internal.userManagement.createDbUserMutation, { clerkUserId: args.clerkUserId, email: args.email, firstName: args.firstName, lastName: args.lastName, avatarUrl: args.avatarUrl });
    }
});

export const deleteUserAction = internalAction({
    args: { clerkUserId: v.string() },
    handler: async (ctx, args) => {
        const dbUser = await ctx.runQuery(internal.userManagement.findDbUserByClerkUserIdQuery, { clerkUserId: args.clerkUserId });
        if (!dbUser) {
            throw new ConvexError('invalid user')
        }
        await ctx.runMutation(internal.userManagement.deleteDbUserMutation, { userId: dbUser._id });
    }
});