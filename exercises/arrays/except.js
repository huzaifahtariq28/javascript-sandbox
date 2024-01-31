// This function takes the original array and the array of elements to be excluded as arguments and returns a new array without those elements.

function except(array, excluded) {
    const result = [];

    for (let value of array)
        if (!excluded.includes(value))
            result.push(value);

    return result;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const output = except(numbers, [1, 2]);

console.log(output);