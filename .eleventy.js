module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["liquid", "md", "njk"],
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid"
  };
};