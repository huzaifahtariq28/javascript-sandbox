function getMax(array) {
  if (array.lenght === 0) return undefined;
  // array.sort();
  // array.reverse();

  // return array[0];

  return array.reduce((accumulator, current) =>
    current > accumulator ? current : accumulator
  );
}

const numbers = [1, 2, 3, 4];

const max = getMax(numbers);

console.log(max);
