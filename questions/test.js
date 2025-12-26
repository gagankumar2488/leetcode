let happiness = [1,1,1,1]
let k = 2

var maximumHappinessSum = function(happiness, k) {
    for (let x of happiness){
        handleArray(k,x);
    }
    return totalHappiness();
};

let largestNums = []

const handleArray = (k, child) => {
    if (largestNums.length < k){
        insertIntoSorted(child);
    }
    else{
        if (child > largestNums.at(-1)){
            largestNums.pop();
            insertIntoSorted(child);
        }
    }
}

const insertIntoSorted = (child) => {
    if(largestNums.length === 0){
        largestNums.push(child);
        return;
    }
    if(largestNums.length===1){
        if(largestNums[0] > child){
            largestNums.push(child);
            return;
        }else{
            largestNums.splice(0,0,child);
            return;
        }
    }
    for (let x = 0; x < (largestNums.length) - 1;x++){
        if (x === 0){
            if(largestNums[0] < child){
                largestNums.splice(0,0,child);
                return;
            }
        }
        else if (largestNums[x] > child && largestNums[x+1] <= child){
            largestNums.splice(x+1, 0, child);
            return;
        }
    }
    largestNums.push(child)

}
const totalHappiness = () => {
    console.log(largestNums)
    let happy = 0
    for (let x = 0; x < largestNums.length;x++){
        happy += (largestNums[x]-x > 0) ? largestNums[x] -x : 0;
    }
    return happy;
}

console.log(maximumHappinessSum(happiness,k));