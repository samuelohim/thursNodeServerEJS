const eo = require('express');
app = eo();
port = process.env.PORT || 8080;

app.use(require('./app/routes'));

app.listen(port, ()=>{
	console.log(`Listen on port localhost://8080`);
});