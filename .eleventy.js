module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets");
    return {
      dir: {
        input: "src",
        output: "_site",
        includes: "_includes"
      },
      templateFormats: ["liquid", "md", "njk"],
      markdownTemplateEngine: "liquid",
      htmlTemplateEngine: "liquid"
    };
  };