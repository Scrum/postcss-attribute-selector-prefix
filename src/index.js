import postcss from 'postcss';

const filter = (filter, attributeSelector) => new RegExp(filter.map(attribut => `^\\[${attribut}`).join('|')).test(attributeSelector);

export default postcss.plugin('postcss-attribute-selector-prefix', options => {
	return nodes => {
		return nodes.walkRules(rule => {
			rule.selector = rule.selector.replace(/\[.*?]/g, match => {
				if (options.prefix === undefined) {
					return match;
				}

				if (options.filter !== undefined && filter(options.filter, match) === false) {
					return match;
				}

				if (options.ignore !== undefined && filter(options.ignore, match) === true) {
					return match;
				}

				return match.replace(/(\[.*?="?)(.*?)("?])/, (match, before, requireds, after) => {
					return `${before}${requireds.split(' ').map(required => options.prefix + required).join(' ')}${after}`;
				});
			});
		});
	};
});
