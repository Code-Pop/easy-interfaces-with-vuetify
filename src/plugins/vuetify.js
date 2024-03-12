/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";
import { VBtn } from "vuetify/lib/components/index.mjs";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  defaults: {
    XButton: {
      variant: "outlined",
      rounded: "xl",
    },
  },
  aliases: {
    XButton: VBtn,
  },
});
