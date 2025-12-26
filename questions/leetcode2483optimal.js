
let customers = "YYYY";

var bestClosingTime = function(customers) {
    let penalty = 965

    let minIndex = 0
    let minPenalty = penalty

    for (let i = 0; i < customers.length; i++) {
        penalty = penalty + (customers[i] === 'N' ? 1 : -1)

        if (penalty < minPenalty) {
            minPenalty = penalty
            minIndex = i + 1;
        }
    }

    return minIndex
};
console.log(bestClosingTime(customers));