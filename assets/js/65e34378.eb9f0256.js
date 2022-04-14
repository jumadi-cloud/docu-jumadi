"use strict";(self.webpackChunkkelas_awan_pintar=self.webpackChunkkelas_awan_pintar||[]).push([[7695],{3905:function(a,t,e){e.d(t,{Zo:function(){return d},kt:function(){return b}});var n=e(7294);function r(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}function i(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,n)}return e}function l(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?i(Object(e),!0).forEach((function(t){r(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}function p(a,t){if(null==a)return{};var e,n,r=function(a,t){if(null==a)return{};var e,n,r={},i=Object.keys(a);for(n=0;n<i.length;n++)e=i[n],t.indexOf(e)>=0||(r[e]=a[e]);return r}(a,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(n=0;n<i.length;n++)e=i[n],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(r[e]=a[e])}return r}var o=n.createContext({}),u=function(a){var t=n.useContext(o),e=t;return a&&(e="function"==typeof a?a(t):l(l({},t),a)),e},d=function(a){var t=u(a.components);return n.createElement(o.Provider,{value:t},a.children)},m={inlineCode:"code",wrapper:function(a){var t=a.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(a,t){var e=a.components,r=a.mdxType,i=a.originalType,o=a.parentName,d=p(a,["components","mdxType","originalType","parentName"]),c=u(e),b=r,s=c["".concat(o,".").concat(b)]||c[b]||m[b]||i;return e?n.createElement(s,l(l({ref:t},d),{},{components:e})):n.createElement(s,l({ref:t},d))}));function b(a,t){var e=arguments,r=t&&t.mdxType;if("string"==typeof a||r){var i=e.length,l=new Array(i);l[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=a,p.mdxType="string"==typeof a?a:r,l[1]=p;for(var u=2;u<i;u++)l[u]=e[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,e)}c.displayName="MDXCreateElement"},8516:function(a,t,e){e.r(t),e.d(t,{contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return d}});var n=e(7462),r=e(3366),i=(e(7294),e(3905)),l=["components"],p={sidebar_position:11},o="Tipe Data Bukan Primitif",u={unversionedId:"dasar/tipe-data-bukan-primitif",id:"dasar/tipe-data-bukan-primitif",isDocsHomePage:!1,title:"Tipe Data Bukan Primitif",description:"Java adalah basa pemrograman yang berorientasi Objek. Namun sebenarnya secara garis besar, terdapat dua jenis tipe data di Java. Tipe data primitif dan tipe data Object (bukan primitif)",source:"@site/tutorial/java/01-dasar/11-tipe-data-bukan-primitif.md",sourceDirName:"01-dasar",slug:"/dasar/tipe-data-bukan-primitif",permalink:"/jumadi-cloud/tutorial-java/dasar/tipe-data-bukan-primitif",version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Variable",permalink:"/jumadi-cloud/tutorial-java/dasar/variable"},next:{title:"Null",permalink:"/jumadi-cloud/tutorial-java/dasar/null"}},d=[{value:"Tipe Data Primitif",id:"tipe-data-primitif",children:[]},{value:"Tipe Data Object",id:"tipe-data-object",children:[]}],m={toc:d};function c(a){var t=a.components,e=(0,r.Z)(a,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,e,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tipe-data-bukan-primitif"},"Tipe Data Bukan Primitif"),(0,i.kt)("p",null,"Java adalah basa pemrograman yang berorientasi Objek. Namun sebenarnya secara garis besar, terdapat dua jenis tipe data di Java. Tipe data primitif dan tipe data Object (bukan primitif)"),(0,i.kt)("h2",{id:"tipe-data-primitif"},"Tipe Data Primitif"),(0,i.kt)("p",null,"Tipe data primitif adalah tipe data bawaan dari bahasa pemrograman, di Java ada delapan tipe data primitif, dan semuanya sudah kita bahas yaitu :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"byte"),(0,i.kt)("li",{parentName:"ul"},"short "),(0,i.kt)("li",{parentName:"ul"},"int "),(0,i.kt)("li",{parentName:"ul"},"long "),(0,i.kt)("li",{parentName:"ul"},"float "),(0,i.kt)("li",{parentName:"ul"},"double "),(0,i.kt)("li",{parentName:"ul"},"boolean "),(0,i.kt)("li",{parentName:"ul"},"char")),(0,i.kt)("p",null,"Bagaimana dengan String? String bukanlah tipe data primitif, melainkan tipe data Object."),(0,i.kt)("h2",{id:"tipe-data-object"},"Tipe Data Object"),(0,i.kt)("p",null,"Namun karena Java adalah bahasa pemrograman yang berorientasi objek. Mada semua tipe data primitif memiliki representasi tipe data object nya. Kenapa butuh representasi tipe data object? Hal ini dikarenakan ada banyak sekali fitur di pemrograman berorientasi yang mewajibkan datanya berubah object. Contohnya adalah fitur Generic Programming."),(0,i.kt)("p",null,"Berikut adalah representasi tipe data object untuk semua tipe data primitif di Java."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Tipe Data Primitif"),(0,i.kt)("th",{parentName:"tr",align:null},"Tipe Data Object"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"byte"),(0,i.kt)("td",{parentName:"tr",align:null},"Byte")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"short"),(0,i.kt)("td",{parentName:"tr",align:null},"Short")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"Integer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"long"),(0,i.kt)("td",{parentName:"tr",align:null},"Long")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"float"),(0,i.kt)("td",{parentName:"tr",align:null},"Float")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"double"),(0,i.kt)("td",{parentName:"tr",align:null},"Double")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"char"),(0,i.kt)("td",{parentName:"tr",align:null},"Character")))),(0,i.kt)("p",null,"Saat kita membuat variable dengan tipe data object, kita bisa secara otomatis melakukan konversi dari tipe data primitif."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="TipeDataObject.java"',title:'"TipeDataObject.java"'},"public class TipeDataObject {\n  public static void main(String[] args) {\n\n    Integer iniInteger = 100; \n    Long iniLong = 10000L;\n\n    byte iniByte = 100;\n    Byte iniByteObject = iniByte; // Otomatis\n    \n    Boolean married = true;\n\n  }\n}\n")))}c.isMDXComponent=!0}}]);