import { internalMutation } from "../_generated/server";
import { faker } from '@faker-js/faker';

export const seedOwners = internalMutation({
    handler: async (ctx, args) => {
        const owners = [];
        for (let i = 0; i < 10; i++) { // Adjust the number of owners as needed
            owners.push({
                name: faker.person.firstName(),
                externalId: "",
                displayPicture: faker.image.avatar(),
                location: faker.person.jobArea(),
                isOnboardingCompleted: true,
                availabilityStart: faker.date.past().getTime(),
                availabilityEnd: faker.date.future().getTime(),
                experience: faker.animal.type(),
                skills: faker.person.jobDescriptor(),
                role: "owner",
                notes: faker.lorem.paragraph(),
            });
        }

        for (const owner of owners) {
            await ctx.db.insert("users", owner);
        }

        return { message: "Pet owners seeded successfully!" };
    },
});