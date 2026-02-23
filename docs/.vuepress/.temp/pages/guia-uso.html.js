import comp from "C:/Users/jorge/OneDrive/Desktop/Estudios/2 DAW/DWEC/vueding-app/docs/.vuepress/.temp/pages/guia-uso.html.vue"
const data = JSON.parse("{\"path\":\"/guia-uso.html\",\"title\":\"\",\"lang\":\"es-ES\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"guia-uso.md\"}")
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
