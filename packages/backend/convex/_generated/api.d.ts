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
import type * as http from "../http.js";
import type * as mutations_setUserRole from "../mutations/setUserRole.js";
import type * as notes from "../notes.js";
import type * as openai from "../openai.js";
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
  http: typeof http;
  "mutations/setUserRole": typeof mutations_setUserRole;
  notes: typeof notes;
  openai: typeof openai;
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
