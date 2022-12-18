import Animal from './forms.js'

class Dog extends Animal{
    constructor(name,age,legs,fur,tail){
        super(name,age,legs);
        this.fur = fur;
        this.tail = tail;
    }

    static dogs_form(propArr){
        super.form_bones(propArr);
    }
}

document.querySelector('.dogs').addEventListener('click',()=>{
    let propArr = ["Name","Age","Legs","Fur","Nail"]
    Dog.dogs_form(propArr);
})
