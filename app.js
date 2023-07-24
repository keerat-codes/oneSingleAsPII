const test2  = require('./controllers/'test2);
const cube  = require('./controllers/'cube);
const translate  = require('./controllers/'translate);
const hiBarbie  = require('./controllers/'hiBarbie);
const coinToss  = require('./controllers/coinToss');
const newYear  = require('./controllers/newYear');
const test56  = require('./controllers/test56');
const jokesv1  = require('./controllers/jokesv1');
app.use('/jokesv1', jokesv1);
app.use('/test66', test56);
app.use('/newYear', newYear);
app.use('/toss', coinToss);
app.use('/Barbie', hiBarbie);
app.use('/translate', translate);
app.use('/cube', cube);
app.use('/test', test2);
app.use()

console.log("Hello")

