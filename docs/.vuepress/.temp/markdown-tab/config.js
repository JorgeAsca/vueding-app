import { CodeTabs } from "C:/Users/jorge/OneDrive/Desktop/Estudios/2 DAW/DWEC/vueding-app/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "C:/Users/jorge/OneDrive/Desktop/Estudios/2 DAW/DWEC/vueding-app/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "C:/Users/jorge/OneDrive/Desktop/Estudios/2 DAW/DWEC/vueding-app/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
