// This function takes a range and returns an array containing numbers within the range

function arrayFromRange(min, max) {
    const array = [];

    for (let i = min; i <= max; i++)
        array.push(i);

    return array;
}

const numbers = arrayFromRange(-10, -4);

console.log(numbers);