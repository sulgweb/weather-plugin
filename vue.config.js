/*
 * @description: 
 * @author: 小羽
 * @Date: 2021-01-12 18:38:05
 * @LastEditTime: 2021-01-14 14:41:22
 * @Copyright: 1.0.0
 */
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

// 复制文件到指定目录
const copyFiles = [
	{
    	from: path.resolve("src/plugins/manifest.json"),
    	to: `${path.resolve("dist")}/manifest.json`
  	},
  	{
    	from: path.resolve("src/assets"),
    	to: path.resolve("dist/assets")
  	},
  	{
	    from: path.resolve("src/plugins/inject.js"),
	    to: path.resolve("dist/js")
  	}
];

// 复制插件
const plugins = [
  	new CopyWebpackPlugin({
    	patterns: copyFiles
  	})
];

// 页面文件
const pages = {};
// 配置 popup.html 页面
const chromeName = ["popup","index"];

chromeName.forEach(name => {
  	pages[name] = {
    	entry: `src/${name}/main.js`,
    	template: `src/${name}/index.html`,
    	filename: `${name}.html`
  	};
});

module.exports = {
	pages,
	lintOnSave: false,
	filenameHashing: false,
	productionSourceMap: false,
	// 配置 content.js background.js
	configureWebpack: {
		entry: {
			content: "./src/content/main.js",
			background: "./src/background/main.js"
		},
		output: {
			filename: "js/[name].js"
		},
		plugins
	},
	// 配置 content.css
	css: {
		extract: {
			filename: "css/[name].css"
		}
	},
	chainWebpack: config => {
		if (process.env.NODE_ENV === 'production') {
			config.output.filename('js/[name].js').end()
			config.output.chunkFilename('js/[name].js').end()
			/* config.plugin('extract-css').tap(args => [{
				filename: `css/[name].css`,
				chunkFilename: `css/[name].css`
			}]) */
		}
	}
}