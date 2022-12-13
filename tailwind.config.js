const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.tsx", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        // General
        page: {
          from_bg: colors.slate[100],
          to_bg: colors.slate[200],
        },
        titles: "#d92321",
        links: {
          txt: "#d92321",
          hover_txt: colors.orange[600],
        },
        loading_spinner: "#d92321",
        popups: {
          bg: colors.zinc[900],
          txt: colors.slate[50],
          internal_border: colors.slate[900],
        },
        warning: {
          txt: colors.slate[800],
          bg: colors.yellow[400],
          border: colors.yellow[500],
        },
        error: {
          txt: colors.red[500],
          bg: colors.red[50],
          border: colors.red[200],
        },

        // Inputs
        btn: {
          txt: colors.zinc[800],
          bg: colors.slate[300],
          border: colors.slate[200],
          hover_txt: colors.slate[800],
          hover_bg: colors.slate[500],
          hover_border: colors.slate[200],
        },
        btn_primary: {
          txt: "#d92321",
          bg: colors.zinc[900],
          border: "#fff",
          hover_txt: colors.slate[800],
          hover_bg: colors.slate[500],
          hover_border: colors.slate[200],
        },
        btn_error: {
          txt: colors.slate[200],
          bg: colors.red[500],
          border: colors.red[500],
          hover_txt: colors.slate[200],
          hover_bg: colors.red[600],
          hover_border: colors.red[600],
        },
        label: "#d92321",
        txt_input: {
          txt: "#d92321",
          bg: colors.slate[200],
          border: colors.slate[200],
          focus_txt: "#d92321",
          focus_bg: colors.slate[50],
          focus_border: colors.orange[300],
          placeholder_txt: "#d92321",
        },

        // Whitelist proof widget
        wl_message: {
          txt: colors.slate[800],
          bg: colors.orange[100],
        },

        // Mint widget
        token_preview: colors.slate[200],
      },
    },
  },
  variants: {},
  plugins: [],
};
