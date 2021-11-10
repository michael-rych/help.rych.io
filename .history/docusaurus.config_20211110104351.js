const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
    title: 'Rych Help Centre',
    tagline: 'How Can We Help You?',
    url: 'https://veeni21.github.io/help.rych.io/',
    baseUrl: '/help.rych.io/',
    //
    // baseUrl: '/',
    //
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.png',
    organizationName: 'michael-rych', // Usually your GitHub org/user name.
    projectName: 'help.rych.io', // Usually your repo name.

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
    // stylesheets: [
    //     // String format.
    //     'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css'
    // ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
        navbar: {
            title: 'Rych Help Centre',
            logo: {
                alt: 'Rych Logo',
                src: './img/logo.png',
                srcDark: './img/logoDrk.png',
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
                {
                    title: 'Quick Links',
                    items: [{
                            label: 'About Us',
                            href: 'https://rych.io/about-us/'
                        }, {
                            label: 'Features',
                            href: 'https://rych.io/',
                        }, {
                            label: 'Pricing',
                            href: 'https://rych.io/pricing/',
                        }, {
                            label: 'Blog',
                            href: 'https://rych.io/blog/'
                        }, {
                            label: 'Sign Up',
                            href: 'https://app.rych.io/pages/register.html',
                        },
                        {
                            label: 'Contact Us',
                            href: 'https://rych.io/contact/'
                        },

                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} | Powered by Rych`,
            logo: {
                alt: 'Rych Logo',
                src: './img/logoDrk.png',
                srcDark: './img/logoDrk.png',
            },
        },
    }),
});