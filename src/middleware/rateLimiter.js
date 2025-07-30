import ratelimit from "../config/upstash";

const rateLimit = async (req, res, next) => {
    try {
        const { success } = await ratelimit.limit("my-limit-key");

        if (!success) {
            return res.status(429).json({ message: "Too many requests, please try again later." });
        }
        next();
    } catch (err) {
        console.error(err);
        next(err);
    }
}

export default rateLimit;