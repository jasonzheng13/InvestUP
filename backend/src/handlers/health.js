import { successResponse  } from "../utils/response.js";

export async function handleHealth(c) {
    return c.json(successResponse({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        environment: c.env.ENVIRONMENT || 'development',
        version: c.env.VERSION || 'v1'
    }));
}