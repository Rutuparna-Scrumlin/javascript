const person = {
    name: 'Rutuparna',
    address:"BBSR",
    phoneno:"8987876789",
    status:true,
    salary:"100000",
    details: function() {
      console.log(`Hello, my name is ${this.name} 
        salary = ${this.salary}
        status = ${this.status}`);
    }
  };
  person.details();