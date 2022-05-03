const onlineQuiz = [
  {
    quizName: "Fundamentals",
    quizModule: "Calculus",
    quizScore: 83,
    studentId: 01,
    studentName: "Mark Anderson",
    submissionDate: "5/3/2022",
  },
  {
    quizName: "Section 2",
    quizModule: "Variables",
    quizScore: 91,
    studentId: 02,
    studentName: "Madison Anderson",
    submissionDate: "5/2/2022",
  },
  {
    quizName: "Section 3",
    quizModule: "Functions",
    quizScore: 67,
    studentId: 03,
    studentName: "Michael Anderson",
    submissionDate: "5/1/2022",
  },
];

// Function takes a date and an array as parameters and returns an array of
// objects that have that same date
const filterByDate = (date, submissions) => {
  const mySubmissions = [];
  for (let i = 0; i < submissions.length; i++) {
    if (submissions[i].submissionDate == date) {
      mySubmissions.push(submissions[i]);
    }
  }
  return mySubmissions;
};

// Function takes a date and array of objects as a
// parameter and returns the the objects of the array that
// don't match the date
const getOppositeOfDate = (date, submissions) => {
  const mySubmissions = [];
  for (let i = 0; i < submissions.length; i++) {
    if (!(submissions[i].submissionDate == date)) {
      mySubmissions.push(submissions[i]);
    }
  }
  return mySubmissions;
};

// Function takes a student Id and array of objects and returns
// an array with the object of a student that matches the id
const filterByStudentId = (Id, submissions) => {
  const studentIds = [];
  for (let j = 0; j < submissions.length; j++) {
    if (Id == submissions[j].studentId) {
      studentIds.push(submissions[j]);
    }
  }
  return studentIds;
};

// Function takes an array of objects and returs the names
// of the objects
const filterByStudentName = (submissions) => {
  let myNamesList = [];
  for (let i = 0; i < submissions.length; i++) {
    myNamesList.push(submissions[i].studentName);
  }
  return myNamesList;
};

// Function takes a date, a function that checks dates against names and
// an array of objects and returns a list of names that haven't taken a
// quiz for the date given
const findUnsubmitted = (date, namesList, submissions) => {
  let myNames = [];
  namesList = getOppositeOfDate(date, submissions);
  for (let i = 0; i < namesList.length; i++) {
    if (namesList[i] != submissions[i].studentName) {
      myNames.push(namesList[i].studentName);
    }
  }
  return myNames;
};

// Function that takes an array of objects and loops through it to get
// the quiz scores of each object then it returns the average of the scores
const getAverageScore = (submissions) => {
  let sum = 0;
  for (let i = 0; i < submissions.length; i++) {
    sum += submissions[i].quizScore;
  }
  const result = sum / submissions.length;
  return result.toFixed(1);
};

let result = findUnsubmitted("5/1/2022", filterByDate, onlineQuiz);
console.log(result);

// let student = filterByDate("5/4/2022", onlineQuiz);
// console.log(student);

// let average = getAverageScore(onlineQuiz);
// console.log(average);
