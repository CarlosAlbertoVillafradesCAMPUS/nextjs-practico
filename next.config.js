const withPWA = require('next-pwa');

module.exports = withPWA ({
    pwa:{
        dest:'public',
        register:true,
        mode:'production',
        disable:false
    },
    
    reactStringMode:true,
    images:{
        domains:['api.lorem.space'],
    }
})