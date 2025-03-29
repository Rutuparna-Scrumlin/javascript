const person = {
    name:"Devranjan",
    age:25,
    contact:"9876789878",
    message:function(){
        return "Hello "+this.name +" Welcome";  //this refres to the current object or instance
    }
}

console.log(person.message());

//foreach array iteration
const numarray = [1,2,3,4,5,6];
numarray.forEach(num => {
    console.log(num * 2);
});
//map()
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled);

//Finding even number from the array
const array = [23,54,12,66,87,90,34,56,78];
let x = [];
array.forEach(num=>{
    if(num%2 == 0){
        x.push(num);
    }
});
console.log("the even number are "+x);
console.log(typeof x)

//by using filter()
const newarray = [23,54,12,66,87,90,34,56,78];
const evendata = newarray.filter(num => num%2 == 0);
console.log("the even data array"+evendata);

//reduce()
let dummy = [23,54,12,66,87,90,34,56,78];
dummy = dummy.reduce((acc,num)=>acc+num,0);
console.log(dummy);

const newele = [23,54,12,66,87,90,34,56,78];
const val= newele.reduce((acc,num)=> (num>acc ? num:acc));
console.log(val);


//object literal
const newperson = {
    name:"Devranjan",
    age:25,
    contact:"9876789878",
    message:function(){
        return `my name is ${this.name} and my contact is ${this.contact}`;  //this refres to the current object or instance
    }
}
console.log(newperson.message());




