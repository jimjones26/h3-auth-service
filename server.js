require('dotenv').config();
const app = require('./app');

app.listen(process.env.PORT, () => {
  console.log(`h3 auth service running on port ${process.env.PORT}...`);
});
