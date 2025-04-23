module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets/images");
  eleventyConfig.addPassthroughCopy("assets/css"); // Add this
  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["liquid", "md", "njk"],
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid"
  };
};