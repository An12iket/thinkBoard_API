import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
require("dotenv").config();

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
});
export const ratelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(10, "20 s"), // 10 requests every 10 seconds
});
