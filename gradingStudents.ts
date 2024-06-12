function gradingStudents(grades: number[]): number[] {
  // Write your code here
  return grades.map((grade) => {
    if (grade < 38) {
      return grade;
    } else {
      let kelipatanLima = Math.ceil(grade / 5) * 5;
      if (kelipatanLima - grade < 3) {
        return kelipatanLima;
      } else {
        return grade;
      }
    }
  });
}
