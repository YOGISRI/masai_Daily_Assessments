function evaluateEmployees(employees) {
  // 1. Filter employees who completed more than 5 tasks
  const filtered = employees.filter(emp => emp.tasksCompleted > 5);

  // 2. Map filtered employees to assign performance level
  const evaluated = filtered.map(emp => {
    let performance = "";

    if (emp.rating > 4.5) {
      performance = "Excellent";
    } else if (emp.rating >= 3.0 && emp.rating <= 4.5) {
      performance = "Good";
    }

    return {
      name: emp.name,
      performance: performance
    };
  });

  // 3. Sort employees based on performance (Excellent → Good)
  const priority = { "Excellent": 1, "Good": 2 };

  evaluated.sort((a, b) => priority[a.performance] - priority[b.performance]);

  // 4. Return final array
  return evaluated;
}