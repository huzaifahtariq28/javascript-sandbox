function calculateGrade(marks) {
  const average = calculateAverage(marks);

  if (average < 60) return 'F';
  if (average < 70) return 'D';
  if (average < 80) return 'C';
  if (average < 90) return 'B';

  return 'A';
}

function calculateAverage(array) {
  let sum = 0;

  for (let element of array) sum += element;

  return sum / array.length;
}

const array = [80, 80, 50];

console.log(calculateGrade(array));
