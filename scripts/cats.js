import Animal from './forms.js'

class Cat extends Animal{
    constructor(name,age,legs,nails,mustaches){
        super(name,age,legs);
        this.nails = nails;
        this.mustaches = mustaches;
    }

    static cats_form(propArr){
        super.form_bones(propArr);
    }
}

document.querySelector('.cats').addEventListener('click',()=>{
    let propArr = ["Name","Age","Legs","Nails","Mustaches"]
    Cat.cats_form(propArr);
})