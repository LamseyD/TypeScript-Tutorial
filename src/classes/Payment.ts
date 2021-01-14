import HasFormatter from '../interfaces/HasFormatter.js'

class Payment implements HasFormatter{
    // readonly client: string;
    // private details: string;
    // public amount: number;

    //only works if there is access modifier
    constructor(
        readonly recipient: string,
        private details: string,
        public amount: number
    ){}

    format = () => {
        return `${this.recipient} owes $${this.amount} for ${this.details}`
    }
}

export default Payment