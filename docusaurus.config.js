const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
    title: 'Rych Help Centre',
    tagline: 'How Can We Help You?',
    url: 'https://veeni21.github.io/',
    baseUrl: '/help-centre/',
    // baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.png',
    organizationName: 'Veeni21', // Usually your GitHub org/user name.
    projectName: 'help-centre', // Usually your repo name.

    presets: [
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    routeBasePath: '/',
                    // Please change this to your repo.
                    // editUrl: 'https://github.com/Veeni21/help-centre/edit/main/website/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/blog/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
        colorMode: {
            disableSwitch: false,
        },
        navbar: {
            title: 'Rych Help Centre',
            logo: {
                alt: 'Rych Logo',
                src: './img/sample3.png',
                srcDark: 'img/sample3.png',
            },
            // items: [{
            //     type: 'doc',
            //     docId: 'intro',
            //     position: 'left',
            //     label: 'Tutorial',
            // }, ],
        },
        footer: {
            style: 'dark',
            links: [{
                    title: 'Docs',
                    items: [{
                        label: 'Tutorial',
                        to: '/',
                    }, ],
                },
                // {
                //     title: 'Community',
                //     items: [{
                //             label: 'Stack Overflow',
                //             href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                //         },
                //         {
                //             label: 'Discord',
                //             href: 'https://discordapp.com/invite/docusaurus',
                //         },
                //         {
                //             label: 'Twitter',
                //             href: 'https://twitter.com/docusaurus',
                //         },
                //     ],
                // },
                // {
                //     title: 'More',
                //     items: [{
                //             label: 'Blog',
                //             to: '/blog',
                //         },
                //         {
                //             label: 'GitHub',
                //             href: 'https://github.com/facebook/docusaurus',
                //         },
                //     ],
                // },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} | Powered by Rych Communications Portal.`,
        },
    }),
});