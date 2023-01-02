const http = require('http')

const server = http.createServer(function(req,res){
   const myhtml = `
   <h1 Style="color:blue">Hello Autsada</h1>
   <p>Node.js</p>
   `
   res.write(myhtml)
   res.end()
})
server.listen(3000,'localhost',()=>{
   console.log("Start server")
})
