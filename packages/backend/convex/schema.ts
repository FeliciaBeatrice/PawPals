import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// clerk -> create user in convex -> use this user

export default defineSchema({
  notes: defineTable({
    userId: v.string(),
    title: v.string(),
    content: v.string(),
    summary: v.optional(v.string()),
  }), // TODO: remove this table
  users: defineTable({
    externalId: v.string(), // clerk user id
    isOnboardingCompleted: v.boolean(),
    name: v.optional(v.string()),
    displayPicture: v.optional(v.string()),
    role: v.optional(v.string()), // Assuming role is a string, adjust if it's a specific set of values
    location: v.optional(v.string()),
    availabilityStart: v.optional(v.number()), // Assuming this is a timestamp in milliseconds
    availabilityEnd: v.optional(v.number()), // Assuming this is a timestamp in milliseconds
    experience: v.optional(v.string()),
    skills: v.optional(v.string()),
    notes: v.optional(v.string()),    
  }).index("by_external_id", ["externalId"]),
  listings: defineTable({
    createdAt: v.number(), // Assuming this is a timestamp in milliseconds
    userId: v.id("users"), // Reference to users._id
    picture: v.string(),
    petName: v.string(),
    petType: v.string(),
    start: v.number(), // Assuming this is a timestamp in milliseconds
    end: v.number(), // Assuming this is a timestamp in milliseconds
    notes: v.string(),
  }),
  conversations: defineTable({
    createdAt: v.number(), // Assuming this is a timestamp in milliseconds
    ownerId: v.id("users"), // Reference to users._id
    sitterId: v.id("users"), // Reference to users._id
  }),
  messages: defineTable({
    createdAt: v.number(), // Assuming this is a timestamp in milliseconds
    conversationId: v.id("conversations"), // Reference to conversations._id
    senderId: v.id("users"), // Reference to users._id
    message: v.string(),
  }),
  reviews: defineTable({
    createdAt: v.number(), // Assuming this is a timestamp in milliseconds
    ownerId: v.id("users"), // Reference to users._id
    sitterId: v.id("users"), // Reference to users._id
    type: v.string(), // Assuming type is a string, adjust if it's a specific set of values
    comments: v.string(),
  }),
});
