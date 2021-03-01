interface PaymentManager{
    doPayment(payeename:string,paymentcreds:number,paymentMode:string,payeeIFSCcode:any):string;
    getPaymentStatus(refId: string):string;
}
class UPIPaymentManagerImpl implements PaymentManager{
    public doPayment(payeename:string,paymentcreds:number,paymentMode:string,payeeIFSCcode:any):string
    {
        return `Payee name:${payeename} amount: ${paymentcreds} payment mode: ${paymentMode} IFSC code:${payeeIFSCcode} `;
    }
    public getPaymentStatus(refId: string): string {
       return `Payment successful with this id ${refId} `;
    }
}
class CreditCardPaymentManagerImpl implements PaymentManager{
    public doPayment(payeename:string,paymentcreds:number,paymentMode:string,payeeIFSCcode:any):string
    {
        return `Payee name:${payeename} amount: ${paymentcreds} payment mode: ${paymentMode} IFSC code:${payeeIFSCcode} `;
    }
    public getPaymentStatus(refId: string): string {
       return `Payment successful with this id ${refId} `;
    }
}
let upi:UPIPaymentManagerImpl=new UPIPaymentManagerImpl();
console.log(upi.doPayment('gayathri',10000,'gpay','ABCD123'));
console.log(upi.getPaymentStatus('8484848484'));
let ccp:CreditCardPaymentManagerImpl=new CreditCardPaymentManagerImpl();
console.log(ccp.doPayment('keerthi',20000,'phonepay','EFGH456'));
console.log(ccp.getPaymentStatus('4848484848'));