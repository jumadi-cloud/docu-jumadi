"use strict";(self.webpackChunkkelas_awan_pintar=self.webpackChunkkelas_awan_pintar||[]).push([[5290],{3905:function(a,e,n){n.d(e,{Zo:function(){return s},kt:function(){return k}});var t=n(7294);function i(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function r(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function l(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function u(a,e){if(null==a)return{};var n,t,i=function(a,e){if(null==a)return{};var n,t,i={},r=Object.keys(a);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||(i[n]=a[n]);return i}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(i[n]=a[n])}return i}var m=t.createContext({}),b=function(a){var e=t.useContext(m),n=e;return a&&(n="function"==typeof a?a(e):l(l({},e),a)),n},s=function(a){var e=b(a.components);return t.createElement(m.Provider,{value:e},a.children)},d={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},p=t.forwardRef((function(a,e){var n=a.components,i=a.mdxType,r=a.originalType,m=a.parentName,s=u(a,["components","mdxType","originalType","parentName"]),p=b(n),k=i,g=p["".concat(m,".").concat(k)]||p[k]||d[k]||r;return n?t.createElement(g,l(l({ref:e},s),{},{components:n})):t.createElement(g,l({ref:e},s))}));function k(a,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof a||i){var r=n.length,l=new Array(r);l[0]=p;var u={};for(var m in e)hasOwnProperty.call(e,m)&&(u[m]=e[m]);u.originalType=a,u.mdxType="string"==typeof a?a:i,l[1]=u;for(var b=2;b<r;b++)l[b]=n[b];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4560:function(a,e,n){n.r(e),n.d(e,{contentTitle:function(){return m},default:function(){return p},frontMatter:function(){return u},metadata:function(){return b},toc:function(){return s}});var t=n(7462),i=n(3366),r=(n(7294),n(3905)),l=["components"],u={sidebar_position:10},m="Variable",b={unversionedId:"dasar/variable",id:"dasar/variable",isDocsHomePage:!1,title:"Variable",description:"Variable adalah tempat untuk menyimpan data. Saat membuat variable di Java, kita perlu menentukan tipe data yang ingin kita gunakan. Dan di Java, variable tidak bisa berubah tipe data setelah dibuat. Misal jika kita sudah membuat variable dengan tipe data String, tidak bisa berubah menjadi variable dengan tipe data int atau yang lainnya. Berikut adalah cara membuat variable di Java.",source:"@site/tutorial/java/01-dasar/10-variable.md",sourceDirName:"01-dasar",slug:"/dasar/variable",permalink:"/tutorial-java/dasar/variable",version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Tipe Data String",permalink:"/tutorial-java/dasar/tipe-data-string"},next:{title:"Tipe Data Bukan Primitif",permalink:"/tutorial-java/dasar/tipe-data-bukan-primitif"}},s=[{value:"Mengubah Data Variable",id:"mengubah-data-variable",children:[]},{value:"Membuat Variable dengan Data",id:"membuat-variable-dengan-data",children:[]},{value:"Menggunakan Variable Lain",id:"menggunakan-variable-lain",children:[]},{value:"Kata Kunci Var",id:"kata-kunci-var",children:[]},{value:"Final Variable",id:"final-variable",children:[]}],d={toc:s};function p(a){var e=a.components,n=(0,i.Z)(a,l);return(0,r.kt)("wrapper",(0,t.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"variable"},"Variable"),(0,r.kt)("p",null,"Variable adalah tempat untuk menyimpan data. Saat membuat variable di Java, kita perlu menentukan tipe data yang ingin kita gunakan. Dan di Java, variable tidak bisa berubah tipe data setelah dibuat. Misal jika kita sudah membuat variable dengan tipe data String, tidak bisa berubah menjadi variable dengan tipe data int atau yang lainnya. Berikut adalah cara membuat variable di Java."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"TipeData namaVariable;\n")),(0,r.kt)("p",null,"Berikut adalah beberapa syarat ketika kita membuat nama variable :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Variable tidak boleh mengandung spasi")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Variable tidak boleh angka semua")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Disarankan nama variable mengguunakan camelCase, seperti firstName, lastName, fullName, programmerZamanNow dan lain-lain"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Variable.java"',title:'"Variable.java"'},"public class Variable {\n  public static void main(String[] args) {\n\n    String firstName;\n    String lastName;\n    int age;\n    boolean married;\n\n  }\n}\n")),(0,r.kt)("h2",{id:"mengubah-data-variable"},"Mengubah Data Variable"),(0,r.kt)("p",null,"Setelah membuat variable, kita bisa menambah atau mengubah data di dalam variable tersebut. Data variable harus sesuai dengan tipe data variable nya. Jika tidak sesuai, maka akan otomatis terjadi error."),(0,r.kt)("p",null,"Untuk mengubah data di dalam variable, kita bisa gunakan :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"namaVariable = value;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Variable.java"',title:'"Variable.java"'},'public class Variable {\n  public static void main(String[] args) {\n\n    String firstName;\n    String lastName;\n    int age;\n    boolean married;\n    \n    firstName = "Budi";\n    lastName = "Nugraha";\n    age = 25;\n    married = true;\n\n  }\n}\n')),(0,r.kt)("p",null,"Data variable bisa diubah berkali-kali tanpa ada batas maksimal."),(0,r.kt)("h2",{id:"membuat-variable-dengan-data"},"Membuat Variable dengan Data"),(0,r.kt)("p",null,"Di Java, kita juga membuat variable secara langsung dengan datanya pada saat deklarasi variable nya. Ini bisa mempermudah saat kita membuat variable yang datanya ingin kita isi secara langsung."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"TipeData namaVariable = value;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Variable.java"',title:'"Variable.java"'},'public class Variable {\n  public static void main(String[] args) {\n\n    String firstName = "Budi";\n    String lastName = "Nugraha";\n    int age = 25;\n    boolean married = true;\n\n  }\n}\n')),(0,r.kt)("h2",{id:"menggunakan-variable-lain"},"Menggunakan Variable Lain"),(0,r.kt)("p",null,"Saat kita membuat variable, kita juga bisa menggunakan data dari variable lain dengan cara menyebutkan nama variable lainnya."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Variable.java"',title:'"Variable.java"'},'public class Variable {\n  public static void main(String[] args) {\n\n    String firstName = "Budi";\n    String lastName = "Nugraha";\n\n    String fullName = firstName + " " + lastName;\n    System.out.println(fullName); // Budi Nugraha\n\n  }\n}\n')),(0,r.kt)("p",null,"Saat kita membuat variable baru dengan cara mengambil data dari variable lain seluruhnya. Yang terjadi sebenarnya adalah hanya menduplikasi datanya, jadi variable tersebut akan tetap independen satu sama lain, tidak akan saling terpengaruh."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Variable.java:',title:'"Variable.java:'},'public class Variable {\n  public static void main(String[] args) {\n\n    String name1 = "Budi";\n    String name2 = name1; // Budi\n\n    name1 = "Eko";\n\n    System.out.println(name1); // Eko\n    System.out.println(name2); // Budi (tidak berubah menjadi Eko)\n\n  }\n}\n')),(0,r.kt)("h2",{id:"kata-kunci-var"},"Kata Kunci Var"),(0,r.kt)("p",null,"Java mendukung pembuatan variable dengan kata kunci var. Ini bisa mempermudah saat membuat variable, karena kita tidak perlu mengetikan tipe data nya. Java akan secara otomatis mendeteksi tipe datanya sesuai dengan data yang kita masukkan ke dalam variable. Namun syaratnya untuk menggunakan kata kunci var adalah, pembuatan variable nya harus langsung dengan data nya."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Fitur ini baru ada di Java 10 keatas. Jadi pastikan menggunakan versi Java 10 keatas.\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Variable"',title:'"Variable"'},'public class Variable {\n  public static void main(String[] args) {\n\n    var firstName = "Eko";\n    var lastName = "Kurniawan";\n    var completeName = firstName + " " + lastName;\n    \n    var value = 1000; // int\n    var amount = 1000000L; // long\n\n  }\n}\n')),(0,r.kt)("h2",{id:"final-variable"},"Final Variable"),(0,r.kt)("p",null,"Saat membuat variable di Java, secara default variable bisa diubah lagi. Namun kadang kita ingin membuat sebuah variable, yang tidak ingin diubah lagi. Atau ada yang bilang bahwa ini adalah konstan."),(0,r.kt)("p",null,"Untuk melakukan hal ini, di Java kita bisa menambahkan kata kunci final sebelum pembuatan variable nya. Semua variable yang bersifat final, tidak akan bisa dirubah lagi nilainya setelah pertama kali di tambahkan data. Jika kita coba ubah, maka akan otomatis error."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Variable.java"',title:'"Variable.java"'},'public class Variable {\n  public static void main(String[] args) {\n\n    final var firstName = "Eko";\n    firstName = "Budi"; // ERROR\n    \n    final String lastName;\n    lastName = "Kurniawan";\n    lastName = "Nugraha"; // ERROR\n\n  }\n}\n')))}p.isMDXComponent=!0}}]);