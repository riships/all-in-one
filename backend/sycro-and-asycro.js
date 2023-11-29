let a = 120;
let b = 20;



let getData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(30);
    }, 2000);
})


getData.then((data) => {
    b = data;
    console.log(a / b);
})
console.log(a / b);