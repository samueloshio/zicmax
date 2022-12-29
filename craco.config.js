module.exports = {
  sass: {
    loaderOptions: {
      additionalData: `
        @import "src/scss/abstracts/_variables.scss";
        @import "src/scss/abstracts/_mixins.scss";
        `,
    },
  },
};
