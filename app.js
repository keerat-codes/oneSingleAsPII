const test2  = require('./controllers/'test2);
const cube  = require('./controllers/'cube);
const translate  = require('./controllers/'translate);
const hiBarbie  = require('./controllers/'hiBarbie);
app.use('/Barbie', hiBarbie);
app.use('/translate', translate);
app.use('/cube', cube);
app.use('/test', test2);
app.use()

console.log("Hello")

