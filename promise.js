// let promise = new Promise(function (resolve,reject) {
    // setTimeout(() → reject("done!"), 1000);
//});


// new Promise((resolve , reject) => {
//     setTimeout(() => reject("result"), 2000);
// })
//     then((result) => console.log(result))
//     catch((error) => console.log("error" , error));
//     finally(() => console.log("finally"));

// new Promise((resolve,reject) => {
//     setTimeout(() => reject)
// })

// ........
// new Promise((resolve,reject)=> {
//     throw new Error('error');
// })
//     catch(err) => console.log
// ....
let promise = new Promise(resolve => resolve("done"));

promise
 then(res => console.log(res));
