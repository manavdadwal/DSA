/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

// METHOD 1

function gradingStudents(grades) {
  let result = [];
  let finalGrade = 0;
  let originalGrade = 0;
  for (let i = 0; i <= grades.length; i++) {
    originalGrade = grades[i];
    finalGrade = Math.ceil(originalGrade / 5) * 5;
    if (originalGrade < 38) {
      result.push(originalGrade);
    } else {
      if (Math.abs(finalGrade - originalGrade) < 3) {
        result.push(finalGrade);
      } else {
        result.push(originalGrade);
      }
    }
  }
  return result;
}

// METHOD 2

function roundGrade(grade) {
  if (grade < 38) return grade;
  const nextMultiple = Math.ceil(grade / 5) * 5;
  return nextMultiple - grade < 3 ? nextMultiple : grade;
}

function gradingStudents(grades) {
  return grades.map(roundGrade);
}

// METHOD 3

function gradingStudents(grades) {
  return grades.map((grade) => {
    if (grade < 38) return grade;

    const nextMultiple = Math.ceil(grade / 5) * 5;
    return nextMultiple - grade < 3 ? nextMultiple : grade;
  });
}

// METHOD 4

function gradingStudents(grades) {
  const result = [];

  for (const grade of grades) {
    if (grade < 38) {
      result.push(grade);
    } else {
      const next = Math.ceil(grade / 5) * 5;
      result.push(next - grade < 3 ? next : grade);
    }
  }

  return result;
}

// Test cases
console.log(gradingStudents([73, 67, 38, 33])); // Output: [75, 67, 40, 33]
console.log(gradingStudents([84, 29, 57, 38])); // Output: [85, 29, 57, 38]
