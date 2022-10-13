/** Crucial to have all that build up along with ts-node packages.
 * Migrations and seeds Works only like that
 */
 require('ts-node/register');
 const dotenv = require('dotenv');
 dotenv.config();
 module.exports = {
   client: "postgres",
   connection: {
     host: process.env.DB_HOST,
     database: process.env.DB_NAME,
     user: process.env.DB_USER,
     password: process.env.DB_PASSWORD,
     port: process.env.DB_PORT,
   },
   migrations: {
     loadExtensions: [`.ts`, '.ts'],
     extenstion: 'ts',
     tableName: "knex_migrations"
   },
   seeds: {
     extenstion: 'ts'
   }
 }
 
 export {}