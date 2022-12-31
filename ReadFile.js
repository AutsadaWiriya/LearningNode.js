const fs = require(`fs`)

// ReadFile
const data = fs.readFileSync(`input.txt`, 'utf8')
console.log(data)

// WriteFile
const outputtext = `Autsada Wiriya\n${data}\nไฟล์ถูกเขัยนเมื่อ ${new Date()}`
fs.writeFileSync(`output.txt`, outputtext)
setTimeout(() => {
   console.log("เขียนไฟล์เรียบร้อย")
},1000)