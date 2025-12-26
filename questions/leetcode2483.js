
let customers = "YYYY";

var bestClosingTime = function(customers) {
    let penalty = calculateZeroHour(customers);
    let penaltyArray = calculatePenaltyArray(customers,penalty);
    let optimalHour = calculateOptimalHour(penaltyArray);
    return optimalHour;
};

const calculateZeroHour = (customers)=>{
    let initialPenalty = 0;
    for (let customer of customers){
        if(customer === "Y"){
            initialPenalty += 1;
        }
    }
    return(initialPenalty);
}
const calculatePenaltyArray = (customers,penalty)=>{
    let penaltyArray = [];
    penaltyArray.push(penalty);
    for (let customer of customers){
        if (customer === "Y"){
            penalty -= 1
            penaltyArray.push(penalty);
        }else{
            penalty += 1
            penaltyArray.push(penalty);
        }
    }
    return (penaltyArray);
}
const calculateOptimalHour = (penaltyArray)=>{
    let currentOptimal = 0;
    for (let x in penaltyArray){
        if(penaltyArray[x] < penaltyArray[currentOptimal]){
            currentOptimal = x;
        }
    }
    return currentOptimal;
}
bestClosingTime(customers);