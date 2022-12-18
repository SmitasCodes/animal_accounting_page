import Animal from './forms.js'

class Bird extends Animal{
    constructor(name,age,legs,feathers,beaks){
        super(name,age,legs);
        this.feathers = feathers;
        this.beaks = beaks;
    }

    static birds_form(propArr){
        super.form_bones(propArr);
    }
}

document.querySelector('.birds').addEventListener('click',()=>{
    let propArr = ["Name","Age","Legs","Feathers","Beaks"]
    Bird.birds_form(propArr);
})