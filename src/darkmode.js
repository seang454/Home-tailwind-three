const body = document.querySelector("#body");
const sun = document.querySelector("#sun");
const moon = document.querySelector("#moon");
const a=document.getElementsByTagName("a");

console.log(body);

const style = document.createElement("style");
// body and body.toggle is switch on and off 
// when we click on when it is black it is body it changes to body.toggle 
// but when it is body.toggle it changes to body
style.innerHTML = `
  body {
    background-color: white;
    transition: background-color 0.5s ease;
  }   
  #body.dark-mode {
    background-color: black;
  }
  a{
   color: black;
  }
   a.active1 {
    color: white;
  } 
   #moon{
    display:none;
   }
   #sun.active{
    animation: rotate-sun 10s infinite linear;
   }
   @keyframes rotate-sun {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
   }
   #moon.active {
    animation: rotate-moon 10s infinite linear;
   }
   @keyframes rotate-moon {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
   }
   @media (prefers-color-scheme: dark) {
    body {
      background-color: black;
    }
    #sun.active{
      animation: rotate-sun 10s infinite linear;
    }
   }  

`;

// Append the style element to the head of the document once
document.head.appendChild(style);
const darkmode = () => {
  sun.addEventListener("click", () => {
    // Toggle the dark-mode class on the body
    body.classList.toggle("dark-mode");
    sun.style.display = "none";
    a.style
    if(moon.style.display="none"){
      moon.style.display = "block";
    }
    a.item.classList.toggle("active1");
  });
 
};
const lightmode = () => {
  moon.addEventListener("click", () => {
    // Toggle the dark-mode class on the body
    body.classList.toggle("dark-mode");
    // Toggle the active class on the sun
    sun.classList.toggle("active");
    moon.style.display = "none";
    if (sun.style.display === "none"){
      sun.style.display = "block";
    }
  });
}
lightmode();
darkmode();
