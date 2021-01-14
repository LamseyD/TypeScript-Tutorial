import HasFormatter from '../interfaces/HasFormatter.js'

class Invoice implements HasFormatter{
    // readonly client: string;
    // private details: string;
    // public amount: number;

    //only works if there is access modifier
    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ){}

    format = () => {
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}

export default Invoice