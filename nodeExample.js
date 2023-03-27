const http = require("node:http")
const fs = require("node:fs")

const server = http.createServer((req,res)=>{

    const name ="Thenmozhi"
    // const name = {
    //     "fn":"Thenmozhi",
    //     "ln":"vennila"
    // }
    
    res.writeHead(200,{"Content-Type":"text/html"})
    let   con = fs.readFileSync("./text.html", "utf-8")
    con = con.replace("{{name}}",name)
    res.end(con)
})

server.listen(3000)