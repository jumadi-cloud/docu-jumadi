const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Kelas Awan Pintar',
  tagline: 'Buka Masa Depanmu Dengan Terus Belajar!',
  url: 'https://jumadi-cloud.github.io.git',
  baseUrl: '/docu-jumadi/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/kap.png',
  organizationName: 'jumadi-cloud',
  projectName: 'docu-jumadi',
  themeConfig: {
    // googleAnalytics: {
    //     trackingID: 'G-EL58ST4JHS',
    //     anonymizeIP: true,
    // },
    // gtag: {
    //     trackingID: 'G-EL58ST4JHS',
    //     anonymizeIP: true,
    // },
    navbar: {
      title: 'Kelas Awan Pintar',
      logo: {
        alt: 'Kelas Awan Pintar',
        src: 'img/kap.png',
      },
      items: [
        // {
        //     type: 'doc',
        //     docId: 'intro',
        //     position: 'left',
        //     label: 'Docs',
        // },
        // {
        //   position: 'left',
        //   to: 'https://kelas.programmerzamannow.com/',
        //   label: 'Kelas Online',
        // },
        // {
        //   position: 'left',
        //   label: 'Promo',
        //   items: [
        //     {
        //       to: 'https://kelas.programmerzamannow.com/',
        //       label: 'Promo Kelas Online',
        //     },
        //     {
        //       to: '/promo',
        //       label: 'Promo Kelas Online di Udemy',
        //     },
        //     {
        //       to: 'https://codepolitan.com/mentor/khannedy/',
        //       label: 'Promo Kelas Online di Codepolitan',
        //     },
        //   ],
        // },
        {
          to: '/blog',
          label: 'About',
          position: 'left',
        },
        {
          position: 'left',
          label: 'Pemrograman',
          items: [
            // {
            //     to: '/tutorial-golang/intro',
            //     label: 'Go-Lang',
            // },
            // {
            //   to: '/tutorial-java/dasar/pengenalan-java',
            //   label: 'Java',
            // },
            {
              to: '/tutorial-python/dasar/pengenalan-python',
              label: 'Python',
            },
            // {
            //   to: '/tutorial-javascript/intro',
            //   label: 'JavaScript',
            // },
            {
              to: '#',
              label: 'HTML',
            },
            {
              to: '#',
              label: 'JavaScript',
            },
            {
              to: '#',
              label: 'CSS',
            },
            {
              to: '#',
              label: 'PHP',
            },
            // {
            //   to: '/tutorial-php/intro',
            //   label: 'PHP',
            // },
            // {
            //     to: '/tutorial-javascript/intro',
            //     label: 'JavaScript',
            // },
            // {
            //     to: '/tutorial-kotlin/intro',
            //     label: 'Kotlin',
            // },
            // {
            //     to: '/tutorial-php/intro',
            //     label: 'PHP',
            // },
          ],
        },
        {
          position: 'right',
          label: 'Linux dan Cloud Computing',
          items: [
            // {
            //   to: '/tutorial-java/dasar/pengenalan-java',
            //   label: 'Java',
            // },
            {
              to: '#',
              label: 'Centos',
            },
            {
              to: '#',
              label: 'Ubuntu',
            },
            {
              to: '#',
              label: 'GCP',
            },
          ],
        },

        // {
        //   position: 'right',
        //   label: 'Artificial Intelligence',
        //   items: [
        //     // {
        //     //   to: '/tutorial-java/dasar/pengenalan-java',
        //     //   label: 'Java',
        //     // },
        //     {
        //       to: '#',
        //       label: 'Machine Learning',
        //     },
        //     {
        //       to: '#',
        //       label: 'Deep Learning',
        //     },
        //     {
        //       to: '#',
        //       label: 'Neural Networks',
        //     },
        //   ],
        // },

        {
          position: 'right',
          label: 'Teknologi',
          items: [
            // {
            //   to: '/tutorial-java/dasar/pengenalan-java',
            //   label: 'Java',
            // },
            {
              to: '#',
              label: 'Artificial Intelligence',
            },
            {
              to: '#',
              label: 'Github',
            },
            {
              to: '#',
              label: 'Virtual environment',
            },
          ],
        },

        // {
        //   to: '/blog',
        //   label: 'About',
        //   position: 'right',
        // },
        // {
        //   position: 'right',
        //   label: 'Komunitas',
        //   items: [
        //     // {
        //     //     href: 'https://discord.com',
        //     //     label: 'Discord',
        //     // },
        //     {
        //       href: 'https://web.facebook.com/groups/programmerzamannow',
        //       label: 'Facebook Group',
        //     },
        //   ],
        // },
        // {
        //   position: 'right',
        //   label: 'Social Media',
        //   items: [
        //     {
        //       href: 'https://youtube.com/c/ProgrammerZamanNow',
        //       label: 'Youtube',
        //     },
        //     {
        //       href: 'https://instagram.com/ProgrammerZamanNow',
        //       label: 'Instagram',
        //     },
        //     {
        //       href: 'https://facebook.com/ProgrammerZamanNow',
        //       label: 'Facebook',
        //     },
        //     {
        //       href: 'https://t.me/ProgrammerZamanNow',
        //       label: 'Telegram',
        //     },
        //   ],
        // },
        {
          href: 'https://github.com/jumadi-cloud',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Social Media',
          items: [
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/channel/UC7rCdlKnMTt26Q3np3rW1Iw',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/jumadijumadi470/',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/ucup.kuncup.3/',
            },
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/in/jumadi-01/',
            },
          ],
        },
        {
          title: 'Komunitas',
          items: [
            // {
            //     label: 'Discord',
            //     href: 'https://discordapp.com/invite/docusaurus',
            // },
            {
              label: 'Facebook Group',
              href: 'https://www.facebook.com/Kelas-Awan-Pintar-106224954144551',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'About',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/jumadi-cloud',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Built with Keep Learning.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['java', 'php', 'kotlin', 'dart'],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/jumadi-cloud/docu-tutorial',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/jumadi-cloud/docu-tutorial',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tutorial-golang',
        path: 'tutorial/golang',
        routeBasePath: 'tutorial-golang',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tutorial-java',
        path: 'tutorial/java',
        routeBasePath: 'tutorial-java',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tutorial-javascript',
        path: 'tutorial/javascript',
        routeBasePath: 'tutorial-javascript',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tutorial-kotlin',
        path: 'tutorial/kotlin',
        routeBasePath: 'tutorial-kotlin',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tutorial-php',
        path: 'tutorial/php',
        routeBasePath: 'tutorial-php',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tutorial-python',
        path: 'tutorial/python',
        routeBasePath: 'tutorial-python',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
  ],
};
