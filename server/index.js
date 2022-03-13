const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors')
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const PORT = process.env.port || 8000;

const db = mysql.createPool({
    host: "localhost",
    user: "pracuser",
    password: "pracuser",
    database: "pracdb"
});

// app.get("/", (req, res)=>{
//     const sqlQuery = "INSERT INTO tbl_sample (title, writer, content) VALUES ('하하', 'user2', '하하하')";
//     db.query(sqlQuery, (err, result)=>{
//         res.send('success!');
//     });
// })

app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/insert", (req, res) => {
    const title = req.body.title;
    const writer = req.body.writer;
    const content = req.body.content;
    const sqlQuery = "INSERT INTO tbl_sample (title, writer, content) VALUES (?,?,?)";
    db.query(sqlQuery, [title, writer, content], (err, result) => {
        res.send('success!');
    });
});

app.listen(PORT, ()=>{
    console.log(`running on port ${PORT}`);
});