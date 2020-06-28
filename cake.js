let selected = "menu-2";
let root = ".data";
const header = document.getElementById("header").innerHTML;
const menu1 = document.querySelector(".menu-1");
const menu2 = document.querySelector(".menu-2");
const menu3 = document.querySelector(".menu-3");
const menu4 = document.querySelector(".menu-4");
const menu5 = document.querySelector(".menu-5");
const menu6 = document.querySelector(".menu-6");
const menu7 = document.querySelector(".menu-7");


menu1.addEventListener('click', () => {
    console.log(selected);
    if(selected == ""){
        selected = "menu-1";
    } else if (selected != "menu-1"){
        document.querySelector(root.concat(selected[selected.length - 1])).style.display = "none";
        selected = "menu-1";
        document.querySelector(root.concat(selected[selected.length - 1])).style.display = "inline-block";
        const header = document.getElementById("header").innerHTML = "Buns";
    }
});
menu2.addEventListener('click', () => {
    console.log(selected);
    if(selected == ""){
        selected = "menu-2";
    } else if (selected != "menu-2"){
        document.querySelector(root.concat(selected[selected.length - 1])).style.display = "none";
        selected = "menu-2";
        document.querySelector(root.concat(selected[selected.length - 1])).style.display = "inline-block";
        const header = document.getElementById("header").innerHTML = "Cakes";
    }
});
menu3.addEventListener('click', () => {
    console.log(selected);
    if(selected == ""){
        selected = "menu-3";
    } else if (selected != "menu-3"){
        document.querySelector(root.concat(selected[selected.length - 1])).style.display = "none";
        selected = "menu-3";
        document.querySelector(root.concat(selected[selected.length - 1])).style.display = "inline-block";
        const header = document.getElementById("header").innerHTML = "Pastry";
    }
});
menu4.addEventListener('click', () => {
    console.log(selected);
    if(selected == ""){
        selected = "menu-4";
    } else if (selected != "menu-4"){
        document.querySelector(root.concat(selected[selected.length - 1])).style.display = "none";
        selected = "menu-4";
        document.querySelector(root.concat(selected[selected.length - 1])).style.display = "inline-block";
        const header = document.getElementById("header").innerHTML = "Bubble Tea";
    }
});
menu5.addEventListener('click', () => {
    console.log(selected);
    if(selected == ""){
        selected = "menu-5";
    } else if (selected != "menu-5"){
        document.querySelector(root.concat(selected[selected.length - 1])).style.display = "none";
        selected = "menu-5";
        document.querySelector(root.concat(selected[selected.length - 1])).style.display = "inline-block";
        const header = document.getElementById("header").innerHTML = "Smoothies";
    }
});
menu6.addEventListener('click', () => {
    console.log(selected);
    if(selected == ""){
        selected = "menu-6";
    } else if (selected != "menu-6"){
        document.querySelector(root.concat(selected[selected.length - 1])).style.display = "none";
        selected = "menu-6";
        document.querySelector(root.concat(selected[selected.length - 1])).style.display = "inline-block";
        const header = document.getElementById("header").innerHTML = "Coffee";
    }
});
menu7.addEventListener('click', () => {
    console.log(selected);
    if(selected == ""){
        selected = "menu-7";
    } else if (selected != "menu-7"){
        document.querySelector(root.concat(selected[selected.length - 1])).style.display = "none";
        selected = "menu-7";
        document.querySelector(root.concat(selected[selected.length - 1])).style.display = "inline-block";
        const header = document.getElementById("header").innerHTML = "Cold Beverages";
    }
});