export default {
  "title": "Kelas Awan Pintar",
  "tagline": "Buka Masa Depanmu Dengan Terus Belajar!",
  "url": "https://github.com/jumadi-cloud/docu-jumadi.git",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/kap.png",
  "organizationName": "jumadi-cloud",
  "projectName": "docu-tutorial",
  "themeConfig": {
    "navbar": {
      "title": "Kelas Awan Pintar",
      "logo": {
        "alt": "Kelas Awan Pintar",
        "src": "img/kap.png"
      },
      "items": [
        {
          "to": "/blog",
          "label": "About",
          "position": "left"
        },
        {
          "position": "left",
          "label": "Pemrograman",
          "items": [
            {
              "to": "/tutorial-java/dasar/pengenalan-java",
              "label": "Java"
            },
            {
              "to": "#",
              "label": "Python"
            },
            {
              "to": "/tutorial-javascript/intro",
              "label": "JavaScript"
            },
            {
              "to": "#",
              "label": "HTML"
            },
            {
              "to": "#",
              "label": "CSS"
            },
            {
              "to": "/tutorial-php/intro",
              "label": "PHP"
            }
          ]
        },
        {
          "position": "right",
          "label": "Linux dan Cloud Computing",
          "items": [
            {
              "to": "#",
              "label": "Centos"
            },
            {
              "to": "#",
              "label": "Ubuntu"
            },
            {
              "to": "#",
              "label": "GCP"
            }
          ]
        },
        {
          "position": "right",
          "label": "Artificial Intelligence",
          "items": [
            {
              "to": "#",
              "label": "Machine Learning"
            },
            {
              "to": "#",
              "label": "Deep Learning"
            },
            {
              "to": "#",
              "label": "Neural Networks"
            }
          ]
        },
        {
          "href": "https://github.com/jumadi-cloud",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Social Media",
          "items": [
            {
              "label": "Youtube",
              "href": "https://www.youtube.com/channel/UC7rCdlKnMTt26Q3np3rW1Iw"
            },
            {
              "label": "Instagram",
              "href": "https://www.instagram.com/jumadijumadi470/"
            },
            {
              "label": "Facebook",
              "href": "https://www.facebook.com/ucup.kuncup.3/"
            },
            {
              "label": "Linkedin",
              "href": "https://www.linkedin.com/in/jumadi-01/"
            }
          ]
        },
        {
          "title": "Komunitas",
          "items": [
            {
              "label": "Facebook Group",
              "href": "https://www.facebook.com/Kelas-Awan-Pintar-106224954144551"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "About",
              "to": "/blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/jumadi-cloud"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2022 Built with Keep Learning."
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": [
        "java",
        "php",
        "kotlin",
        "dart"
      ]
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "C:\\Users\\arief\\Downloads\\docu-jumadi\\sidebars.js",
          "editUrl": "https://github.com/jumadi-cloud/docu-tutorial"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/jumadi-cloud/docu-tutorial"
        },
        "theme": {
          "customCss": "C:\\Users\\arief\\Downloads\\docu-jumadi\\src\\css\\custom.css"
        }
      }
    ]
  ],
  "plugins": [
    [
      "@docusaurus/plugin-content-docs",
      {
        "id": "tutorial-golang",
        "path": "tutorial/golang",
        "routeBasePath": "tutorial-golang",
        "sidebarPath": "C:\\Users\\arief\\Downloads\\docu-jumadi\\sidebars.js"
      }
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        "id": "tutorial-java",
        "path": "tutorial/java",
        "routeBasePath": "tutorial-java",
        "sidebarPath": "C:\\Users\\arief\\Downloads\\docu-jumadi\\sidebars.js"
      }
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        "id": "tutorial-javascript",
        "path": "tutorial/javascript",
        "routeBasePath": "tutorial-javascript",
        "sidebarPath": "C:\\Users\\arief\\Downloads\\docu-jumadi\\sidebars.js"
      }
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        "id": "tutorial-kotlin",
        "path": "tutorial/kotlin",
        "routeBasePath": "tutorial-kotlin",
        "sidebarPath": "C:\\Users\\arief\\Downloads\\docu-jumadi\\sidebars.js"
      }
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        "id": "tutorial-php",
        "path": "tutorial/php",
        "routeBasePath": "tutorial-php",
        "sidebarPath": "C:\\Users\\arief\\Downloads\\docu-jumadi\\sidebars.js"
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};