module.exports = ({ config }) => {
    // config.resolve.extensions.push('.svg');
    config.module.rules = config.module.rules.map(data => {
        if (/svg\|/.test(String(data.test)))
            data.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/;

        return data;
    });
    config.module.rules.push({
        test: /\.svg$/,
        use: [{ loader: require.resolve('babel-loader') },
        { loader: require.resolve('react-svg-loader') }]
    });
    
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude.push(/node_modules\/(?!(gatsby)\/)/)
    // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
    config.module.rules[0].use[0].loader = require.resolve("babel-loader")

    // // use @babel/preset-react for JSX and env (instead of staged presets)
    config.module.rules[0].use[0].options.presets = [
        require.resolve("@babel/preset-react"),
        require.resolve("@babel/preset-env"),
    ]

    config.module.rules[0].use[0].options.plugins.push(
        // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
        require.resolve("babel-plugin-remove-graphql-queries"),
    )
    // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
    config.resolve.mainFields = ["browser", "module", "main"]

    return config
}