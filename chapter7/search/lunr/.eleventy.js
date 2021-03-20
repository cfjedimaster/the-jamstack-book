module.exports = function(eleventyConfig) {

	eleventyConfig.addPassthroughCopy("css");

	eleventyConfig.addFilter("json", value => {
		//remove html and line breaks
		return value.replace(/<.*?>/g, '').replace(/\n/g,'');
	})
};
