// This function takes the original array, the index of the element to be moved and the offset for the move as arguments. 
//This function then moves the element at the given index to the new position depending on the provided offset.

function move(array, index, offset) {
    const position = index + offset;

    if (position < 0 || position > array.length) {
        console.error('Invalid offset');
        return;
    }

    const result = [...array];
    
    const removedElement = result.splice(index, 1)[0];
    result.splice(position, 0, removedElement);

    return result;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const output = move(numbers, 2, -2);

console.log(output);