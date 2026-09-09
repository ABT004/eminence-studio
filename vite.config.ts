import vinext from "vinext";
import { cloudflare } from "@cloudflare/vite-plugin";

export default {
  plugins: [
    vinext({
      prerender: { routes: "*" },
    }),
    cloudflare({
      viteEnvironment: {
        name: "rsc",
        childEnvironments: ["ssr"],
      },
    }),
  ],
};
