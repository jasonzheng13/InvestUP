// Importing necessary modules from Cloudflare Workers
// Hono is lightweight web framework for Cloudflare workers
// Helps create api routes

// Delete Comments once Giancarlo receives 10-18-2025

import { Hono } from 'hono';

// Initializing Hono framework

const app = new Hono();

// Defining route for GET request for bug testing

app.get('/api/health', (c) => {
    // Responding with a JSON indicating the backend is running smoothly if route called
    return c.json({ status: 'healthy', message: 'Backend is running smoothly!' });
});

// Routes : URL path our API responds to
// Example: POST /api/frame to receive image frames from frontend
// Example : GET /api/health to check backend status


// Make worker available to Cloudflare
export default app;