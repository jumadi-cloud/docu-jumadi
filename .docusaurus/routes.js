
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','569'),
    exact: true
  },
  {
    path: '/blog/About',
    component: ComponentCreator('/blog/About','02e'),
    exact: true
  },
  {
    path: '/blog/hello-world',
    component: ComponentCreator('/blog/hello-world','07a'),
    exact: true
  },
  {
    path: '/blog/helo',
    component: ComponentCreator('/blog/helo','d0b'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/education',
    component: ComponentCreator('/blog/tags/education','84b'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook','2fe'),
    exact: true
  },
  {
    path: '/blog/tags/work-experience',
    component: ComponentCreator('/blog/tags/work-experience','b85'),
    exact: true
  },
  {
    path: '/kelas-online',
    component: ComponentCreator('/kelas-online','e39'),
    exact: true
  },
  {
    path: '/kelas-online/android',
    component: ComponentCreator('/kelas-online/android','8ce'),
    exact: true
  },
  {
    path: '/kelas-online/dart',
    component: ComponentCreator('/kelas-online/dart','b4d'),
    exact: true
  },
  {
    path: '/kelas-online/docker',
    component: ComponentCreator('/kelas-online/docker','9b6'),
    exact: true
  },
  {
    path: '/kelas-online/git',
    component: ComponentCreator('/kelas-online/git','6db'),
    exact: true
  },
  {
    path: '/kelas-online/golang',
    component: ComponentCreator('/kelas-online/golang','532'),
    exact: true
  },
  {
    path: '/kelas-online/http',
    component: ComponentCreator('/kelas-online/http','b56'),
    exact: true
  },
  {
    path: '/kelas-online/java',
    component: ComponentCreator('/kelas-online/java','c04'),
    exact: true
  },
  {
    path: '/kelas-online/javascript',
    component: ComponentCreator('/kelas-online/javascript','ef2'),
    exact: true
  },
  {
    path: '/kelas-online/kotlin',
    component: ComponentCreator('/kelas-online/kotlin','81c'),
    exact: true
  },
  {
    path: '/kelas-online/mysql',
    component: ComponentCreator('/kelas-online/mysql','5f6'),
    exact: true
  },
  {
    path: '/kelas-online/nodejs',
    component: ComponentCreator('/kelas-online/nodejs','9a0'),
    exact: true
  },
  {
    path: '/kelas-online/openapi',
    component: ComponentCreator('/kelas-online/openapi','8ec'),
    exact: true
  },
  {
    path: '/kelas-online/php',
    component: ComponentCreator('/kelas-online/php','ee0'),
    exact: true
  },
  {
    path: '/kelas-online/restful-api',
    component: ComponentCreator('/kelas-online/restful-api','c7e'),
    exact: true
  },
  {
    path: '/kelas-online/spring-boot',
    component: ComponentCreator('/kelas-online/spring-boot','a2d'),
    exact: true
  },
  {
    path: '/kelas-online/spring-boot-design-patterns',
    component: ComponentCreator('/kelas-online/spring-boot-design-patterns','cc1'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/promo',
    component: ComponentCreator('/promo','b1d'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','87d'),
    routes: [
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','aed'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/docs/tutorial-basics/congratulations','793'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post','68e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/docs/tutorial-basics/create-a-document','c2d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/docs/tutorial-basics/create-a-page','f44'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docs/tutorial-basics/deploy-your-site','e46'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/docs/tutorial-basics/markdown-features','4b7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions','fdd'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/tutorial-extras/translate-your-site','2d7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/tutorial-golang',
    component: ComponentCreator('/tutorial-golang','6b1'),
    routes: [
      {
        path: '/tutorial-golang/dasar/manage-docs-versions',
        component: ComponentCreator('/tutorial-golang/dasar/manage-docs-versions','84f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-golang/dasar/translate-your-site',
        component: ComponentCreator('/tutorial-golang/dasar/translate-your-site','814'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-golang/intro',
        component: ComponentCreator('/tutorial-golang/intro','6af'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-golang/modules/congratulations',
        component: ComponentCreator('/tutorial-golang/modules/congratulations','b99'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-golang/modules/create-a-blog-post',
        component: ComponentCreator('/tutorial-golang/modules/create-a-blog-post','5a3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-golang/modules/create-a-document',
        component: ComponentCreator('/tutorial-golang/modules/create-a-document','593'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-golang/modules/create-a-page',
        component: ComponentCreator('/tutorial-golang/modules/create-a-page','27f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-golang/modules/deploy-your-site',
        component: ComponentCreator('/tutorial-golang/modules/deploy-your-site','68f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-golang/modules/markdown-features',
        component: ComponentCreator('/tutorial-golang/modules/markdown-features','00c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/tutorial-java',
    component: ComponentCreator('/tutorial-java','468'),
    routes: [
      {
        path: '/tutorial-java/dasar/integrated-development-environment',
        component: ComponentCreator('/tutorial-java/dasar/integrated-development-environment','012'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-java/dasar/komentar',
        component: ComponentCreator('/tutorial-java/dasar/komentar','2e1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-java/dasar/menginstall-java',
        component: ComponentCreator('/tutorial-java/dasar/menginstall-java','d22'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-java/dasar/null',
        component: ComponentCreator('/tutorial-java/dasar/null','4de'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-java/dasar/operator-matematika',
        component: ComponentCreator('/tutorial-java/dasar/operator-matematika','362'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-java/dasar/pengenalan-java',
        component: ComponentCreator('/tutorial-java/dasar/pengenalan-java','ae8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-java/dasar/program-hello-world',
        component: ComponentCreator('/tutorial-java/dasar/program-hello-world','fdd'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-java/dasar/tipe-data-array',
        component: ComponentCreator('/tutorial-java/dasar/tipe-data-array','77f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-java/dasar/tipe-data-boolean',
        component: ComponentCreator('/tutorial-java/dasar/tipe-data-boolean','a03'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-java/dasar/tipe-data-bukan-primitif',
        component: ComponentCreator('/tutorial-java/dasar/tipe-data-bukan-primitif','5b1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-java/dasar/tipe-data-character',
        component: ComponentCreator('/tutorial-java/dasar/tipe-data-character','3f0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-java/dasar/tipe-data-number',
        component: ComponentCreator('/tutorial-java/dasar/tipe-data-number','f40'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-java/dasar/tipe-data-string',
        component: ComponentCreator('/tutorial-java/dasar/tipe-data-string','2f0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-java/dasar/variable',
        component: ComponentCreator('/tutorial-java/dasar/variable','fa6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/tutorial-javascript',
    component: ComponentCreator('/tutorial-javascript','36c'),
    routes: [
      {
        path: '/tutorial-javascript/dasar/congratulations',
        component: ComponentCreator('/tutorial-javascript/dasar/congratulations','494'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-javascript/dasar/create-a-blog-post',
        component: ComponentCreator('/tutorial-javascript/dasar/create-a-blog-post','754'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-javascript/dasar/create-a-document',
        component: ComponentCreator('/tutorial-javascript/dasar/create-a-document','ff4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-javascript/dasar/create-a-page',
        component: ComponentCreator('/tutorial-javascript/dasar/create-a-page','769'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-javascript/dasar/deploy-your-site',
        component: ComponentCreator('/tutorial-javascript/dasar/deploy-your-site','657'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-javascript/dasar/markdown-features',
        component: ComponentCreator('/tutorial-javascript/dasar/markdown-features','077'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-javascript/intro',
        component: ComponentCreator('/tutorial-javascript/intro','847'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-javascript/oop/manage-docs-versions',
        component: ComponentCreator('/tutorial-javascript/oop/manage-docs-versions','801'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-javascript/oop/translate-your-site',
        component: ComponentCreator('/tutorial-javascript/oop/translate-your-site','3d1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/tutorial-kotlin',
    component: ComponentCreator('/tutorial-kotlin','4dd'),
    routes: [
      {
        path: '/tutorial-kotlin/collection/manage-docs-versions',
        component: ComponentCreator('/tutorial-kotlin/collection/manage-docs-versions','1e8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-kotlin/collection/translate-your-site',
        component: ComponentCreator('/tutorial-kotlin/collection/translate-your-site','342'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-kotlin/dasar/congratulations',
        component: ComponentCreator('/tutorial-kotlin/dasar/congratulations','c51'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-kotlin/dasar/create-a-blog-post',
        component: ComponentCreator('/tutorial-kotlin/dasar/create-a-blog-post','6f6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-kotlin/dasar/create-a-document',
        component: ComponentCreator('/tutorial-kotlin/dasar/create-a-document','674'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-kotlin/dasar/create-a-page',
        component: ComponentCreator('/tutorial-kotlin/dasar/create-a-page','d39'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-kotlin/dasar/deploy-your-site',
        component: ComponentCreator('/tutorial-kotlin/dasar/deploy-your-site','eb3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-kotlin/dasar/markdown-features',
        component: ComponentCreator('/tutorial-kotlin/dasar/markdown-features','6c9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-kotlin/generic/manage-docs-versions',
        component: ComponentCreator('/tutorial-kotlin/generic/manage-docs-versions','3eb'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-kotlin/generic/translate-your-site',
        component: ComponentCreator('/tutorial-kotlin/generic/translate-your-site','fa3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-kotlin/intro',
        component: ComponentCreator('/tutorial-kotlin/intro','b56'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-kotlin/oop/manage-docs-versions',
        component: ComponentCreator('/tutorial-kotlin/oop/manage-docs-versions','bbc'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-kotlin/oop/translate-your-site',
        component: ComponentCreator('/tutorial-kotlin/oop/translate-your-site','24e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/tutorial-php',
    component: ComponentCreator('/tutorial-php','85f'),
    routes: [
      {
        path: '/tutorial-php/dasar/congratulations',
        component: ComponentCreator('/tutorial-php/dasar/congratulations','1e0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-php/dasar/create-a-blog-post',
        component: ComponentCreator('/tutorial-php/dasar/create-a-blog-post','2d4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-php/dasar/create-a-document',
        component: ComponentCreator('/tutorial-php/dasar/create-a-document','0ff'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-php/dasar/create-a-page',
        component: ComponentCreator('/tutorial-php/dasar/create-a-page','8a1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-php/dasar/deploy-your-site',
        component: ComponentCreator('/tutorial-php/dasar/deploy-your-site','003'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-php/dasar/markdown-features',
        component: ComponentCreator('/tutorial-php/dasar/markdown-features','894'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-php/intro',
        component: ComponentCreator('/tutorial-php/intro','629'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-php/oop/manage-docs-versions',
        component: ComponentCreator('/tutorial-php/oop/manage-docs-versions','2a4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-php/oop/translate-your-site',
        component: ComponentCreator('/tutorial-php/oop/translate-your-site','bfe'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/tutorial-python',
    component: ComponentCreator('/tutorial-python','95f'),
    routes: [
      {
        path: '/tutorial-python/dasar/integrated-development-environment',
        component: ComponentCreator('/tutorial-python/dasar/integrated-development-environment','762'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-python/dasar/komentar',
        component: ComponentCreator('/tutorial-python/dasar/komentar','c15'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-python/dasar/menginstall-python-with-anaconda',
        component: ComponentCreator('/tutorial-python/dasar/menginstall-python-with-anaconda','618'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-python/dasar/pengenalan-python',
        component: ComponentCreator('/tutorial-python/dasar/pengenalan-python','cfd'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-python/dasar/program-hello-world',
        component: ComponentCreator('/tutorial-python/dasar/program-hello-world','934'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
