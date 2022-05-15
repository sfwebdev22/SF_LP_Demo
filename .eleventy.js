module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/css');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/admin');

    eleventyConfig.addFilter('shortMonth', function (eventMonth) {
        return eventMonth.slice(0, 3);
    });

    return {
        dir: {
            input: 'src',
            output: 'public'
        }
    };
};
