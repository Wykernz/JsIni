//Let VARIABLES
let studentName = "Renz";
let studentAge = 20;
let studentCourse = "Computer Science";
let studentYear = 2;
let studentGrade = 90;
let teacherName = "Mr. Ortiz";
let teacherSubject = "JavaScript";
let courseCode = "CSELEC1";
let courseName = "Mobile Programming";
let courseUnits = 3;
let schoolYear = "2026-2027";
let passingGrade = 75;

// Const VARIABLES
const schoolName = "Northwest Samar State University";
const schoolLocation = "Samar, Philippines";
const department = "Computer Science";
const studentId = 101;
const teacherId = 201;
const courseId = 301;
const maxStudents = 50;
const semester = "First Semester";
const room = "Computer Laboratory 1";
const program = "BS Computer Science";

// ARRAYS
let students = [
    "Renz",
    "Zoie",
    "Zorii",
    "Nerzo"
];

let grades = [
    90,
    85,
    72,
    95
];

let subjects = [
    "JavaScript",
    "Database",
    "Networking",
    "Programming"
];

//TEMPLATE LITERALS
console.log(`Student Name: ${studentName}`);
console.log(`Student Age: ${studentAge}`);
console.log(`Student Course: ${studentCourse}`);
console.log(`Student Year: ${studentYear}`);
console.log(`Student Grade: ${studentGrade}`);
console.log(`Teacher Name: ${teacherName}`);
console.log(`Teacher Subject: ${teacherSubject}`);
console.log(`Course Code: ${courseCode}`);
console.log(`Course Name: ${courseName}`);
console.log(`Course Units: ${courseUnits}`);
console.log(`School Year: ${schoolYear}`);
console.log(`Passing Grade: ${passingGrade}`);

//ARROW FUNCTIONS
let showStudent = () => {
    return `Student: ${studentName}`;
};
let showCourse = () => {
    return `Course: ${courseCode} - ${courseName}`;
};
let showTeacher = () => {
    return `Teacher: ${teacherName} - ${teacherSubject}`;
};
let calculateGrade = (grade) => {
    return `Grade: ${grade}`;
};
let checkPassing = (grade) => {
    return grade >= passingGrade;
};
// Display arrow function results
console.log(showStudent());
console.log(showCourse());
console.log(showTeacher());
console.log(calculateGrade(studentGrade));
console.log(`Passed: ${checkPassing(studentGrade)}`);
//DESTRUCTURED ARRAYS
let [firstStudent, secondStudent] = students;
console.log(`First Student: ${firstStudent}`);

console.log(`Second Student: ${secondStudent}`);
let [firstGrade, secondGrade, thirdGrade] = grades;

console.log(`First Grade: ${firstGrade}`);
console.log(`Second Grade: ${secondGrade}`);

let [firstSubject, secondSubject] = subjects;
console.log(`First Subject: ${firstSubject}`);
console.log(`Second Subject: ${secondSubject}`);

//OBJECT LITERALS
let student = {
    id: studentId,
    name: studentName,
    age: studentAge,
    course: studentCourse,
    grade: studentGrade
};
let teacher = {
    id: teacherId,
    name: teacherName,
    subject: teacherSubject,
    room: "Computer Laboratory 1"
};
let course = {
    id: courseId,
    code: courseCode,
    name: courseName,
    units: courseUnits
};
//DESTRUCTURED OBJECT LITERALS
let {
    id: studentIDNumber,
    name: studentFullName,
    grade: studentFinalGrade
} = student;
console.log(`Student ID: ${studentIDNumber}`);
console.log(`Student Name: ${studentFullName}`);
console.log(`Final Grade: ${studentFinalGrade}`);

let {
    name: teacherFullName,
    subject: teacherSubjectName
} = teacher;
console.log(`Teacher: ${teacherFullName}`);
console.log(`Subject: ${teacherSubjectName}`);

let {
    code: subjectCode,
    name: subjectName,
    units: subjectUnits
} = course;

console.log(`Subject Code: ${subjectCode}`);
console.log(`Subject Name: ${subjectName}`);
console.log(`Subject Units: ${subjectUnits}`);

//ARRAYS USING SPREAD OPERATOR
let basicSubjects = [
    "English",
    "Mathematics",
    "Science"
];
let allSubjects = [
    ...basicSubjects,
    "JavaScript",
    "Database"
];
console.log(`All Subjects: ${allSubjects}`);

// ORIGINAL ARRAY
let oldGrades = [
    80,
    85,
    88
];
let completeGrades = [
    ...oldGrades,
    90,
    95
];

console.log(`Complete Grades: ${completeGrades}`);

//OBJECT LITERALS USING SPREAD
let basicStudent = {
    name: "Renz",
    age: 20
};
let completeStudent = {
    ...basicStudent,
    course: "Computer Science",
    grade: 90
};
console.log(`Complete Student: ${completeStudent.name}`);
console.log(`Student Course: ${completeStudent.course}`);

let basicCourse = {
    code: "CSELEC1",
    name: "Mobile Programming"
};
let completeCourse = {
    ...basicCourse,
    units: 3,
    room: "Computer Laboratory 1"
};
console.log(`Course Code: ${completeCourse.code}`);
console.log(`Course Room: ${completeCourse.room}`);

// ARRAYS USING .map()
let upperStudents = students.map((name) => {
    return name.toUpperCase();
});
console.log(`Uppercase Students: ${upperStudents}`);


let gradeResults = grades.map((grade) => {
    return `Grade: ${grade}`;
});
console.log(`Grade Results: ${gradeResults}`);

//ARRAYS USING .filter()
let passingStudents = grades.filter((grade) => {
    return grade >= passingGrade;
});
console.log(`Passing Grades: ${passingStudents}`);

let highGrades = grades.filter((grade) => {
    return grade >= 90;
});
console.log(`High Grades: ${highGrades}`);

//OPTIONAL CHAINING
let studentProfile = {
    name: "Renz",
    course: {
    name: "Computer Science",
    adviser: {
    name: "Mr. Yuri Ortiz"
        }
    }
};

let adviserName = studentProfile.course?.adviser?.name;
console.log(`Adviser: ${adviserName}`);

let teacherRoom = teacher?.room;
console.log(`Teacher Room: ${teacherRoom}`);

//FINAL INFORMATION
console.log(`School: ${schoolName}`);
console.log(`Location: ${schoolLocation}`);
console.log(`Department: ${department}`);
console.log(`Program: ${program}`);
console.log(`Semester: ${semester}`);
console.log(`Room: ${room}`);
console.log(`Schedule: ${schedule}`);
console.log(`Status: ${status}`);
console.log(`PROGRAM FINISHED`);


