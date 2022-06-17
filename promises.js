let p = new Promise((resolve, reject)=> {
    let x = 3;
    if (x==2){
        resolve('Correct');
    }
    else{
        reject('Incorrect');
    }
})
p.then((msg) =>{
    console.log("this is code: " + msg);
}).catch((msg) => console.log("this is code: " + msg) );