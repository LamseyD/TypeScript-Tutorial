var Payment = /** @class */ (function () {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    //only works if there is access modifier
    function Payment(recipient, details, amount) {
        var _this = this;
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
        this.format = function () {
            return _this.recipient + " owes $" + _this.amount + " for " + _this.details;
        };
    }
    return Payment;
}());
export default Payment;
