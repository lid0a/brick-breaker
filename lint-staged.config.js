/**
 * @type {import('lint-staged').Configuration}
 */
export default {
	"*.{js,css,json}": "prettier --write",
	"*.js": "eslint --fix",
};
