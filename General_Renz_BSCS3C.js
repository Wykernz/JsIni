
// CLASS 1: PERSON
class Person {

    // ENCAPSULATION #1
    #id;
    #name;

    // CONSTRUCTOR #1
    constructor(id, name) {
        this.#id = id;
        this.#name = name;
    }

    // METHOD 1
    getId() {
        return this.#id;
    }

    // METHOD 2
    getName() {
        return this.#name;
    }

    // METHOD 3
    introduce() {
        return "Hello, my name is " + this.#name;
    }

    // ABSTRACTION
    getRole() {
        return "Person";
    }
}
// CLASS 2: STUDENT
// INHERITANCE #1
class Student extends Person {

    // ENCAPSULATION #2
    #grade;

    constructor(id, name, course, grade) {

        // Inherit id and name from Person
        super(id, name);

        this.course = course;
        this.#grade = grade;
    }

    // METHOD 4
    getGrade() {
        return this.#grade;
    }

    // METHOD 5
    checkStatus() {

        // CONDITIONAL #1
        if (this.#grade >= 75) {
            return "PASSED";
        } else {
            return "FAILED";
        }
    }

    // METHOD 6
    getRole() {
        return "Student";
    }
}
// CLASS 3: TEACHER
// INHERITANCE #2
class Teacher extends Person {

    constructor(id, name, subject) {

        super(id, name);

        this.subject = subject;
    }
    // METHOD 7
    teach() {
        return this.getName() + " teaches " + this.subject;
    }
    // METHOD 8
    getRole() {
        return "Teacher";
    }
}
// CLASS 4: COURSE
class Course {

    // CONSTRUCTOR #2
    constructor(code, name, units) {

        this.code = code;
        this.name = name;
        this.units = units;
    }
    // METHOD 9
    getCourseInfo() {
        return this.code + " - " + this.name;
    }
}
// CREATE OBJECTS
// OBJECT #1
let student1 = new Student(
    101,
    "Renz",
    "Computer Science",
    90
);


// OBJECT #2
let student2 = new Student(
    102,
    "Zorii",
    "Computer Science",
    95
);

// OBJECT #3
let teacher1 = new Teacher(
    201,
    "Mr. Yuri Ortiz",
    "Mobile Programming"
);
// OBJECT #4
let course1 = new Course(
    "CSELEC1",
    "Programming",
    3
);
// OBJECT LITERAL #1
let school = {

    name: "Northwest Samar State University",
    location: "Samar, Philippines",
    department: "Computer Science",
    students: [student1,student2]
};
// OBJECT LITERAL #2
let system = {

    passingGrade: 75,
    schoolYear: "2026-2027",
    maxStudents: 50,
    teachers: [teacher1],
    courses: [course1]
};

// DISPLAY SCHOOL INFORMATION
console.log("SCHOOL INFORMATION");


console.log("School: " + school.name);
console.log("Location: " + school.location);
console.log("Department: " + school.department);
console.log("School Year: " + system.schoolYear);
// DISPLAY STUDENTS
console.log("           STUDENTS");
// LOOP #1
for (let i = 0; i < school.students.length; i++) {

    let student = school.students[i];

    console.log("\nID: " + student.getId());
    console.log("Name: " + student.getName());
    console.log("Course: " + student.course);
    console.log("Grade: " + student.getGrade());
    console.log("Role: " + student.getRole());

    if (student.getGrade() >= 90) {

        console.log("Remark: Excellent");

    } else {

        console.log("Remark: Keep Improving");
    }

    if (student.getGrade() >= system.passingGrade) {

        console.log("Status: Passed");
    } else {
        console.log("Status: Failed");
    }
}
// DISPLAY TEACHERS
console.log("TEACHERS");

// LOOP #2
for (let i = 0; i < system.teachers.length; i++) {

    let teacher = system.teachers[i];

    console.log("\nID: " + teacher.getId());
    console.log("Name: " + teacher.getName());
    console.log("Role: " + teacher.getRole());
    console.log(teacher.introduce());
    console.log(teacher.teach());
}

// DISPLAY COURSES
console.log("COURSES");

//LOOP3
for (let i = 0; i < system.courses.length; i++) {

    let course = system.courses[i];
    console.log("\nCourse: " + course.getCourseInfo());
    console.log("Units: " + course.units);
}
if (school.students.length > 0) {

    console.log(
        "There are " +
        school.students.length +
        " students registered."
    );

} else {

    console.log("There are no students registered.");
}
if (system.courses.length > 0) {
    console.log("Courses are available.");
} else {
    console.log("No courses available.");
}



