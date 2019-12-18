module.export = {
    // devServer: {
    //     proxy: {
    //         '/api': {
    //             target: 'http://localhost:3000',
    //             changeOrigin: true,
    //         },
    //     },
    // }
    devServer: {
        proxy: 'http://localhost:3000'
    }
};