var UPIPaymentManagerImpl = /** @class */ (function () {
    function UPIPaymentManagerImpl() {
    }
    UPIPaymentManagerImpl.prototype.doPayment = function (payeename, paymentcreds, paymentMode, payeeIFSCcode) {
        return "Payee name:" + payeename + " amount: " + paymentcreds + " payment mode: " + paymentMode + " IFSC code:" + payeeIFSCcode + " ";
    };
    UPIPaymentManagerImpl.prototype.getPaymentStatus = function (refId) {
        return "Payment successful with this id " + refId + " ";
    };
    return UPIPaymentManagerImpl;
}());
var CreditCardPaymentManagerImpl = /** @class */ (function () {
    function CreditCardPaymentManagerImpl() {
    }
    CreditCardPaymentManagerImpl.prototype.doPayment = function (payeename, paymentcreds, paymentMode, payeeIFSCcode) {
        return "Payee name:" + payeename + " amount: " + paymentcreds + " payment mode: " + paymentMode + " IFSC code:" + payeeIFSCcode + " ";
    };
    CreditCardPaymentManagerImpl.prototype.getPaymentStatus = function (refId) {
        return "Payment successful with this id " + refId + " ";
    };
    return CreditCardPaymentManagerImpl;
}());
var upi = new UPIPaymentManagerImpl();
console.log(upi.doPayment('gayathri', 10000, 'gpay', 'ABCD123'));
console.log(upi.getPaymentStatus('8484848484'));
var ccp = new CreditCardPaymentManagerImpl();
console.log(ccp.doPayment('keerthi', 20000, 'phonepay', 'EFGH456'));
console.log(ccp.getPaymentStatus('4848484848'));
