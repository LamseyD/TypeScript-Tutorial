var Invoice = /** @class */ (function () {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    //only works if there is access modifier
    function Invoice(client, details, amount) {
        var _this = this;
        this.client = client;
        this.details = details;
        this.amount = amount;
        this.format = function () {
            return _this.client + " owes $" + _this.amount + " for " + _this.details;
        };
    }
    return Invoice;
}());
export default Invoice;
