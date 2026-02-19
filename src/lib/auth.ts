import { betterAuth } from "better-auth";

const baseURL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL,
});
