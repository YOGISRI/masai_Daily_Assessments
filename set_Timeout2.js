
const loadingInterval = setInterval(() => {
  console.log("loading...");
}, 1000);
setTimeout(() => {
  clearInterval(loadingInterval);
  console.log("Loaded successfully!");
}, 5000);
