const settings = require("./settings"); // settings.json
var knex = require('knex')({
  client: 'pg',
  connection: {
    host: settings.hostname,
    user: settings.user,
    password: settings.password,
    database: settings.database
  }
});
const firstName = process.argv[2];
const lastName = process.argv[3];
const date = process.argv[4];

knex('famous_people')
.insert({ 
  firstname: firstName, 
  lastname: lastName, 
  birthdate: date
})
.asCallback((err, res) => {
  if (err) {
    console.log('error:', err);
  }
  knex.destroy();
})