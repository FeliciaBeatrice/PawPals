import { httpAction } from "./_generated/server";
import { internal } from "./_generated/api";
import { ConvexError } from "convex/values";

export const onClerkWebhookEventReceived = httpAction(async (ctx, request) => {
    const requestObj = await request.json();

    if (requestObj.object != 'event') {
        return new Response();
    }

    const clerkUserId: string = requestObj.data.id;

    if (requestObj.type == 'user.created') {
        const email: string = requestObj.data.email_addresses[0]?.email_address;
        if (!email) throw new ConvexError('Email not found');
        const firstName: string = requestObj.data.first_name ?? undefined;
        const lastName: string = requestObj.data.last_name ?? undefined;
        const avatarUrl: string = requestObj.data.profile_image_url ?? undefined;
        await ctx.runMutation(internal.userManagement.createDbUserMutation, { clerkUserId, email, firstName, lastName, avatarUrl });
    }

    if (requestObj.type == 'user.deleted') {
        await ctx.runAction(internal.userManagement.deleteUserAction, { clerkUserId });
    }

    return new Response();
});