const fs = require('fs')

// ReadFile
fs.readFile(`input.txt`,`utf-8`,(err, data)=>{
   if(err) return console.log("เกิดข้อผิดพลาด\n" , err)
   console.log(data)
})

