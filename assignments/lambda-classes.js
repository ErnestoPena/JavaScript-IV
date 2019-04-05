// CODE here for your Lambda Classes


// Instructors => Extensions of Persons
// Students => Extension of Person
// Project Managers => Extensions of Instructors

class Person {
    constructor(person_att) {
      this.name = person_att.name;
      this.age = person_att.age;
      this.location = person_att.location;
      this.gender = person_att.gender;
    }
  
    hello() {
      return `Hello, my name is ${this.name}, I am from ${this.location}`;
    }
  }
  
  
  class Instructor extends Person {
    constructor(instructor_att) {
      super(instructor_att);
      this.specialty = instructor_att.specialty;
      this.favLanguage = instructor_att.favLanguage;
      this.catchPhrase = instructor_att.catchPhrase;
    }
  
    demo (subject) {
      return `Today we are learning about ${subject}`;
    }
    grade(student , subject) {
      return  `${student.name} receives a perfect score on ${subject}`;
    }

    deductPoints(student) {
      this.grade = Math.floor((Math.random() * 100) + 1); //Setting the student grade to a ramdom number.

      const result = this.grade - Math.floor((Math.random() * 10));
    
      console.log(`The student new Grade is ${result}`);
    
        if (result>=70) {
          return `Student ${this.name} is Approved`;
        } else {
          return `Student ${this.name} is Not Approved`;
        }
    }
  }
  
  class Student extends Person {
    constructor(student_att) {
      super(student_att);
        this.previousBackground = student_att.previousBackground;
        this.className = student_att.className;
        this.favSubjects = student_att.favSubjects;
        this.grade = student_att.grade;
    }
    listsSubjects() {
      return `Student favorite subjects: ${this.favSubjects}`;
    }
  
    PRAssignment(subject) {
      return `${this.name} has submitted a PR for ${subject}`;
    }
  
    sprintChallenge(subject) {
      return `${this.name} has begun sprint challenge on ${subject}`;
    }
  }
  
  
  class ProjectManagers extends Instructor {
    constructor(ProjectManager_att) {
      super(ProjectManager_att);
      this.gradClassName = ProjectManager_att.gradClassName;
      this.favInstructor = ProjectManager_att.favInstructor;
    }
    standup(channel) {
      return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    }
  
    debugsCode(student , subject) {
      return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
  }
  
  
  const Laura = new Person({
      name: 'Laura',  
      location: 'Chicago',
      gender: 'F'
    })
  
  const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });
  
  const Loid = new Student({
      name: 'Loid',
      location: 'NY',
      age: 45,
      gender: 'male',
      grade: 89,
      previousBackground : 'Bartender',
      className : 'CCS234',
      favSubjects : ['HTML','CSS','Art','Music']
  })
  
  const Louis = new Student({
      name: 'Louis',
      location: 'Canada',
      age: 29,
      gender: 'male',
      grade: 89,
      previousBackground : 'Technician',
      className : 'CCS245',
      favSubjects : ['HTML','CSS']
  })
  const David = new ProjectManagers({
      name: 'David',
      location: 'Miami',
      age: 34,
      gender: 'male',
      gradClassName : 'CS1',
      favInstructor : 'Martha'
  })
  
  
  console.log(Loid.listsSubjects()); //Invoking student list subjects
  console.log(Laura.hello()); //Invoking method in Person class.
  console.log(Loid.sprintChallenge('JavaScript IV')); //Invoking student method and passing an object and string as an argument 
  console.log(Louis.PRAssignment('Math'));
  console.log(fred.demo('C++'));
  console.log(fred.grade(student={name:'Ernesto'}, 'Math'));
  console.log(David.standup('Cool Channel'));
  console.log(David.debugsCode(student= {name:'Troy'}, 'Geography'));

  console.log(fred.deductPoints(Louis)); //STRETCH CHALLENGE
  



