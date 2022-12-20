import express from "express"
import mysql from "mysql"

const app = express()

const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "mytable"
})

app.get("/employees", (req, res) => {
    const q = "SELECT * FROM employee";
    db.query(q, (err, data) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }
        return res.json(data);
    });
});

app.listen(8000, ()=>{
    console.log("Connected to backend")
})