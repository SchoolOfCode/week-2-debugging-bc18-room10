
// fix the code so that it returns correct rgade 
// e.g. 90 = 'A'

function getGradeFromPoints(points) {
  if (points >= 90) {
    return "A";
  } else if (points >= 70) {
    return "B";
  } else if (points >= 50) {
    return "C";
  } else if (points >= 40) {
    return "D";
  }
  return "E";
}

const grade = getGradeFromPoints(40);
console.log(`Grade, should be ${grade}.`);

