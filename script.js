let i = 1;
let n = 2;
let count_of_main_elements = document.querySelectorAll("li.nav-block-button").length;
if (window.matchMedia('screen and (min-width: 320px) and (max-width: 576px)').matches) {

}
else {
    while (i <= count_of_main_elements) {
        let main_element = "li.nav-block-button:nth-of-type" + "(" + i * n + ")";
        let equ_element = main_element + " > ul.nav-block-2";
        let count_of_main_elements = document.querySelectorAll("li.nav-block-button").length;
        console.log("Число мейн элементов = ", count_of_main_elements);
        console.log("main_element = ", document.querySelector(main_element));
        console.log("equ_element = ", document.querySelector(equ_element));
        document.querySelector(equ_element).style.width = getComputedStyle(document.querySelector(main_element)).width;
        console.log(document.querySelector("li.nav-block-button:nth-of-type" + "(" + 2 * i + ")"));
        i++;
    }
}

