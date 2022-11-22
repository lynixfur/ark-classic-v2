const withMDX = require('@next/mdx')({
  extension: /\.mdx$/
})
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
  async redirects() {
    return [
      {
        source: '/wiki/:id',
        destination: '/info/:id',
        permanent: true,
      },
      {
        source: '/login',
        destination: '/api/auth/steam',
        permanent: true,
      },
      {
        source: '/register',
        destination: '/api/auth/steam',
        permanent: true,
      },
    ]
  }
})