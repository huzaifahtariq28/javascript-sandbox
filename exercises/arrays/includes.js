//This function takes an array and a search element as an argument. 
// If the search element is present in the array it returns true, otherwise it returns false.

function includes(array, searchElement) {
    for (let value of array)
        if (value === searchElement) 
            return true;

    return false;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(includes(numbers, 3));
console.log(includes(numbers, -1));
