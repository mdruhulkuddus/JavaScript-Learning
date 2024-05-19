//  console.dir(document);
// console.log(typeof(document));
// console.log(document.title);
// console.log(document.head);
// console.log(typeof(document.head));

// document.title = "here change";
// console.log(document.title);
// // console.dir(document.head);
// console.log(document.all[5]);
// console.log(document.links);

// console.log(document.getElementById('header'));

let headerELement = document.getElementById('header'); // object
headerELement.textContent = "DOM- document object Model";
// headerELement.innerText = "DOM- document object Model"; 

// console.log(headerELement.textContent);
// console.log(headerELement.innerText);
// console.log(headerELement.innerHTML);

// select by 
// console.log(headerELement);
// headerELement.style.fontSize = '50px';

// console.log(document.getElementsByClassName('htag'));

// let items = document.getElementsByTagName('h1');
// console.log(items);

let header = document.querySelector('.htag');
header.textContent = "change";
console.log(header);