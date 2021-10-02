module.exports = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/:path*',
          has: [{ type: 'host', value: '(?<subdomain>.*).vercel.(?<extension>group|gg|xyz|wtf|app' }],
          destination: '/?subdomain=:subdomain&extension=:extension&path=:path*',
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
}
