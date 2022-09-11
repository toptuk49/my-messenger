module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/styles/styles.scss";
          @import "@/assets/styles/fonts.scss";
        `
      },
    }
  }
}
