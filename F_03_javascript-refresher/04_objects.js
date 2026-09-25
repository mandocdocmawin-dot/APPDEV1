const aboutMe = {
  name: "Marwin Mandocdoc",
  age: 20,
  course: "BSIS",
  year: "3rd Year",
  introduce: function () {
    console.log(`Hi, I'm ${this.name}, age ${this.age}, and I'm in ${this.course} ${this.year}.`);
  }
};
 
aboutMe.hobby = "Gaming";
aboutMe.introduce();
console.log("This is Object:", aboutMe);