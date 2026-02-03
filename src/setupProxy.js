const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  // Only proxy API requests, not static files
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5001',
      changeOrigin: true,
      onError: (err, req, res) => {
        // Silently handle proxy errors for development
        // This prevents console spam when backend is not running
        if (res && !res.headersSent) {
          res.status(503).json({ error: 'Backend server is not available' });
        }
      },
      logLevel: 'silent' // Suppress proxy error logs
    })
  );
};

