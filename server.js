var http = require('http'),
    app = require('./config/express')();
    require('./config/passport')();
    require('./config/database.js')('mongodb://localhost/chat');


http.createServer(app).listen(app.get('port'), function() {
    console.log('serve on port:' + app.get('port'));
});