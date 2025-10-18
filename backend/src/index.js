// Importing necessary modules from Cloudflare Workers

import app from './router.js';

// Routes : URL path our API responds to
// Example: POST /api/frame to receive image frames from frontend
// Example : GET /api/health to check backend status


// Make worker available to Cloudflare
export default app;