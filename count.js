function countCategories(categories) {
  
  const result = categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  return result;
}

function countAndSortCategories(categories) {
  // Step 1: Count categories
  const counts = categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  // Step 2: Convert to array and sort
  const sortedEntries = Object.entries(counts)
    .sort((a, b) => b[1] - a[1]);

  // Step 3: Convert back to object
  const sortedObj = {};
  sortedEntries.forEach(([key, value]) => {
    sortedObj[key] = value;
  });

  return sortedObj;
}

// Example Input
const input = [
  "electronics", "clothing", "electronics",
  "toys", "clothing", "toys", "toys"
];

// Example Output
console.log(countCategories(input));        
console.log(countAndSortCategories(input)); 
