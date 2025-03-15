import { CodeTabs } from "/Volumes/study/iMaeT.github.io/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.68_markdown-it@14.1.0_vuepress@2.0.0-rc.19_@vuepress+b_ppbga6gsjcdfs2sneke5hvziai/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/Volumes/study/iMaeT.github.io/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.68_markdown-it@14.1.0_vuepress@2.0.0-rc.19_@vuepress+b_ppbga6gsjcdfs2sneke5hvziai/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/Volumes/study/iMaeT.github.io/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.68_markdown-it@14.1.0_vuepress@2.0.0-rc.19_@vuepress+b_ppbga6gsjcdfs2sneke5hvziai/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
