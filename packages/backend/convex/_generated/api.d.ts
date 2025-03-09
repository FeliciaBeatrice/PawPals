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
import type * as mutations_setUserProfile from "../mutations/setUserProfile.js";
import type * as mutations_setUserRole from "../mutations/setUserRole.js";
import type * as notes from "../notes.js";
import type * as openai from "../openai.js";
import type * as queries_getConversation from "../queries/getConversation.js";
import type * as queries_getListing from "../queries/getListing.js";
import type * as queries_getMessage from "../queries/getMessage.js";
import type * as queries_getUserProfile from "../queries/getUserProfile.js";
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
  "mutations/setUserProfile": typeof mutations_setUserProfile;
  "mutations/setUserRole": typeof mutations_setUserRole;
  notes: typeof notes;
  openai: typeof openai;
  "queries/getConversation": typeof queries_getConversation;
  "queries/getListing": typeof queries_getListing;
  "queries/getMessage": typeof queries_getMessage;
  "queries/getUserProfile": typeof queries_getUserProfile;
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
