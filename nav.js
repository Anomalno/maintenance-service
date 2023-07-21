function equal_sub_nav_width(){
    let i = 1;
    let count_of_main_elements = document.querySelectorAll("li.nav-block-button").length;
    console.log(count_of_main_elements)
    if (window.matchMedia('screen and (min-width: 320px) and (max-width: 576px)').matches) {
    }
    else {
        while (i < count_of_main_elements) {
            let main_element = "li.nav-block-button:nth-of-type" + "(" + i * 2 + ")";
            let equ_element = main_element + " > ul.nav-block-2";
            document.querySelector(equ_element).style.width = getComputedStyle(document.querySelector(main_element)).width;
            console.log(document.querySelector(equ_element).style.width)
            console.log(document.querySelector(".nav-block-button-2:nth-of-type" + "(" + 2 * i + ")"));
            i++;
        }
    }
}
equal_sub_nav_width()


