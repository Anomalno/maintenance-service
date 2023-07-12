let W1 = document.querySelector(".nav-block-button");
let W2 = document.querySelector(".nav-block-2");
let W11 = getComputedStyle(W1);
let W22 = getComputedStyle(W2);
let Wq = parseFloat(W22.paddingLeft);
console.log(Wq)
let Ww = parseFloat(W11.width);
console.log(Ww)
let We = Ww-Wq;
console.log(We);
W2.style.width = We + "px";
console.log('Привет');
console.log(Wq);
console.log(W2.style.width);
console.log(W11.width);

