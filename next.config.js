

if (!process.env.WORDPRESS_API_URL) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `)
}

/** @type {import('next').NextConfig} */
module.exports = {

  images: {
    unoptimized: true,
    
    domains: [
     // process.env.WORDPRESS_API_URL.match(/(?!(w+)\.)\w*(?:\w+\.)+\w+/)[0], // Valid WP Image domain.
      //  'http://localhost:8888/',
      '0.gravatar.com',
      '1.gravatar.com',
      '2.gravatar.com',
      'secure.gravatar.com',
    ],
    // path:'http://localhost:8888/tedxwordpress/wp-content/uploads'
  },
}