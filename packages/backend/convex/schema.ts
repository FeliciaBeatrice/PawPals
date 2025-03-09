import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

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
    role: v.optional(v.string()),
    location: v.optional(v.string()),
    availabilityStart: v.optional(v.number()),
    availabilityEnd: v.optional(v.number()),
    experience: v.optional(v.string()),
    skills: v.optional(v.string()),
    notes: v.optional(v.string()),
  }).index("by_external_id", ["externalId"]),
  listings: defineTable({
    userId: v.id("users"),
    picture: v.string(),
    petName: v.string(),
    petType: v.string(),
    start: v.number(),
    end: v.number(),
    notes: v.optional(v.string()),
  }),
  conversations: defineTable({
    ownerId: v.id("users"),
    sitterId: v.id("users"),
  }).index("by_sitter_id", ["sitterId"])
    .index("by_owner_id", ["ownerId"])
    .index("by_owner_and_sitter", ["ownerId", "sitterId"]),
  messages: defineTable({
    conversationId: v.id("conversations"),
    senderId: v.id("users"),
    message: v.string(),
  }),
  reviews: defineTable({
    ownerId: v.id("users"),
    sitterId: v.id("users"),
    type: v.string(),
    comments: v.optional(v.string()),
  }),
});
