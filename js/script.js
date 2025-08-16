// HTML & CSS progress circular bar 
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 90,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;
  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${htmlStartValue * 3.6}deg, #ededed 0deg)`;
  if (htmlStartValue == htmlEndValue) clearInterval(progresshtml);
}, htmlspeed);


// JavaScript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 75,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;
  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${javascriptStartValue * 3.6}deg, #ededed 0deg)`;
  if (javascriptStartValue == javascriptEndValue) clearInterval(progressjs);
}, jsspeed);


// Python progress circular bar (used reactjs class)
let pythonProgress = document.querySelector(".python"),
  pythonValue = document.querySelector(".python-progress");

let pythonStartValue = 0,
  pythonEndValue = 85,
  pythonspeed = 30;

let progresspython = setInterval(() => {
  pythonStartValue++;
  pythonValue.textContent = `${pythonStartValue}%`;
  pythonProgress.style.background = `conic-gradient(#3f396d ${pythonStartValue * 3.6}deg, #ededed 0deg)`;
  if (pythonStartValue === pythonEndValue) clearInterval(progresspython);
}, pythonspeed);


// React progress circular bar (Stops at 70%)
let reactProgress = document.querySelector(".react"),  // selects the circle
    reactValue = document.querySelector(".react-progress");  // selects the text inside

let reactStartValue = 0,
    reactEndValue = 70,
    reactspeed = 30;

let progressReact = setInterval(() => {
  reactStartValue++;
  reactValue.textContent = `${reactStartValue}%`;
  reactProgress.style.background = `conic-gradient(#61DBFB ${reactStartValue * 3.6}deg, #ededed 0deg)`;

  if (reactStartValue === reactEndValue) {
    clearInterval(progressReact);
  }
}, reactspeed);




// Node progress circular bar (also using reactjs class)
let nodeprogress = document.querySelector(".node"),
  nodeValue = document.querySelector(".node-progress");

let nodeStartValue = 0,
  nodeEndValue = 80,
  nodespeed = 30;
let progressNode = setInterval(() => {
  nodeStartValue++;
  nodeValue.textContent = `${nodeStartValue}%`;
  nodeprogress.style.background = `conic-gradient(#8CC84B ${nodeStartValue * 3.6}deg, #ededed 0deg)`;
  if (nodeStartValue === nodeEndValue) clearInterval(progressNode);
}, nodespeed);



// Java progress circular bar (also using reactjs class)
let javaprogress = document.querySelector(".java"),
  javaValue = document.querySelector(".java-progress");

let javaStartValue = 0,
  javaEndValue = 87,
  javaspeed = 30;
let progressjava = setInterval(() => {
  javaStartValue++;
  javaValue.textContent = `${javaStartValue}%`;
  javaprogress.style.background = `conic-gradient(#8CC84B ${javaStartValue * 3.6}deg, #ededed 0deg)`;
  if (javaStartValue === javaEndValue) clearInterval(progressjava);
}, javaspeed);



// Kotlin progress circular bar 
let kotlinprogress = document.querySelector(".kotlin"),
  kotlinValue = document.querySelector(".kotlin-progress");
let kotlinStartValue = 0,
kotlinEndValue = 65,
kotlinspeed = 30;
let progressKotlin = setInterval(() => {
  kotlinStartValue++;
  kotlinValue.textContent = `${kotlinStartValue}%`;
  kotlinprogress.style.background = `conic-gradient(#7F52FF ${kotlinStartValue * 3.6}deg, #ededed 0deg)`;
  if (kotlinStartValue === kotlinEndValue) clearInterval(progressKotlin);
}, kotlinspeed);


// R Progress Circular bar
let rprogress = document.querySelector(".r"),
  rValue = document.querySelector(".r-progress");
let rStartValue = 0,
rEndValue = 50,
rspeed = 30;
let progressr = setInterval(() => {
  rStartValue++;
  rValue.textContent = `${rStartValue}%`;
  rprogress.style.background = `conic-gradient(#7F52FF ${rStartValue * 3.6}deg, #ededed 0deg)`;
  if (rStartValue === rEndValue) clearInterval(progressr);
}, rspeed);


// SQL Progress Circular bar
let sqlprogress = document.querySelector(".sql"),
  sqlValue = document.querySelector(".sql-progress");
let sqlStartValue = 0,
sqlEndValue = 85,
sqlspeed = 30;
let progresssql = setInterval(() => {
  sqlStartValue++;
  sqlValue.textContent = `${sqlStartValue}%`;
  sqlprogress.style.background = `conic-gradient(#7F52FF ${sqlStartValue * 3.6}deg, #ededed 0deg)`;
  if (sqlStartValue === sqlEndValue) clearInterval(progresssql);
}, sqlspeed);


// Mongo Progress Circular bar
let mongoprogress = document.querySelector(".mongo"),
  mongoValue = document.querySelector(".mongo-progress");
let mongoStartValue = 0,
mongoEndValue = 55,
mongospeed = 30;
let progressmongo = setInterval(() => {
  mongoStartValue++;
  mongoValue.textContent = `${mongoStartValue}%`;
  mongoprogress.style.background = `conic-gradient(#7F52FF ${mongoStartValue * 3.6}deg, #ededed 0deg)`;
  if (mongoStartValue === mongoEndValue) clearInterval(progressmongo);
}, mongospeed);


// C Progress Circular bar
let cprogress = document.querySelector(".c"),
  cValue = document.querySelector(".c-progress");
let cStartValue = 0,
cEndValue = 50,
cspeed = 30;
let progressc = setInterval(() => {
  cStartValue++;
  cValue.textContent = `${cStartValue}%`;
  cprogress.style.background = `conic-gradient(#7F52FF ${cStartValue * 3.6}deg, #ededed 0deg)`;
  if (cStartValue === cEndValue) clearInterval(progressc);
}, cspeed);


// git and github Progress Circular bar
let githubprogress = document.querySelector(".git"),
  githubValue = document.querySelector(".git-progress");
let githubStartValue = 0,
githubEndValue = 94,
githubspeed = 30;
let progressgithub = setInterval(() => {
  githubStartValue++;
  githubValue.textContent = `${githubStartValue}%`;
  githubprogress.style.background = `conic-gradient(#7F52FF ${githubStartValue * 3.6}deg, #ededed 0deg)`;
  if (githubStartValue === githubEndValue) clearInterval(progressgithub);
}, githubspeed);


// Filter using jQuery
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value === "all") {
      $(".post").show("1000");
    } else {
      $(".post").not("." + value).hide("1000");
      $(".post").filter("." + value).show("1000");
    }
  });
});


// Sticky Navbar
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      document.getElementById("navbar-top").classList.add("fixed-top");
      let navbar_height = document.querySelector(".navbar").offsetHeight;
      document.body.style.paddingTop = navbar_height + "px";
    } else {
      document.getElementById("navbar-top").classList.remove("fixed-top");
      document.body.style.paddingTop = "0";
    }
  });
});


// Back to top button
let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
