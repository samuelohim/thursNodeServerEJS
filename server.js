const eo = require('express');
app = eo();
const el = require('express-ejs-layouts');

app.use(eo.static('__dirnam' + '/public'));

app.use(el);
app.set('view engine', 'ejs');
port = process.env.PORT || 8080;

app.use(require('./app/routes'));

app.listen(port, ()=>{
	console.log(`Listen on port localhost://8080`);
});