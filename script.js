 question # 1

// let bgChange= document.querySelector("#theme");
// let change="dark";
// let body=document.querySelector("body");

// const change2= addEventListener("click", ()=>{
// console.log("haziq")
// if(change==="dark"){body.style.backgroundColor="black"
//     change="light";
// }
// else {body.style.backgroundColor="white"
//     change="dark"
// }  ;
// })

 question # 2

// let ans1 = document.querySelector(".answer1");
// let answer = document.querySelector("#hide");
// ans1.addEventListener("click", () => {
// if  (answer.style.display==="none"|| !answer.style.display) {
//     answer.style.display="flex";
// } 
// else { 
//     answer.style.display="none";
//     answer.style.display="none";
//     answer.style.display="none";


// }
// });

 Question #3
// let btn= document.querySelector("button");
// btn.addEventListener("click", () => {
//     let input = document.createElement("input"); 
//    let ul = document.querySelector("#li"); 
//     ul.appendChild(input);

// })

 Question # 4

// const input=document.getElementById("input");
// const para=document.getElementById("para");
// const maxLength=100;
// input.addEventListener("input",()=>{
// const currLength=input.value.length;
// const remLength=maxLength-currLength;
// para.textContent = `${remLength} characters remaining`;

// if(remLength < 0 ) {
//     para.classList.add("over-limit")
// } else   { para.classList.remove("over-limit")} 

// })
 


 Question # 5

// const images = document.querySelectorAll("#container img");
// const nextButton = document.querySelector('button');

// let currentIndex = 0;

// function showImage(index) {
//     images.forEach(img => img.style.display = 'none');
//     images[index].style.display = 'block';
// }

// showImage(currentIndex);

// nextButton.addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % images.length;
//     showImage(currentIndex);
    
// });
 Question 6

// const  divEdit=document.getElementById("editable");
// divEdit.addEventListener("dblclick",()=>{
// divEdit.contentEditable="true";
// });

// divEdit.addEventListener("keydown", (event) => {
//   if (event.key === "Enter") {
//     divEdit.contentEditable = "false";
//   }
// });

Question # 7 


// let button=document.querySelector("#button")
// button.addEventListener("click",(event)=>{
// event.preventDefault();
// const email = document.getElementById("email").value.trim();
// const name= document.getElementById("name").value.trim();
// const password=document.getElementById("password").value.trim();
// const error=document.getElementById("error");
// const error2=document.getElementById("error2");
// const error3=document.getElementById("error3");


// const namePattern= /^[A-Za-z\s'-]+$/;
// error.textContent="";
// if (name.length < 10 ) {
//    error.textContent=("Enter first and last name , name should be in alphabets and doesnt contain any sign.")
//     return;
// }
// if(!namePattern.test(name)){
// error.textContent="name should be combination of letters ";
// return;
// }
// if (!email.includes("@") || !email.includes(".com")){
// error2.textContent="Email incorrect";
//     return;
// }
// if (password.length < 8 ) {
//    error3.textContent=("password should be 8 characters long")
//     return;
// }
// alert("Form Submitted");





// })

Question # 8

// const items = document.querySelectorAll("#item");
// items.forEach((item) => {
//   item.addEventListener("dragstart", (e) => {
//     e.dataTransfer.setData("text", e.target.id);
//   });
// });
// const boxes = document.querySelectorAll(".box");
// boxes.forEach((box) => {
//   box.addEventListener("dragover", (e) => {
//     e.preventDefault();
//     box.addEventListener("drop", (e) => {
//       const id = e.dataTransfer.getData("text/plain");
//       const draggedItem = document.getElementById(id);
//       box.appendChild(draggedItem);
//     });
//   });
// });

Question # 9

// const form=document.getElementById("personForm")
// const table=document.getElementById("peopleTable").querySelector("tbody")
// form.addEventListener("submit",(e)=>{
// e.preventDefault();
// const name=document.getElementById("name").value;
// const age=document.getElementById("age").value;
// const city=document.getElementById("city").value;
// const row=document.createElement("tr");
// row.innerHTML=`
// <td>${name}</td>
// <td>${age}</td>
// <td>${city}</td>
// <td><button class="delete">delete</button></td>`;
// table.appendChild(row);
// form.reset();
// table.addEventListener("click", (e)=>{
//   if(e.target && e.target.classList.contains("delete")){
//     const row = e.target.closest('tr');
//     row.remove();
//   }
// });





// })

Question # 10

// const searchItem=document.getElementById("input");
// const button=document.getElementById("button");
// const list=document.querySelectorAll("#list li");
// button.addEventListener("click" , (e)=>{
// e.preventDefault();
// const searchTerm=searchItem.value;

// list.forEach((item) => {
// const text=item.textContent;
// if(text.includes(searchTerm)|| searchTerm===""){
//     item.style.display="block";
// } else{ item.style.display="none"};

// })})