import { CodeTabs } from "F:/free-study/study-notes/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.68_markdown-it@14.1.0_vuepress@2.0.0-rc.19/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "F:/free-study/study-notes/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.68_markdown-it@14.1.0_vuepress@2.0.0-rc.19/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "F:/free-study/study-notes/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.68_markdown-it@14.1.0_vuepress@2.0.0-rc.19/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
