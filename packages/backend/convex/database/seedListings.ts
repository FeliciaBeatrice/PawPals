import { internalMutation } from "../_generated/server";
import { faker } from '@faker-js/faker';

export const seedListings = internalMutation({
    handler: async (ctx) => {
        const listings = [];
        const owners = await ctx.db.query("users").collect();

        for (let i = 0; i < 10; i++) {
            const owner = owners[Math.floor(Math.random() * owners.length)];
            listings.push({
                userId: owner._id,
                picture: faker.image.avatarGitHub(),
                petName: faker.animal.petName(),
                petType: faker.animal.type(),
                start: faker.date.past().getTime(),
                end: faker.date.future().getTime(),
                notes: faker.lorem.sentence(),
            });
        }

        for (const listing of listings) {
            await ctx.db.insert("listings", listing);
        }

        return { message: "Pet listings seeded successfully!" };
    },
});