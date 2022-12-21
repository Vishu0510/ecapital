import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()

const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "mytable"
})

app.use(express.json())
app.use(cors())

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

app.post("/employee", (req, res) => {
    const q = "INSERT INTO employee(`firstName`, `lastName`, `salary`) VALUES (?)";
  
    const values = [
      req.body.firstName,
      req.body.lastName,
      req.body.salary,
    ];
  
    db.query(q, [values], (err, data) => {
      if (err){
        return res.send(err);
      } 
      return res.json("Employee Successfully Created");
    });
});

app.delete("/employee/:id", (req, res) => {
    const employeeId = req.params.id;
    const q = "DELETE FROM employee WHERE id = ?";
  
    db.query(q, [employeeId], (err, data) => {
        if (err){
            return res.send(err);
        }
      return res.json(data);
    });
});

app.listen(8000, ()=>{
    console.log("Connected to backend")
})