// Saber config file
// https://saber.land/docs/saber-config.html

module.exports = {
    siteConfig: {
      // Change this to the production URL of your website
      url: 'https://example.com',
      // description: 'In love with Vue'
    },
  
    // Use the package `saber-theme-portfolio`
    // More: https://saber.land/docs/themes.html
    theme: 'portfolio',
  
    // Configure the theme
    themeConfig: {
      style: 'light',
      github: 'yanyamz',
      twitter: '',
      sponsorLink: '',
      sponsorTip: 'Support my work',
      nav: [
        {
          text: 'Home',
          link: '/'
        },
        {
          text: 'About',
          link: '/about'
        },
        {
          text: 'Contact',
          link: '/contact'
        }
      ],
      skills: [
        {
          topic: 'vue',
          description: `I love working with vue, vue-router, and vuex, as you can see from my projects`
        },
        {
          topic: 'firebase',
          description: `The only way I get anything that needs a database or authentication done`
        },
        {
          topic: 'nodejs',
          description: `Although familiar, backend is still not my expertise, I'm getting there though`
        },
        {
          topic: 'sass',
          description: `I'm a big fan of the BEM method of writing and organizing CSS, so this is my preferred way of writing css`
        },
        {
          topic: 'bulma',
          description: `When I'm not using custom CSS, and I want to spring up a project quick, bulma is my choice`
        },
        {
          topic: 'tailwind',
          description: `I guess I just really like messing with CSS, because tailwind is my newest way of writing CSS`
        },
        {
          topic: 'javascript',
          description: `Despite my use of Vue, I do enjoy using vanilla JS`
        },
        {
          topic: 'linux',
          description: `I prefer working on Unix systems like Mac or Linux, the terminal is my future wife.`
        },
      ]
    },
  
    permalinks: {
      page: '/:slug',
      post: '/posts/:slug'
    },
  
    plugins: [
      {
        resolve: 'saber-plugin-query-posts'
      },
      {
        resolve: 'saber-plugin-feed',
        options: {
          atomFeed: true
        }
      }
    ]
  }
  