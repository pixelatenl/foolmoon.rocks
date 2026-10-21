// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
    "vue/multi-word-component-names": "off",
    // Stylistic rules disabled to keep the migrated legacy templates
    // byte-identical to the original Nuxt 2 source.
    "vue/html-self-closing": "off",
    "vue/attributes-order": "off",
    "vue/v-bind-style": "off",
  },
});
