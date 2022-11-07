const Pool = require('pg').Pool
 const pool = new pool ({
    user:'majviixrjaggwl',
    host: 'ec2-3-227-68-43.compute-1.amazonaws.com',
    database: 'd6e1890so5phro',
    pasword: '98d786350a79fca28402a35b96e0c827fe53bebe38158aae56e9ed04eee4c0ab',
    port: '5432',
    ssl: {

        rejectunauthorized: false
    }




 });
 module.exports = pool;