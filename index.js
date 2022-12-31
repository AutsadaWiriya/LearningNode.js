// // Callback Funtion
// function calculate(x, y, callback){
//    console.log("กำลังคำนวณ.....")
//    setTimeout(() => { 
//       const sum = x + y
//       callback(sum)
//    },3000)
// }

// calculate(100, 50, function(result){
//    console.log(`ผลบวก = ${result}`)
// })




// โปรแกรมดาวน์โหลดไฟล์
// const url1 = "Autsada.mp4"
// const url2 = "Apiwit.mp4"
// const url3 = "Kritsada.mp4"

// function dowloading(url, callback){
//    console.log(`กำลังโหลดไฟล์ ${url}`)
//    setTimeout(() => {
//       callback(url)
//    },3000)
// }

// // Callback Hell
// dowloading(url1, function complete(result){
//    console.log(`ดาวน์โหลด ${result} เสร็จ!`)
//    dowloading(url2, function complete(result){
//       console.log(`ดาวน์โหลด ${result} เสร็จ!`)
//       dowloading(url3, function complete(result){
//          console.log(`ดาวน์โหลด ${result} เสร็จ!`)
//       })
//    })
// })




// // Promise
// const connect = true
// function dowloading(url){
//    return new Promise(function(resolve, reject){
//    console.log(`กำลังโหลด ${url} ................`)
//       setTimeout(() => {
//          if(connect){
//             resolve(`โหลด ${url} เรียบร้อย`)
//          }else{
//             reject(`โหลด ${url} ผิดพลาด`)
//          }
//       },1500)
//    })
// }

// // Promise Then
// dowloading(url1).then(function(complete){
//    console.log(complete)
//    return dowloading(url2)
// }).then(function(complete){
//    console.log(complete)
// }) 

// // Async & Await
// async function start(){
//    console.log(await dowloading(url1))
//    console.log(await dowloading(url2))
//    console.log(await dowloading(url3))
// }
// start()