

class Animal {
    constructor(name, age, legs) {
        this.name = name;
        this.age = age;
        this.legs = legs;
    }

    static form_bones(propArr) {
        if (main.querySelector('form')) {
            document.querySelector('form').remove()
        }

        let form = document.createElement('form');
        form.id = "form_main";

        for (let i = 0; i < propArr.length; i++) {

            let row = document.createElement('div')
            let label = document.createElement("label");
            let textInput = document.createElement("input");

            row.classList.add('row');
            label.innerText = propArr[i];
            textInput.type = "text";

            main.insertBefore(form,main.children[0].nextSibling);
            row.appendChild(label);
            row.appendChild(textInput);
            form.appendChild(row);

            if (i == propArr.length - 1) {
                let submit = document.createElement("button");
                submit.innerText = "Submit";
                form.appendChild(submit)

                submit.addEventListener("click", () => {
                    event.preventDefault();

                    let inputValues = [];
                    let inputs = document.querySelectorAll('input');

                    let valueTrue = 0;

                    for (let j = 0; j < inputs.length; j++) {
                        let value = inputs[j].value;

                        if (value == "") {
                            alert("Please enter information fiels")
                            break;
                        } else if (value != "") {
                            inputValues.push(value)
                            value = "";
                            valueTrue++;
                        }

                        if(valueTrue == inputs.length){
                            inputs.forEach(input=>{
                                input.value = ""
                            })
                            this.display_info(propArr, inputValues);
                        }
                    }
                })
            }
        }
        
        main.insertBefore(div_info, main.children[1].nextSibling)
    }

    static display_info(propArr, inputs) {
        let div_info = document.querySelector(".info_div");

        let div_card = document.createElement('div');
        div_card.classList.add('card_div');
        div_info.appendChild(div_card);

        for (let i = 0; i < inputs.length; i++) {
            let info_row = document.createElement('div');
            info_row.classList.add('info_row')
            div_card.appendChild(info_row)

            let par_prop = document.createElement('p');
            par_prop.innerText = `${propArr[i]}:`;

            let par_value = document.createElement('p');
            par_value.innerText = `${inputs[i]}`;

            info_row.appendChild(par_prop);
            info_row.appendChild(par_value);
        }
    }
}

const div_info = document.createElement('div');

(() => {
    let categories = ['Dogs', 'Cats', 'Birds'];
    let div_menu = document.createElement('div')
    div_menu.id = 'menu_div';
    
    const main = document.querySelector('#main');
    main.appendChild(div_menu)

    div_info.classList.add('info_div');

    for (let category of categories) {
        let a_menu = document.createElement('a');
        a_menu.classList.add('menu_a')
        a_menu.innerText = category;
        div_menu.appendChild(a_menu)
        a_menu.classList.add(category.toLowerCase())
    }
})()

export default Animal;














