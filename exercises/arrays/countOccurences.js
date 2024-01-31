function countOccurences(array, searchElement) {
    // let count = 0;

    // for (let value of array)
    //     if (value === searchElement)
    //         count++;

    // return count;

    return array.reduce((accumulator, current) => {
        const occurance = (current === searchElement) ? 1 : 0;
        return accumulator + occurance;
    }, 0);
}

const numbers = [1, 2, 3, 4, 1, 2, 3, 1];

const count = countOccurences(numbers, 1);

console.log(count);