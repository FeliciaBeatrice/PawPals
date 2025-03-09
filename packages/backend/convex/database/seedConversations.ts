import { internalMutation } from "../_generated/server";
import { faker } from '@faker-js/faker';

export const seedConversations = internalMutation({
    handler: async (ctx) => {
        const conversations = [];
        const users = await ctx.db.query("users").collect();

        for (let i = 0; i < 10; i++) {
            const owner = users[Math.floor(Math.random() * users.length)];
            const sitter = users[Math.floor(Math.random() * users.length)];
            const message = faker.lorem.sentence();

            // Create a conversation entry
            const conversation = {
                ownerId: owner._id,
                sitterId: sitter._id,
            };

            // Insert the conversation into the database
            const conversationId = await ctx.db.insert("conversations", conversation);

            // Create a message entry
            await ctx.db.insert("messages", {
                conversationId: conversationId,
                senderId: owner._id, // Assuming the owner sends the first message
                message: message,
            });

            conversations.push(conversation);
        }

        return { message: "Conversations seeded successfully!" };
    },
});
