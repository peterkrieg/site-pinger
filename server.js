const app = require('./express');

const { PORT: port = 3000 } = process.env


app.listen(port, _ => {
  console.log(`listening on port ${port}`);

})