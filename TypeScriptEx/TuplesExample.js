var CustomerTuple = [101, "gayathri", "kumar", 12345];
CustomerTuple.push(102, "shreen", "veveliya", 567891);
CustomerTuple.push(103, "arya", "lal", 789101);
CustomerTuple.push(104, "daisy", "mary", 9101112);
console.log(CustomerTuple);
function display(tuple_values) {
    for (var i = 0; i < CustomerTuple.length; i++) {
        console.log(CustomerTuple[0]);
        console.log(CustomerTuple[2]);
        console.log(CustomerTuple[i]);
    }
    CustomerTuple.pop();
    display(CustomerTuple);
}
