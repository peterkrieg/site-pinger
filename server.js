const app = require('./express');

const { PORT: port = 3000 } = process.env;

function test() {
	const x = 2;
}


app.listen(port, _ => {
	console.log(`listening on port ${port}`);

})