// Saber config file
// https://saber.land/docs/saber-config.html

module.exports = {
    siteConfig: {
        // Change this to the production URL of your website
        url: 'yanyamz.netlify.app',
        // description: 'In love with Vue'
    },

    // Use the package `saber-theme-portfolio`
    // More: https://saber.land/docs/themes.html
    theme: 'portfolio',

    // Configure the theme
    themeConfig: {
        projects: 'pinned-project',
        style: 'light',
        disqus: 'portfolio',
        github: 'yanyamz',
        twitter: '',
        nav: [
            {
                text: 'Home',
                link: '/',
            },
            {
                text: 'About',
                link: '/about',
            },
            {
                text: 'Contact',
                link: '/contact',
            },
            {
                text: 'Posts',
                link: '/posts',
            },
        ],
        skills: [
            {
                topic: 'html',
                description: `HTML - The markup I use on a daily basis`,
            },
            {
                topic: 'css',
                description: `CSS - My unexpected love thanks to flexbox and grid`,
            },
            {
                topic: 'sass',
                description: `Sass - CSS but on steroids, and what I prefer to write`,
            },
            {
                topic: 'bulma',
                description: `Bulma - When I can't be bothered to write all my css`,
            },
            {
                topic: 'tailwind',
                description: `Tailwind - When bulma makes me mad and I need to write my own css, but in a nicer way`,
            },
            {
                topic: 'javascript',
                description: `Javascript - Despite my use of Vue, I do enjoy using vanilla JS`,
            },
            {
                topic: 'vue',
                description: `Vue - My frontend framework of choice`,
            },
            {
                topic: 'firebase',
                description: `Firebase - When I need a quick backend`,
            },
            {
                topic: 'nodejs',
                description: `NodeJS - When I need a custom backend`,
            },

            {
                topic: 'linux',
                description: `Linux - Because I love developing on Unix systems`,
            },
        ],
    },

    permalinks: {
        page: '/:slug',
        post: '/posts/:slug',
    },

    plugins: [
        {
            resolve: 'saber-plugin-query-posts',
        },
        {
            resolve: 'saber-plugin-feed',
            options: {
                atomFeed: true,
            },
        },
    ],
}
