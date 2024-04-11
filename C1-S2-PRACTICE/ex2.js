
const STUDENTS_DATA = [
  { firstName: "An", lastName: "Nguyen", batch: "A1", age: 20 },
  { firstName: "Bình", lastName: "Tran", batch: "B1", age: 22 },
  { firstName: "Cẩm", lastName: "Lê", batch: "C1", age: 21 },
  { firstName: "An", lastName: "Hoàng", batch: "A2", age: 19 }, // Duplicate first name !
];

/**
 * Update 1 student age, given his/her first name
 * @param {string} firstName - the student first name
 * @param {string} lastName - the student last name
 * @param {string} batch - the student batch
 * @param {age} newAge  - the student new age
 */
function updateStudentAge(firstName, lastName, batch, newAge) {
  let student = STUDENTS_DATA.find(
    (s) =>
      s.firstName === firstName && s.lastName === lastName && s.batch === batch
  );
  if (student) {
    student.age = newAge;
  }
}

// 1 - Update An's age to 30
updateStudentAge("An", "Nguyen", "A1", 30);

// 2 - Print the updated data
console.log(JSON.stringify(STUDENTS_DATA));
