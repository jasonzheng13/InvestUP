import { Hono } from 'hono';
import { corsMiddleware } from './middleware/cors.js';
import { handleHealth } from './handlers/health.js';
import { handleSearch } from './handlers/search.js';
import { handleGetProperty } from './handlers/property.js';
import { handleCalculate } from './handlers/calculate.js';

const app = new Hono();

app.use('*', corsMiddleware());

app.get('/api/health', handleHealth);

app.get('/api/properties', handleSearch);

app.get('/api/properties/:id', handleGetProperty);

app.get('/api/calculate/:id', handleCalculate);

app.get('/', (c) => {
  return c.json({
    name: 'Bryan Real Estate API',
    version: '1.0.0',
    endpoints: [
      'GET /api/health',
      'GET /api/properties',
      'GET /api/properties/:id',
      'GET /api/calculate/:id',
    ],
  });
});

app.notFound((c) => {
  return c.json({
    success: false,
    error: 'Endpoint not found',
  }, 404);
});

app.onError((err, c) => {
  console.error('Global error:', err);
  return c.json({
    success: false,
    error: err.message || 'Internal server error',
  }, 500);
});

export default app;