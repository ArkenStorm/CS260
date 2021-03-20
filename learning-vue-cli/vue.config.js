module.exports = {
    devServer: {
        useLocalIp: false,
        public: 'localhost:8081',
        disableHostCheck: true,
        proxy: {
            '^/api': {
                target: 'http://cloud9.arkenstorm.com:4201'
            }
        }
    }
}