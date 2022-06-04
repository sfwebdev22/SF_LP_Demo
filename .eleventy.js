module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/css');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/admin');

    // Use only the first 3 chars of month
    eleventyConfig.addFilter('shortMonth', function (eventMonth) {
        return eventMonth.slice(0, 3);
    });

    // Sort bullets by given order - IE order: 1
    eleventyConfig.addFilter('sortByOrder', function (values) {
        let vals = [...values];
        return vals.sort((a, b) => Math.sign(a.data.order - b.data.order));
    });

    return {
        dir: {
            input: 'src',
            output: 'public'
        }
    };
};
