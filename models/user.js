const mysql = require('mysql');
const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'login'
});

db.connect(function(error){
    if(error){
        console.log(error)
    } else{
        console.log('Mysql connected.....')
    }
});
