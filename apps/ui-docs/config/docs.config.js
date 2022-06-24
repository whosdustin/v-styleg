const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');

const library = 'libs/shared/ui-core/src/lib/';

/** @type import("vue-styleguidist").Config */
module.exports = {
    title: 'UiCore',
    components: [
        path.join(process.cwd(), library, '**/*.vue')
    ],
    getComponentPathLine(componentPath) {
        const name = path.basename(componentPath, '.vue');
        return `import { ${name} } from '@styleguidist/ui-core';`;
    },
    webpackConfig() {
        return {
            module: {
                rules: [
                    {
                        test: /\.ts$/,
                        loader: 'ts-loader',
                        options: { appendTsSuffixTo: [/\.vue$/] }
                    },
                    {
                        test: /\.vue$/,
                        loader: 'vue-loader'
                    },
                    {
                        test: /\.scss$/,
                        use: [
                          'vue-style-loader',
                          'css-loader',
                          'sass-loader'
                        ]
                    }
                ]
            },
            plugins: [ new VueLoaderPlugin() ],
        }
    }
}
