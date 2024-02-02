function countOccurences(array, searchElement) {
  if (!Array.isArray(array)) throw new TypeError('Invalid Array');

  return array.reduce((accumulator, current) => {
    const occurance = current === searchElement ? 1 : 0;
    return accumulator + occurance;
  }, 0);
}

// const numbers = [1, 2, 3, 4, 1, 2, 3, 1];
const numbers = undefined;

try {
  const count = countOccurences(numbers, 1);

  console.log(count);
} catch (error) {
  console.error(error);
}
