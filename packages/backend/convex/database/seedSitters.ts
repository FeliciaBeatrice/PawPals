import { internalMutation } from "../_generated/server";
import { faker } from '@faker-js/faker';

export const seedSitters = internalMutation({
    handler: async (ctx, args) => {
        const sitters = [];
        for (let i = 0; i < 10; i++) { // Adjust the number of sitters as needed
            sitters.push({
                name: faker.person.firstName(),
                externalId: "",
                displayPicture: faker.image.avatar(),
                location: faker.person.jobArea(),
                isOnboardingCompleted: true,
                availabilityStart: faker.date.past().getTime(),
                availabilityEnd: faker.date.future().getTime(),
                experience: faker.animal.type(),
                skills: faker.person.jobDescriptor(),
                role: "sitter",
                notes: faker.lorem.paragraph(),
            });
        }

        for (const sitter of sitters) {
            await ctx.db.insert("users", sitter);
        }

        return { message: "Pet sitters seeded successfully!" };
    },
});