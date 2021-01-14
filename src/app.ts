import Invoice from './classes/Invoice.js'
import ListTemplate from './classes/ListTemplate.js'
import Payment from './classes/Payment.js'
import HasFormatter from './interfaces/HasFormatter.js'

// interface IsPerson {
//     name: string;
//     age: number;
//     speak(a: string) : void;
//     spend(a: number) : number;
// }

// class Man implements IsPerson {
//     name: string
//     age: number
//     cards: string[]
//     constructor(){
//         this.name = ''
//         this.age = 0
//         this.cards = []
//     }

//     speak = (text: string) => {
//         console.log(text)
//     }

//     spend = (amount: number) => {
//         return amount;
//     }

// }

// const me: IsPerson = {
//     name: 'Lam',
//     age: 22,
//     speak(text: string): void{
//         console.log(text)
//     },
//     spend(amount: number): number{
//         return amount
//     }
// }

// let docOne: HasFormatter
// let docTwo: HasFormatter

// docOne = new Invoice('Joe', 'work', 500)
// docTwo = new Payment('Bob', 'play', 200)

// let docs: HasFormatter[] = [];
// docs.push(docOne)
// docs.push(docTwo)


// const invOne = new Invoice('Lam', 'work', 500)
// const invTwo = new Invoice('Lammy', 'work', 600)

// let invoices: Invoice[] = [];

// invoices.push(invOne)
// invoices.push(invTwo)

// invoices.forEach(item => {
//     console.log(item.format())
// })



const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children)

//inputs 
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)
form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;

    let values : [string , string, number] = [tofrom.value, details.value, amount.valueAsNumber]

    if (type.value === 'invoice'){
        doc = new Invoice(...values)
    } else {
        doc = new Payment(...values)
    }

    // docs.push(doc)
    list.render(doc, type.value, 'end')
})

// GENERICS
//<T extends {name: string}> allows object with name
//<T extends HasFormatter> allow children of HasFormatter only
//allows objects only

const addUID = <T extends object> (obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj,uid}
}

let temp = addUID({name:'Lam', age: 25})

console.log(temp)

interface Resource<T> {
    uid: number;
    resourceName: ResourceType;
    data: T;
}

//example just like java down here
interface List<T> {
    data: T[];
}

class LinkedList<T> implements List<T> {
    data: T[];
    constructor(){
        //further implementations of linked list which I'm a bit too lazy to do.
        this.data = []
    }
}

let tempList: List<String>
tempList = new LinkedList<String>()

//ENUMS
enum ResourceType { BOOK, AUTHO, FILM, DIRECTOR, PERSON }

let tempOne: Resource<object> = {
    uid:1,
    resourceName: ResourceType.BOOK,
    data:{}
}

//TUPLE
let arr = ['ryu', 25, true]

let tup: [string, number, boolean] = ['a', 1, true] //THIS IS A TUPLE
let test: (string | number| boolean)[] = ['a', true, 2] //THIS IS AN ARRAY
