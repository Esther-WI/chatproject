console.log(1===1); 
console.log(1==="1")
console.log(1!=1)
console.log(1!=='1')
console.log(1!="1")
console.log(2>=4)

//logic opertor
const age=18;
const count="0"
console.log(1==1 ||age>18)
console.log(!true)
console.log(age.toString())
console.log(Number(count))
console.log(Boolean("0")) 
console.log(!!"0")


if(age>=18){
  console.log("You can go out")
}else{
  console.log("You can't go out")
}

const role="pod"

if (role=="student"){
  console.log("STUDENT ACCESSED CANVAS")
}else if (role=="tm"){
  console.log("TM ACCESSED CANVAS")
}else if (role=="pod"){
  console.log("Pod lead accessed Canvas")
}


let myCount= 0;

while (myCount<5) {
  console.log(myCount)
  myCount = myCount + 1;
}

day = 9

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
    default:
    console.log(`${day} is not a day`)
}

let score = 20;
let result;

switch(true){                                                                                                                                                                                                                                                  
  case score >= 90:
    result = "A";
    break;
  case score >= 80:
    result = "B";
    break;
  case score >= 70: 
    result = "C";
    break;
  case score >= 60: 
    result = "D";
    break;
  default:
    result = "F"; 
}
console.log(result);

let count2 = 5;
do {
  console.log(count2);
  count2++;
} while (count2 < 5);

const laptop = {
  brand: "Apple",
  model: "Macbook Pro",
  year: 2020,
  browse: function() {
    console.log("SEarching object")
  }

  };

console.log(laptop.brand)
console.log(laptop.browse)
console.log("k")




 
 //naming classes use Pascal case
 const student = {
   name: "John Doe",
   study: function(){
   return `${this.name} is studying`
  },
  browse: function(browser){
    return `Using ${browser} browser`
  }

 } 
 console.log(student.study())
 console.log(student.browse("chrome"))

//classes follow Pascal Case
 class Family {
  constructor(name, members){
    this.name = name
    this.members = members

  }

 }

 const myFamily = new Family("Irungu", "6")
 //myFamily.name = "Irungu"
console.log(myFamily)

 const otherFamily = new Family("Rockelle", "2")
 console.log(otherFamily.name)


 //class Trees {
 // constructor(type,location,benefit){
   // this.type = type
    //this.location = location
    //this.benefit = benefit
  //}
    //first() {
      //return `This is the ${this.type} forest.`
    //}
    //second(){
      //return `It is mostly located in the  ${this.location}.`
    //}
    //third() {
      //return `It's benefit is  ${this.benefit}.`
    //}
 //}
 
//const get = new Trees("Rain", "Amazon Rainforest", "making timbers");
 //console.log(get.first());
 //console.log(get.second());
 //console.log(get.third());

 //const like = new Trees("Deciduous", "eastern Northern America", "its aesthetic value");
 //console.log(like.first());
  //console.log(like.second());
   //console.log(like.third());


   class Trees {
  constructor(type, location, benefit) {
    this.type = type;
    this.location = location;
    this.benefit = benefit;
    this.message = ""; // Store messages for chaining
  }

  first() {
    this.message += `This is the ${this.type} forest. `;
    return this; // Return the object for chaining
  }

  second() {
    this.message += `It is mostly located in the ${this.location}. `;
    return this;
  }

  third() {
    this.message += `Its main benefit is ${this.benefit}. `;
    return this;
  }

  print() {
    console.log(this.message.trim()); // Print the full message
    this.message = ""; // Reset message for reuse
  }

  // New method to summarize in one step
  describe() {
    return `This is the ${this.type} forest, mostly found in ${this.location}, and its main benefit is ${this.benefit}.`;
  }
}

// Example Usage
const tree1 = new Trees("Rain", "Amazon Rainforest", "providing oxygen and biodiversity");
tree1.first().second().third().print(); // Chaining Example

const tree2 = new Trees("Deciduous", "Eastern North America", "its aesthetic value");
console.log(tree2.describe()); // Using the describe method
