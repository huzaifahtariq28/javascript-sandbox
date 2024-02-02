function countTruthy(array) {
    let count = 0;

    for (let element of array) {
        if (element) 
            count++;
    }

    return count;
}

const array = [0, 1, 2, 3];

console.log(countTruthy(array));