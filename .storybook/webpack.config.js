const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env) => {
    const config = genDefaultConfig(baseConfig, env);

    config.module.rules[3].exclude = /\.m\.svg$/;

    config.module.rules.push({
        test: /\.m\.less$/,
        use: [
            require.resolve('style-loader'),
            {
                loader: require.resolve('css-loader'),
                options: {
                    importLoaders: 1,
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]',
                    sourceMap: true
                },
            },
            require.resolve('less-loader')
        ]
    });

    config.module.rules.push({
        test: /\.less$/,
        exclude: /\.m\.less$/,
        use: [
            require.resolve('style-loader'),
            { loader: require.resolve('css-loader'), options: { sourceMap: true } },
            require.resolve('less-loader')
        ]
    });

    config.module.rules.push({
            test: /\.m\.svg$/,
            loader: require.resolve('svg-sprite-loader'),
            options: {
                symbolId: '[name]__[hash]'
            }
        });

    return config;
};