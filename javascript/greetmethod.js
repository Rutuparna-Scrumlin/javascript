const person = {
    name: 'Devranjan',
    greet: function() {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
  person.greet();