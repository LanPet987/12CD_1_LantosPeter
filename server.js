const express = require("express")
const sql = require("mysql")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

const db = sql.createConnection(
    {
        user:"root",
        host:"127.0.0.1",
        port:3306,
        password:"",
        database:"fogado"
    }
)

app.get("/",(req,res)=>{
    const sql ="SELECT * FROM `szobak`"
    db.query(sql, (err,result)=>{
        if (err) return res.json(err)
        return res.json(result)
    })
})

app.listen(3000,()=>{
    console.log("A szerver a 3000 porton fut")
})