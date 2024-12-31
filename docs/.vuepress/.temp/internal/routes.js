export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"F:/free-study/study-notes/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"F:/free-study/study-notes/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/threejs-jurney.html", { loader: () => import(/* webpackChunkName: "threejs-jurney.html" */"F:/free-study/study-notes/docs/.vuepress/.temp/pages/threejs-jurney.html.js"), meta: {"title":"Threejs-jurney 笔记"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"F:/free-study/study-notes/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
