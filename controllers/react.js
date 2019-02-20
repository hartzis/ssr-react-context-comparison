
const React = require('react');
const ReactDOMServer = require('react-dom/server');

module.exports = {

    home: (type) => function* () {

        const ReactApp = require(`../assets/build/server.react.${type}.bundle`).default;

        const pageConfig = {
            listData: require('../mock/list'),
            bannerData: require('../mock/banner')
        };

        yield this.render('page', {
            type: `react.${type}`,
            content: ReactDOMServer.renderToString(
                        React.createElement(ReactApp, pageConfig)
                    ),
            global: JSON.stringify(pageConfig)
        });

    }

}