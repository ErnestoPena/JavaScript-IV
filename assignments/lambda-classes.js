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
      return `Today we are learning about {subject}`;
    }
    grade(student , subject) {
      return  '{student.name} receives a perfect score on {subject}'
    }
  }
  
  class Student extends Person {
    constructor(student_att) {
      super(student_att);
        this.previousBackground = student_att.previousBackground;
        this.className = student_att.className;
        this.favSubjects = student_att.favSubjects;
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
      return `${this.name} announces to ${channel}, @channel standy times!​​​​​`
    }
  
    debugsCode() {
  
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
      previousBackground : 'Bartender',
      className : 'CCS234',
      favSubjects : ['HTML','CSS','Art','Music']
  })
  
  const David = new ProjectManagers({
      gradClassName : 'CS1',
      favInstructor : 'Martha'
  })
  
  
  console.log(Loid.listsSubjects());









