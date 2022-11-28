import router from "./router";
import vuetify from "./vuetify";
import { loadFonts } from "./webfontloader";

export function registerPlugins(app) {
  loadFonts();
  app.use(vuetify);
  app.use(router);
}
