var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import Invoice from './classes/Invoice.js';
import ListTemplate from './classes/ListTemplate.js';
import Payment from './classes/Payment.js';
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
var form = document.querySelector('.new-item-form');
console.log(form.children);
//inputs 
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
// list template instance
var ul = document.querySelector('ul');
var list = new ListTemplate(ul);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var doc;
    var values = [tofrom.value, details.value, amount.valueAsNumber];
    if (type.value === 'invoice') {
        doc = new (Invoice.bind.apply(Invoice, __spreadArrays([void 0], values)))();
    }
    else {
        doc = new (Payment.bind.apply(Payment, __spreadArrays([void 0], values)))();
    }
    // docs.push(doc)
    list.render(doc, type.value, 'end');
});
// GENERICS
//<T extends {name: string}> allows object with name
//<T extends HasFormatter> allow children of HasFormatter only
//allows objects only
var addUID = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var temp = addUID({ name: 'Lam', age: 25 });
console.log(temp);
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        //further implementations of linked list which I'm a bit too lazy to do.
        this.data = [];
    }
    return LinkedList;
}());
var tempList;
tempList = new LinkedList();
//ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHO"] = 1] = "AUTHO";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
var tempOne = {
    uid: 1,
    resourceName: ResourceType.BOOK,
    data: {}
};
//TUPLE
var arr = ['ryu', 25, true];
var tup = ['a', 1, true]; //THIS IS A TUPLE
var test = ['a', true, 2]; //THIS IS AN ARRAY

//To sum it up, let 'variable_name' : type = default value
//for functions const fnc = (a: number, b? : number) -> ? means optional
//can put default value const fnc = (a: number = 10) => void specifies return type at the end
// use as to cast type