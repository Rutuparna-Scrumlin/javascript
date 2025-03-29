// Function
function sayHello() {
    console.log("Hello!");
  }
  
  // Method
  const person = {
    sayHello: function() {
      console.log("Hello from person!");
    }
  };
  sayHello();  // Function call
  person.sayHello();  // Method call


  const car = {
    brand: 'Toyota',
    showBrand: function() {
      console.log(this.brand);
    }
  };
  
  car.showBrand();  // Output: Toyota
  //for this keyword

