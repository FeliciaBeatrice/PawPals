/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as database_seedConversations from "../database/seedConversations.js";
import type * as database_seedListings from "../database/seedListings.js";
import type * as database_seedOwners from "../database/seedOwners.js";
import type * as database_seedSitters from "../database/seedSitters.js";
import type * as http from "../http.js";
import type * as mutations_createConversation from "../mutations/createConversation.js";
import type * as mutations_users_setProfile from "../mutations/users/setProfile.js";
import type * as mutations_users_setRole from "../mutations/users/setRole.js";
import type * as queries_getConversationsOfOwner from "../queries/getConversationsOfOwner.js";
import type * as queries_getConversationsOfSitter from "../queries/getConversationsOfSitter.js";
import type * as queries_getListing from "../queries/getListing.js";
import type * as queries_getMessage from "../queries/getMessage.js";
import type * as queries_getUserProfile from "../queries/getUserProfile.js";
import type * as queries_users_getIsOnboardingCompleted from "../queries/users/getIsOnboardingCompleted.js";
import type * as queries_users_getRole from "../queries/users/getRole.js";
import type * as users_userManagement from "../users/userManagement.js";
import type * as utils from "../utils.js";
import type * as webhooks from "../webhooks.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  "database/seedConversations": typeof database_seedConversations;
  "database/seedListings": typeof database_seedListings;
  "database/seedOwners": typeof database_seedOwners;
  "database/seedSitters": typeof database_seedSitters;
  http: typeof http;
  "mutations/createConversation": typeof mutations_createConversation;
  "mutations/users/setProfile": typeof mutations_users_setProfile;
  "mutations/users/setRole": typeof mutations_users_setRole;
  "queries/getConversationsOfOwner": typeof queries_getConversationsOfOwner;
  "queries/getConversationsOfSitter": typeof queries_getConversationsOfSitter;
  "queries/getListing": typeof queries_getListing;
  "queries/getMessage": typeof queries_getMessage;
  "queries/getUserProfile": typeof queries_getUserProfile;
  "queries/users/getIsOnboardingCompleted": typeof queries_users_getIsOnboardingCompleted;
  "queries/users/getRole": typeof queries_users_getRole;
  "users/userManagement": typeof users_userManagement;
  utils: typeof utils;
  webhooks: typeof webhooks;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
