import { GitContributors } from "C:/Users/jorge/OneDrive/Desktop/Estudios/2 DAW/DWEC/vueding-app/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "C:/Users/jorge/OneDrive/Desktop/Estudios/2 DAW/DWEC/vueding-app/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
