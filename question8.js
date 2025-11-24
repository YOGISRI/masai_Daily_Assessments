// a) Output & Explanation

if (true) {
    let x = 10;   
    var y = 20;   
}

console.log(y);  

console.log(x);  





// b) Safe access using optional chaining


const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};

console.log(profile?.user?.details?.email);  
console.log(profile?.user?.details?.phone);  

// c) Example showing how optional chaining prevents runtime errors


const student = {
  name: "Leo"
};
console.log(student?.address?.city); 
