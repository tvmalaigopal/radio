// This will proxy your HTTP audio stream securely over HTTPS
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (req, res) => {
  // Remove the /api/proxy path prefix
  req.url = req.url.replace('/api/proxy', '');

  return createProxyMiddleware({
    target: 'http://198.7.62.157:10088',
    changeOrigin: true,
    ws: true, // For WebSocket streams if needed
    onError: (err, req, res) => {
      console.error('Proxy error:', err);
      res.status(500).send('Proxy error');
    }
  })(req, res);
};