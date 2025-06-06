// let btn = document.querySelector("#mode");

// let currmode = "light";

// btn.addEventListener( "click" , ()=>{

//     if( currmode === "light"){
//         document.querySelector("body").style.backgroundColor = "black";
//         currmode = "dark";
//     }
//     else {
//         document.querySelector("body").style.backgroundColor = " beige";
//         currmode = "light";
//     }

// });

// let btn = document.querySelector("#mode");

// let currmode = "light";

// btn.addEventListener("click", () => {
//     if (currmode == "light") {
//         document.querySelector("body").style.backgroundColor = "black";
//         currmode = "dark";
//     } else {
//         document.querySelector("body").style.backgroundColor = "beige";
//         currmode = "light";
//     }
// });
let mode = document.querySelector("#mode");
let ct = document.querySelector("#container");
let currmode = "light";


let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let zero = document.querySelector("#zero");
let reset = document.querySelector("#reset");
let equal = document.querySelector("#equal");

let displayy = document.querySelector("#displayy");

one.addEventListener( "click" , ()=>{
    displayy.innerText += "1";
    displayy.style.paddingBottom = "1px";  // or "0px"

});
two.addEventListener( "click" , ()=>{
    displayy.innerText += "2";
});
three.addEventListener( "click" , ()=>{
    displayy.innerText += "3";
});
four.addEventListener( "click" , ()=>{
    displayy.innerText += "4";
});
five.addEventListener( "click" , ()=>{
    displayy.innerText += "5";
});
six.addEventListener( "click" , ()=>{
    displayy.innerText += "6";
});

seven.addEventListener( "click" , ()=>{
    displayy.innerText += "7";
    
});

eight.addEventListener( "click" , ()=>{
    displayy.innerText += "8";
});

nine.addEventListener( "click" , ()=>{
    displayy.innerText += "9";
});


zero.addEventListener( "click" , ()=>{
    displayy.innerText += "0";
});










reset.addEventListener( "click" , ()=>{
    displayy.innerText = "";
});


mode.addEventListener("click", () => {
    if (currmode === "light") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        currmode = "dark";
        btn.textContent = "Switch to Light Mode";
        ct.style.backgroundColor = "";

    } else {
        document.body.style.backgroundColor = "beige";
        document.body.style.color = "black";
        currmode = "light";
        btn.textContent = "Switch to Dark Mode";
        ct.style.backgroundColor = "rgb(213, 178, 81)";
    }
});
