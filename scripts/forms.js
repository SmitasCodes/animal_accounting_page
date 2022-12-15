let categories = ['Dogs','Cats','Birds'];

class Animals{
    constructor(age,name = ""){
        this.age = age;
        this.name = name; 
    }
}

function menubar(categories){
    const main = document.querySelector('#main')
    let div_menu = document.createElement('div')
    div_menu.id = 'menu_div';
    main.appendChild(div_menu)

    for(let category of categories){
        let a_menu = document.createElement('a');
        a_menu.classList.add('menu_a')
        a_menu.innerText = category;
        div_menu.appendChild(a_menu)
    }

}


menubar(categories)