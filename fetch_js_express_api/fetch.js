//import fetch from "node-fetch";
//console.log('js file is included there');

//var mybtn = document.getElementById("mybtn");
//var content= document.getElementById("content");
async function givedata(){
    // url = "hari.txt";
    // fetch('file:///Users/harikesh/Desktop/js_fetch_api/hari.txt').then((response)=> {console.log(response)})//.then((data)=> {console.log(data);})
    let response = await fetch('http://localhost:5555/', {
        method : "post",
    });
    if (response.status ===200){
        let data = await response.text();
        console.log(response);
        document.getElementById("res").innerHTML = data;
      //  console.log(data);
        //return response;
    }
}

givedata();