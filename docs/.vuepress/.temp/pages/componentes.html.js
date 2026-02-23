import comp from "C:/Users/jorge/OneDrive/Desktop/Estudios/2 DAW/DWEC/vueding-app/docs/.vuepress/.temp/pages/componentes.html.vue"
const data = JSON.parse("{\"path\":\"/componentes.html\",\"title\":\"Documentación de Componentes\",\"lang\":\"es-ES\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"componentes.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
