function processStudents(students) {
  // 1. Filter students who scored above 60
  const filtered = students.filter(student => student.marks > 60);

  // 2. Sort by marks in descending order
  const sorted = filtered.sort((a, b) => b.marks - a.marks);

  // 3. Map to extract only the names
  const names = sorted.map(student => student.name);

  // 4. Return the array of names
  return names;
}