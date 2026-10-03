class Person {
  constructor(name) { this.name = name; }
  sayHello() { console.log("Hi, I am " + this.name); }

}
 
class Student extends Person {
  study() { console.log(this.name + " is studying."); }
}

class Watching extends Student {
  watch() { console.log(this.name + " is watching."); }
}

const student = new Student("Marwin");
const watching = new Watching("Marwin");
student.sayHello();
student.study();
watching.watch();
watching.sayHello();