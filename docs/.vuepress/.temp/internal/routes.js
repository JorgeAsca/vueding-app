export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/componentes.html", { loader: () => import(/* webpackChunkName: "componentes.html" */"C:/Users/jorge/OneDrive/Desktop/Estudios/2 DAW/DWEC/vueding-app/docs/.vuepress/.temp/pages/componentes.html.js"), meta: {"title":"Documentación de Componentes"} }],
  ["/guia-uso.html", { loader: () => import(/* webpackChunkName: "guia-uso.html" */"C:/Users/jorge/OneDrive/Desktop/Estudios/2 DAW/DWEC/vueding-app/docs/.vuepress/.temp/pages/guia-uso.html.js"), meta: {"title":""} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/jorge/OneDrive/Desktop/Estudios/2 DAW/DWEC/vueding-app/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Introducción: VueDining"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/jorge/OneDrive/Desktop/Estudios/2 DAW/DWEC/vueding-app/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
