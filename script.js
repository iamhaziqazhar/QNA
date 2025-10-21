let bgChange= document.querySelector("#theme");
let change="dark";
let body=document.querySelector("body");


const change2= addEventListener("click", ()=>{
console.log("haziq")
if(change==="dark"){body.style.backgroundColor="black"
    change="light";
}
else {body.style.backgroundColor="white"
    change="dark"
}  ;
})